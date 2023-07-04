import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Pages/Home/Home'
import Catalog from './Pages/Catalog/Catalog'
import Contact from './Pages/Contact/Contact'

function App() {
  let routers = new createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: '/catalog', element: <Catalog/>},
        { path: '/contact', element: <Contact/>},
      ]
    }
  ])
  return <RouterProvider router={routers} />
}

export default App
