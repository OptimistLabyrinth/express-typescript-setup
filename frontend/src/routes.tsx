import { About, Business, BusinessIndex, BusinessItem, BusinessPersonal, Home } from "./components/all"
import FileUpload, { FileUploadLinks } from "./components/file_upload/FileUpload"
import FileUploadArray from "./components/file_upload/FileUploadArray"
import FileUploadFields from "./components/file_upload/FileUploadFields"
import FileUploadSingle from "./components/file_upload/FileUploadSingle"

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  {
    path: '/business', element: <Business />,
    children: [
      { path: '/', element: <BusinessIndex /> },
      { path: '/:id', element: <BusinessItem /> },
      { path: '/personal', element: <BusinessPersonal /> }
    ]
  },
  {
    path: '/upload', element: <FileUpload />,
    children: [
      { path: '/', element: <FileUploadLinks /> },
      { path: '/single', element: <FileUploadSingle /> },
      { path: '/array', element: <FileUploadArray /> },
      { path: '/fields', element: <FileUploadFields /> },
    ]
  },
  { path: '*', element: <h1>404 Not Found</h1> }
]

export {
  routes
}
