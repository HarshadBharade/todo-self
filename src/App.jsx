import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Todo from './components/Todo.jsx';

function App() {
  

  return (
    <Router>
     <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Todo" element={<Todo />} />
     </Routes>
    </Router>
  )
}

export default App
