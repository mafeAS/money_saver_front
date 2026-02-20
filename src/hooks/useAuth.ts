import { useContext, useState } from "react";
import AuthContext from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLoginSubmit = async(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            await login(email,password);
            navigate("/");
        }catch(error){
        console.log(error)
        }
    }

    return {
        setEmail,
        setPassword,
        handleLoginSubmit
    }
}

export default useAuth
