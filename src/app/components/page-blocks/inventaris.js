import { useEffect, useState } from "react";
import FormModal from "../utils/formModal.js";
import ProductTable from "./ProductTable.js";

export default function Content() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTimeBox, setSelectedTimeBox] = useState(null);
  const [mode, setMode] = useState(null);

  return (
    <div className="p-4 bg-[rgb(243,243,244)] w-full ">
      <h1 className=" text-xl text-gray-500 font-bold tracking-tight">
        Inventaris overzicht
      </h1>
      {/* box */}
      <div className="py-4 ">
        <ProductTable
          setIsOpen={setIsOpen}
          setSelectedTimeBox={setSelectedTimeBox}
          mode={mode}
          setMode={setMode}
        />
      </div>
      {/* FormModal */}
      {isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center  z-50 ">
          <FormModal
            selectedTimeBox={selectedTimeBox}
            setIsOpen={setIsOpen}
            mode={mode}
          />
        </div>
      ) : null}
    </div>
  );
}
