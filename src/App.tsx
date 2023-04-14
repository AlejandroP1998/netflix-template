import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
