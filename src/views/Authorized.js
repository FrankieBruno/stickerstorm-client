import { Navigate, Outlet } from "react-router-dom"


export const Authorized = ({children}) => {
  if (localStorage.getItem("st_token")) {
    return <Outlet />
  }
  return <Navigate to='/login' replace />
}
