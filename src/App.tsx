import { useContext } from "react"
import AuthContext from "./context/AuthContext"


function App() {
 const { login}=useContext(AuthContext)
  
  
 
  return (
    <div className="font-black text-2xl">
     <div>
      <button
      onClick={login}>holaa</button>
     </div>
    </div>
  )
}

export default App
