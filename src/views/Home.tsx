import useAuth from "../hooks/useAuth";


const Home = () => {
  const { handleLogout } = useAuth();
  return (
    <div>
      este es mi home
      <button onClick={handleLogout} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-colors duration-200">
        Cerrar sesión
      </button>

    </div>
  )
}

export default Home
