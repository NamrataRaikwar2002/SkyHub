import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router'
export const RequireAuth = ({ children }) => {
  const location = useLocation()
  const { token } = useSelector((state) => state.auth)
  return token ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  )
}
