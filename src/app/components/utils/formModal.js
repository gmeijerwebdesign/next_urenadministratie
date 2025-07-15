import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function FormModal({ selectedTimeBox, setIsOpen, mode }) {
  const e = mode === "edit" ? selectedTimeBox?.entry : null;

  const [formData, setFormData] = useState({
    naam: "",
    serienummer: "",
    opmerking: "",
    aantal: 0,
  });

  useEffect(() => {
    if (mode === "edit" && e) {
      setFormData({
        naam: e.naam || "",
        serienummer: e.serienummer || "",
        opmerking: e.opmerking || "",
        aantal: e.aantal || 0,
      });
    } else if (mode === "add") {
      setFormData({
        naam: "",
        serienummer: "",
        opmerking: "",
        aantal: 0,
      });
    }
  }, [e, mode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "aantal" ? Number(value) : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mode === "edit") {
      console.log("Product bewerken:", formData);
      // Update logica hier
    } else if (mode === "add") {
      console.log("Nieuw product toevoegen:", formData);
      // Toevoegen logica hier
    }

    setIsOpen(false);
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 w-[400px] space-y-4">
      <div className="flex items-center justify-between mb-4">
        <FaArrowLeft
          className="text-2xl cursor-pointer text-gray-600 hover:text-black transition"
          onClick={() => setIsOpen(false)}
        />
        <h2 className="text-xl font-bold text-gray-700">
          {mode === "edit" ? "Bewerk product" : "Nieuw product"}
        </h2>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            className="block text-gray-700 font-semibold mb-1"
            htmlFor="naam"
          >
            Naam
          </label>
          <input
            type="text"
            id="naam"
            name="naam"
            value={formData.naam}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label
            className="block text-gray-700 font-semibold mb-1"
            htmlFor="serienummer"
          >
            Serienummer
          </label>
          <input
            type="text"
            id="serienummer"
            name="serienummer"
            value={formData.serienummer}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label
            className="block text-gray-700 font-semibold mb-1"
            htmlFor="opmerking"
          >
            Opmerking
          </label>
          <textarea
            id="opmerking"
            name="opmerking"
            value={formData.opmerking}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
          />
        </div>

        <div>
          <label
            className="block text-gray-700 font-semibold mb-1"
            htmlFor="aantal"
          >
            Aantal
          </label>
          <input
            type="number"
            id="aantal"
            name="aantal"
            value={formData.aantal}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            min={0}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {mode === "edit" ? "Opslaan" : "Toevoegen"}
        </button>
      </form>
    </div>
  );
}
