export default function Login() {
  return (
    // Main container
    <div className="flex flex-col justify-center items-center h-screen">
      {/* Logo */}
      <img src="/logo.png" className="max-w-[200px] " />
      {/* First sub container */}
      <div className="flex flex-col items-center py-5 text-[#595959]">
        <p className="bold tracking-wider  ">Cyclus | Uren-online</p>
        <p>inlogscherm</p>
      </div>
      {/* Call to Actions container */}
      <div className="flex flex-col gap-4 items-center">
        <input
          type="text"
          placeholder="Gebruikersnaam"
          className="auth-input-bar "
        />
        <input
          type="text"
          placeholder="Wachtwoord"
          className="auth-input-bar"
        />
        <label className="flex items-center gap-2 ">
          <input type="checkbox" />
          <span className="text-[14px] font-medium text-[#403c3c]">
            aangemeld blijven
          </span>
        </label>
        <p className="text-[12px] text-blue-700">Wachtwoord vergeten?</p>
        <button className="border-1 border-gray-300 font-bold shadow-sm w-[300px] p-2 text-[#c0c0c0] hover:text-amber-300 hover:bg-blue-300 transition-colors duration-500">
          inloggen
        </button>
      </div>
    </div>
  );
}
