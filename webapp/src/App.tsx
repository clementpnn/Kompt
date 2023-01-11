import { useForm, SubmitHandler } from 'react-hook-form'
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Login from './routes/login'
import Register from './routes/register'
import Navbar from './components/navbar'
import Coucou from './components/test'


export default function App() {
  return (
    <div>

      <Routes>

        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Navbar />}>
          <Route path="/homepage" element={<Coucou />} />
        </Route>

      </Routes>

    </div>
  )
}


