import { Route, Routes } from 'react-router-dom'
import IndexLayout from './layouts/Indexlayout'
import Home from './pages/Home'
import Waste from './pages/Waste'
import CompanyLayout from './layouts/CompanyLayout'
import AdminLayout from './layouts/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminUsers from './pages/admin/AdminUsers'
import AdminSettings from './pages/admin/AdminSettings'
import AdminWaste from './pages/admin/AdminWaste'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<IndexLayout/>} >
          <Route index element={<Home />} />
          <Route path='waste' element={<Waste />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />} >
          <Route index element={<AdminDashboard />} />
          <Route path='users' element={<AdminUsers />} />
          <Route path='settings' element={<AdminSettings />} />
          <Route path='waste' element={<AdminWaste />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
