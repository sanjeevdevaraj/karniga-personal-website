import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import YouTube from './pages/YouTube'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="youtube" element={<YouTube />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App 