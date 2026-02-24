import { useContext, useState } from "react";
import AuthContext from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useAuth = () => {
    
    const {login,loading,logout} = useContext(AuthContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   

    const handleLoginSubmit = async(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            await login(email,password);
            navigate("/");
        }catch(error:unknown){
            const message=
            error instanceof Error
            ? "credenciales invalidas, por favor revise sus credenciales" : "Ocurrio un error inesperado"

            toast.error(message)
        }
    }

    const handleLogout = async () =>{
        await logout()
        navigate("/login")
    }

    return {
        setEmail,
        setPassword,
        handleLoginSubmit,
        loading,
        handleLogout
    }
}

export default useAuth
