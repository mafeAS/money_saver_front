import { Navigate } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const PublicRoute = ({ children }: Props) => {
  const { user, loading } = useContext(AuthContext)

  if (loading) return null

  if (user) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

export default PublicRoute
