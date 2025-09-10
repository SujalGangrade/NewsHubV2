import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Article from './components/Article'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Navbar from './components/Navbar'
import ProtectedRoutes from './components/ProtectedRoutes'
import Signup from './components/Signup'
import UserProvider from './context/UserContext'
function App() {
  return (
  <UserProvider>  
    <div>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<ProtectedRoutes> <Dashboard /></ProtectedRoutes>} />
             <Route path='/logout' element={<Logout />} />
             <Route path="/article/:id" element={<Article/>}></Route>
          </Routes>

      </Router>
    </div>
  </UserProvider>
  )
}

export default App
