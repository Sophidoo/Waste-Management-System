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
import MapView from './pages/admin/MapView'
import AdminNotifications from './pages/admin/AdminNotifications'
import CompanyDashboard from './pages/company/CompanyDashboard'
import CompanyWaste from './pages/company/CompanyWaste'

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
          <Route path='notifications' element={<AdminNotifications />} />
          <Route path='map' element={<MapView />} />
        </Route>
        <Route path='/company' element={<CompanyLayout />} >
          <Route index element={<CompanyDashboard />} />
          <Route path='waste' element={<CompanyWaste />} />
          <Route path='notifications' element={<AdminNotifications />} />
          <Route path='settings' element={<AdminSettings />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
