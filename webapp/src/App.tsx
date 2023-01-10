import { useForm, SubmitHandler } from 'react-hook-form'
// import { FormValues } from './interfaces/interfaces'
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Login from './routes/login'
import Register from './routes/register'

export default function App() {
  return (

  <Routes>

    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

  </Routes>
  )
}