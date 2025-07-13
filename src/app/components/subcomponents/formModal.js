import { TiArrowBack } from "react-icons/ti";

const dienstArr = ["Developer", "Engineer", "Schoonmaker"];

export default function FormModal({ selectedTimeBox, setIsOpen }) {
  const e = selectedTimeBox.entry;
  const eID = selectedTimeBox.index;

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 w-[400px] space-y-4">
      {/* Terugknop */}
      <div className="flex items-center justify-between mb-4">
        <TiArrowBack
          className="text-2xl cursor-pointer text-gray-600 hover:text-black transition"
          onClick={() => setIsOpen(false)}
        />
        <h2 className="text-xl font-bold text-gray-700">Bewerk tijdvak</h2>
      </div>

      {/* Datum info */}
      <div className="text-center text-gray-600">
        <p className="text-lg font-semibold">
          {e.date} - {e.day}
        </p>
      </div>

      {/* Formulier */}
      <form className="space-y-4">
        {/* Uren gewerkt */}
        <div>
          <label htmlFor="hours" className="block text-sm text-gray-600 mb-1">
            Uren gewerkt
          </label>
          <input
            type="number"
            id="hours"
            className="w-full rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Bijv. 8"
          />
        </div>

        {/* Dienstverband */}
        <div>
          <label
            htmlFor="dienstverband"
            className="block text-sm text-gray-600 mb-1"
          >
            Dienstverband
          </label>
          <select
            id="dienstverband"
            className="w-full rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            defaultValue={e.dienstverband}
          >
            {dienstArr.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Actieknoppen */}
        <div className="flex justify-end space-x-2 pt-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Annuleren
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            Opslaan
          </button>
        </div>
      </form>
    </div>
  );
}
