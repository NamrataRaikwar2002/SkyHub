import './App.css'
import { Login, Signup, Home, Profile, BookMark, Explore } from './Pages'
import { Routes, Route, useLocation } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { RequireAuth } from './RequireAuth'
import { Heading, Link } from '@chakra-ui/react'

function App() {
  const location = useLocation()
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
      {location?.pathname !== '/' && location?.pathname !== '/signup-page' ? (
        <Link href='/home-page' _hover={{textDecoration:'none'}} ><Heading
          as="h1"
          fontSize="4rem"
          className="primaryColorText centerText appName"
          position="sticky"
          top="0"
          bgColor="white"
          boxShadow="1px 1px 1px"
          zIndex="2"
          w="100%"
          display={{ base: 'block', md: 'none' }}
          fontFamily="Dancing Script, cursive;"
          textAlign="left"
          pl="3rem"
        >
          SkyHub
        </Heading>
        </Link>
      ) : null}
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
