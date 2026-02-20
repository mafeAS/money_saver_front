import useAuth from "../../hooks/useAuth"

const LoginForm = () => {

  const { setEmail, setPassword, handleLoginSubmit } = useAuth();
  

  return (
    <form className="flex flex-col w-[60%]" onSubmit={handleLoginSubmit}>

        <div className="flex flex-col items-start">
            <label className="pb-2 pl-2 text-[#5C5C5C]">Usuario</label>
            <input className="w-[100%] bg-[#F7F7F7] py-1 px-4 rounded-4xl border border-gray-300 focus:outline-none"
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className="py-2"></div>

        <div className="flex flex-col items-start">
            <label className="pb-2 pl-2 text-[#5C5C5C]">Contraseña</label>
            <input className="w-[100%] bg-[#F7F7F7] py-1 px-4 rounded-4xl border border-gray-300 focus:outline-none"
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}/>
        </div>


        <div className="flex mt-2">

          <div className="flex align-middle w-[50%]">
            <input type="checkbox" name="aceptar" value="si" className="w-4 h-4"/>
            <p className="pl-2 text-[11px] text-[#5C5C5C]">Recordar usuario</p>
          </div>

          <div className="flex justify-end align-middle w-[50%]">
            <a href="" className="text-[11px] text-[#5C5C5C]">
                ¿Olvidate tu contraseña?
            </a>
          </div>

        </div>


        <div className="pt-[3.2rem]">
          <input
              type="submit"
              value="Iniciar sesión"
              className="py-3 px-[21%] mb-5 rounded-3xl bg-[#27C8A0] hover:bg-[#20b993] text-[#FFFFFF] cursor-pointer">
          </input>

          <p className="text-[#5C5C5C]">¿No tienes cuenta? <b>Registrate</b></p>
        </div>


        

    </form>
  )
}

export default LoginForm
