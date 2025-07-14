import { useEffect, useState } from "react";
import TimeSheet from "./timesheet";
import FormModal from "./subcomponents/formModal";
import ProductTable from "./ProductTable";

export default function Content() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTimeBox, setSelectedTimeBox] = useState([]);
  useEffect(() => {
    console.log(selectedTimeBox);
  }, [selectedTimeBox]);
  return (
    <div className="p-4 bg-[rgb(243,243,244)] h-[70%] w-full  max-h-full">
      <h1 className=" text-xl text-gray-500 font-bold tracking-tight">
        Inventaris overzicht
      </h1>
      {/* box */}
      <div className="p-6 ">
        <ProductTable
          setIsOpen={setIsOpen}
          setSelectedTimeBox={setSelectedTimeBox}
        />
      </div>
      {/* FormModal */}
      {isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center  z-50 ">
          <FormModal selectedTimeBox={selectedTimeBox} setIsOpen={setIsOpen} />
        </div>
      ) : null}
    </div>
  );
}
