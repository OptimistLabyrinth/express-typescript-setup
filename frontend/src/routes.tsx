import { About, Business, BusinessIndex, BusinessItem, BusinessPersonal, Home } from "./components/all"

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
  { path: '*', element: <h1>404 Not Found</h1> }
]

export {
  routes
}
