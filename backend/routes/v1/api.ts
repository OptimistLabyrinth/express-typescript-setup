import express from 'express'
import path from 'path'
import multer from 'multer'
const v1ApiRouter = express.Router()

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, './uploads/')
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname)
      done(null, path.basename(file.originalname, ext) + '_' + Date.now() + ext)
    }
  })
})

v1ApiRouter.post('/upload/single', upload.single('singleFile'), (req, res, next) => {
  console.log('file:', req.file)
  console.log('files:', req.files)
  console.log('body:', req.body)
  res.redirect('/upload/single')
})

v1ApiRouter.post('/upload/array', upload.array('files'), (req, res, next) => {
  console.log('file:', req.file)
  console.log('files:', req.files)
  console.log('body:', req.body)
  res.redirect('/upload/array')
})

v1ApiRouter.post('/upload/fields',
  upload.fields([{ name: 'file1' }, { name: 'file2' }]),
  (req, res, next) => {
    console.log('file:', req.file)
    console.log('files:', req.files)
    console.log('body:', req.body)
    res.redirect('/upload/fields')
  })

export default v1ApiRouter
