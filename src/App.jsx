import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
import Home from './components/Home'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path = "/" Component = {Home}/>
          <Route path = "/cart" Component = {Cart}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
