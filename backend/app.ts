import createError from 'http-errors'
import express, { NextFunction, Request, Response } from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import sassMiddleware from 'node-sass-middleware'

import indexRouter from './routes/index'
import usersRouter from './routes/users'

const app = express()

// view engine setup
app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'jade')

app
  .use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(sassMiddleware({
    src: path.resolve('public'),
    dest: path.resolve('public'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true
  }))
  .use(express.static(path.resolve('..', 'frontend', 'build')))

app
  .use('*', (req, res, next) => {
    res.sendFile(path.resolve('..', 'frontend', 'build', 'index.html'))
  })
  // .use('/', indexRouter)
  // .use('/users', usersRouter)
  .use((req, res, next) => {
    next(createError(404))
  })
  .use((err: any, req: Request, res: Response, next: NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
  })

export default app
