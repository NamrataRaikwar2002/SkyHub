import './App.css'
import { Login, Signup, Home, Profile, BookMark, Explore } from './Pages'
import { Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { RequireAuth } from './RequireAuth'

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup-page" element={<Signup />} />
        <Route
          path="/home-page"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/profile-page"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/bookmark-page"
          element={
            <RequireAuth>
              <BookMark />
            </RequireAuth>
          }
        />
        <Route
          path="/explore-page"
          element={
            <RequireAuth>
              <Explore />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  )
}

export default App
