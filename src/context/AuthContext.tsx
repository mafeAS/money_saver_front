import { createContext,  useEffect,  useState, type ReactNode, } from "react";


export interface User{
    id:number
    name: string
    email:string
}
type AuthContextType = {
    user:User|null
    loading:boolean
    login:()=>void
    logout: ()=>void
}

type AuthProviderProps = {
    children:ReactNode
}

const AuthContext = createContext<AuthContextType>(null!)//CREAR EL CONTEXT(CANAL)

const AuthProvider =({children}:AuthProviderProps)=>{

    //ESTADO GLOBAL

    const [user, setUser] = useState<User|null>(null)
    const [loading, setLoading] = useState(false)

    //ACCIONES GLOBALES, TODO ESTO PODRAN ACCEDER TODOS

    const login = () => {
     setLoading(true)
     
     setUser({id:2, name:"prueba",email:"prueba@pruebal.com"})
      

    }

    useEffect(()=>{
        console.log("usuario actualizado", user)
      },[user])
    

   const logout =()=>{

   }


    return (
  <AuthContext.Provider
    value={{
      user,
      loading,
      login,
      logout
    }}
  >
    {children}
  </AuthContext.Provider>
)

}
export { AuthProvider }
export default AuthContext

