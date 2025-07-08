export default function Admin() {
  return (
    <div className="p-4 bg-[#f3f3f4] h-[50%] w-full max-h-full">
      <h1 className="text-2xl font-semibold mb-4">Voeg een medewerker toe</h1>

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
      </form>
    </div>
  );
}
