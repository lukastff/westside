import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Plans } from '../pages/Plans'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<SignIn />}/>
      <Route path="/registro" element={<SignUp />}/>
      <Route path="/planos" element={<Plans />}/>
    </Routes>
  )
}
