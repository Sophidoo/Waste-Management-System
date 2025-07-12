import { Route, Routes } from 'react-router-dom'
import IndexLayout from './layouts/Indexlayout'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<IndexLayout/>} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
