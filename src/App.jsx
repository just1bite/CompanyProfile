

import Navbar from './Components/Navbar';
import About from './pages/About';
import Teams from './pages/Teams';
import { Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/About" element={<About />} />
        <Route path="/Teams" element={<Teams />} />
      </Routes>
    </>
  )
}

export default App
