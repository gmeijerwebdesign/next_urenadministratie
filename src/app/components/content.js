import TimeSheet from "./timesheet";

export default function Content() {
  return (
    <div className="p-4 bg-[rgb(243,243,244)] h-[70%] w-full  max-h-full">
      <h1 className=" text-xl text-gray-500 font-bold tracking-tight">
        urenregistratie
      </h1>
      {/* box */}
      <div className="p-6 ">
        <TimeSheet />
      </div>
    </div>
  );
}
