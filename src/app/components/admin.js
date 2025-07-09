export default function Admin() {
  return (
    <div className="p-4 bg-[#f3f3f4] h-[60%] w-full max-h-full">
      <h1 className="text-xl text-gray-500 font-bold tracking-tight">
        Voeg een medewerker toe
      </h1>
      <div className="flex items-center py-4">
        <form className="flex flex-col gap-11">
          <div className="flex gap-11">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-1 font-light">
                Gebruikersnaam
              </label>
              <input
                type="text"
                name="gebruikersnaam"
                id="gebruikersnaam"
                placeholder="gebruikersnaam"
                className="admin-input-bar"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="Wachtwoord" className="mb-1 font-light">
                Achternaam
              </label>
              <input
                type="text"
                name="Wachtwoord"
                id="Wachtwoord"
                placeholder="Wachtwoord"
                className="admin-input-bar"
              />
            </div>
          </div>
          <div className="flex gap-11 items-end">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-light">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mailadres"
                className="admin-input-bar"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="role" className="mb-1 font-light">
                Functienaam
              </label>
              <select
                id="role"
                className="admin-input-bar max-w-[130px]  bg-white"
              >
                <option>manager</option>
                <option>medewerker</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="afdeling" className="mb-1 font-light">
              Afdeling
            </label>
            <input
              type="afdeling"
              name="afdeling"
              id="afdeling"
              placeholder="afdeling"
              className="admin-input-bar"
            />
          </div>
        </form>
        <div className=" relative left-[20%] max-w-[200px] flex flex-col gap-11">
          <p className="text-center text-sm">
            Let op dit is een voorbeeldtekst. Deze tekst dient niets anders dan
            om de ruimte op te vullen. Je verspilt echt je tijd als je nog
            steeds leest. Hier komt mogelij iets meningvols voor in de plaats
          </p>
          <button className="shadow-lg  font-bold bg-blue-200 hover:bg-blue-400 h-[50px] w-[200px]">
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
