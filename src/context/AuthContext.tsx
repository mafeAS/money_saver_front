import { createContext, useState, type ReactNode, } from "react";
import type { User } from "@supabase/supabase-js";
import supabase from "../services/supabase.services";


type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => void
}

type AuthProviderProps = {
    children:ReactNode
}

const AuthContext = createContext<AuthContextType>(null!)//CREAR EL CONTEXT(CANAL)

const AuthProvider =({children}:AuthProviderProps)=>{

  const [user,setUser] = useState <User|null>(null)

    const login = async (email:string, password:string)=>{
        
      const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if(error){
        throw error
      }

      setUser(data.user)

    }

    


    return (
  <AuthContext.Provider
    value={{
      user,
      login
      
    }}
  >
    {children}
  </AuthContext.Provider>
)

}
export { AuthProvider }
export default AuthContext

