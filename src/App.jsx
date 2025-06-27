
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Portfolio from './components/Portfolio.jsx'
import Layout from './components/Layout.jsx'

function App() {
  let routes = createBrowserRouter([
    {path: '/' , element:<Layout/> , children :[
      {index : true , element: <Home/>},
      {path : 'home' , element: <Home/>},
      {path : 'about' , element: <About/>},
      {path : 'portfolio' , element: <Portfolio/>},
      {path : 'contact' , element: <Contact/>},
    ]}
  ])
  
  
  return (
    <>
      <RouterProvider router={routes} />
      
    </>
  )
}

export default App
