import LoginForm from '../../components/login/LoginForm';
import LoginTitle from '../../components/login/LoginTitle';


function login() {
  return (
   <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#E9F4FF] text-center">
      <div className="flex flex-col items-center h-[38rem] w-[32rem] overflow-hidden bg-white rounded-3xl outline-none shadow-[0_0_25px_rgba(0,0,0,0.15)]">
        <LoginTitle/>
        <LoginForm/>
      </div>
   </div>
  )
}

export default login
