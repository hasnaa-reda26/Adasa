import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound'
import WhoArWwe from './components/WhoAreWe'
import Newblog from './components/Newblog'

function App() {

  const routers = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'blog',
          element: <Blog />
        },
          {
          path: 'who',
          element: <Whoarewe />
        },
        {
          path: '*',
          element: <NotFound />
        },
        {
          path: 'newblog',
          element: <Newblog />
        },
        

      ]
    }
  ])

  return <RouterProvider router={routers} />
}

export default App