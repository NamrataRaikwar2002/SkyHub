import './App.css'
import { Login, Signup, Home, Profile, BookMark, Explore } from './Pages'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup-page" element={<Signup />} />
        <Route path="/home-page" element={<Home />} />
        <Route path="/profile-page" element={<Profile />} />
        <Route path="/bookmark-page" element={<BookMark />} />
        <Route path="/explore-page" element={<Explore />} />
      </Routes>
    </>
  )
}

export default App
