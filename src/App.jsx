import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Market from './Pages/Shopping/Market';
import Mall from './Pages/Shopping/Mall';
import Hall from './Pages/Movies/Hall';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mall' element={<Mall/>}/>
          <Route path='/market' element={<Market/>}/>
          <Route path='/movieHall' element={<Hall/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
