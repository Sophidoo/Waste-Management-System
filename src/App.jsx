import { Route, Routes } from 'react-router-dom'
import IndexLayout from './layouts/Indexlayout'
import Home from './pages/Home'
import Waste from './pages/Waste'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<IndexLayout/>} >
          <Route index element={<Home />} />
          <Route path='waste' element={<Waste />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
