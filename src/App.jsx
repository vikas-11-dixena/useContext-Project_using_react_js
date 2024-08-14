import React from 'react'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import "./App.css"
import Home from './components/Home'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path = "/" Component = {Home}/>
        <Route path = "/cart" Component = {Cart}/>
      </div>
    </BrowserRouter>
  )
}

export default App
