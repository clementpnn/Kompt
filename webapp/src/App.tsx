import { useForm, SubmitHandler } from 'react-hook-form'
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Login from './routes/login'
import Register from './routes/register'
import Navbar from './components/navbar'
import Homepage from './routes/homepage'
import Landing from './routes/landingPage'

import Refund from './routes/refund';
import Test from './components/test';
import GroupMember from './routes/member_group';


export default function App() {
  
  return (
    <>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<Test />} />

        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing/refund" element={<Refund />} />
          <Route path="/landing/members_group" element={<GroupMember/>} />

        </Route>

        
      </Routes>

    </>
  )
}


