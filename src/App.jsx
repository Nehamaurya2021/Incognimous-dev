import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ErrorPage from "./pages/error/ErrorPage"
import Home from './container/home/Home'
import Blog from "./container/blog/Blog"
import Process from "./container/process/Process"
import Resources from "./container/resources/Resources"
import Services from "./container/services/Services"
import Work from "./container/work/Work"


function App() {
  const route=createBrowserRouter(
    [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/process",
        element:<Process/>
      },
      {
        path:"/resources",
        element:<Resources/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"/work",
        element:<Work/>
      },
      {
        path:" ",
        element:<ErrorPage/>
      }
    ]
  )
 
  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
