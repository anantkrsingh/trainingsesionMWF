import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='/about' element={<About/>}/> 

     </Routes>

     <p>hii</p>
    </>

  )

}

export default App
