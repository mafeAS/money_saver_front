import { createContext, useEffect, useState, type ReactNode, } from "react";
import type { Session, User } from "@supabase/supabase-js";
import supabase from "../services/supabase.services";


type AuthContextType = {
  user: User | null
  session:Session | null
  loading:boolean
  login: (email: string, password: string) => void
  logout:()=>void
}

type AuthProviderProps = {
    children:ReactNode
}

const AuthContext = createContext<AuthContextType>(null!)//CREAR EL CONTEXT(CANAL)

const AuthProvider =({children}:AuthProviderProps)=>{

  const [user,setUser] = useState <User|null>(null)
  const [session, setSession]=useState<Session|null>(null)
  const [loading, setLoading]=useState(true)


  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      setSession(data.session)
      setUser(data.session?.user ?? null)
      setLoading(false)
    }

    getSession()

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
      }
    )

    return () => {
      listener.subscription.unsubscribe()
    }

  }, [])


    

    const login = async (email:string, password:string)=>{
        
      const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if(error){
        throw error
      }

      setUser(data.user)
      setSession(data.session)

    }


    const logout = async ()=>{
      await supabase.auth.signOut()
      setSession(null)
      setUser(null)
    }
    


    return (
  <AuthContext.Provider
    value={{
      user,
      login,
      session,
      loading,
      logout
      
    }}
  >
    {children}
  </AuthContext.Provider>
)

}
export { AuthProvider }
export default AuthContext

