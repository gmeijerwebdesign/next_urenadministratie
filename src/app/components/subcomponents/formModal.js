import { useState, useEffect } from "react";
import { TiArrowBack } from "react-icons/ti";

export default function FormModal({ selectedTimeBox, setIsOpen }) {
  const e = selectedTimeBox.entry;

  const [formData, setFormData] = useState({
    naam: "",
    serienummer: "",
    opmerking: "",
    aantal: 0,
  });

  useEffect(() => {
    if (e) {
      setFormData({
        naam: e.naam || "",
        serienummer: e.serienummer || "",
        opmerking: e.opmerking || "",
        aantal: e.aantal || 0,
      });
    }
  }, [e]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "aantal" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gewijzigde data:", formData); // Hier komt straks je database logica
    setIsOpen(false);
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 w-[400px] space-y-4">
      <div className="flex items-center justify-between mb-4">
        <TiArrowBack
          className="text-2xl cursor-pointer text-gray-600 hover:text-black transition"
          onClick={() => setIsOpen(false)}
        />
        <h2 className="text-xl font-bold text-gray-700">Bewerk product</h2>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="naam"
          type="text"
          value={formData.naam}
          onChange={handleChange}
          className="w-full rounded-lg p-2 border border-gray-300"
          placeholder="Naam"
        />
        <input
          name="serienummer"
          type="text"
          value={formData.serienummer}
          onChange={handleChange}
          className="w-full rounded-lg p-2 border border-gray-300"
          placeholder="Serienummer"
        />
        <input
          name="opmerking"
          type="text"
          value={formData.opmerking}
          onChange={handleChange}
          className="w-full rounded-lg p-2 border border-gray-300"
          placeholder="Opmerking"
        />
        <input
          name="aantal"
          type="number"
          value={formData.aantal}
          onChange={handleChange}
          className="w-full rounded-lg p-2 border border-gray-300"
          placeholder="Aantal"
        />

        <div className="flex justify-end space-x-2 pt-2">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300"
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
