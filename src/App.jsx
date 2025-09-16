import { Route, Routes } from 'react-router-dom'
import './App.css'
import ForgotPassword from '@pages/forgot-password/ForgotPassword'
import Login from '@pages/login/Login'
import ResetPassword from '@pages/reset-password/ResetPassword'
import Signup from '@pages/signup/Signup'
import Home from '@pages/home/Home'
import { ToastContainer } from 'react-toastify';
import NotFound from '@pages/404/404'
import Dashboard from '@pages/dashboard/Dashboard'
import PublicLayout from '@components/PublicLayout'
import ProtectedLayout from '@components/ProtectedLayout'
import AuthCallback from '@pages/AuthCallback'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
        </Route>

        {/* Protected routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Default/fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </>
  )
}

export default App
