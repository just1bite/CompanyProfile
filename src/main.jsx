import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './pages/Product.jsx'
import About from './pages/About.jsx'
import Teams from './pages/Teams.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter as Router } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/product", 
    element: <Product />,
  },
  {
    path: "/About", 
    element: <About />,
  },
  {
    path: "/Teams", 
    element: <Teams />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <App />
  </Router>
</React.StrictMode>,
)
