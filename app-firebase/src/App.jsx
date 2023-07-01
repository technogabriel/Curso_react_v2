import { Navbar } from './components/Navbar/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Profile } from './components/Profile/Profile'
import { Home } from './components/home/Home'
import { Login } from './components/Login/Login'
import { AuthProvider } from './context/AuthContext'


function App() {

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>

    </AuthProvider>
    </>
  )
}

export default App
