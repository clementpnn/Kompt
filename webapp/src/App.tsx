import { Routes, Route } from "react-router-dom";
import Login from './routes/login'
import Register from './routes/register'
import Navbar from './components/navbar'
import Homepage from './routes/homepage'
import Landing from './routes/landingPage'
import Refund from './routes/refund';
import Test from './components/test';



export default function App() {

  return (
    <div>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<Test />} />

        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/refund" element={<Refund />} />
        </Route>

      </Routes>
    </div>
  )
  
}


