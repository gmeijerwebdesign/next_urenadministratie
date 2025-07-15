import React from "react";
import { FaEdit } from "react-icons/fa";

const statusArr = ["Leeg", "Ingevoerd"];
const dienstArr = ["Developer", "Engineer", "Schoonmaker"];

const data = [
  {
    day: "mon",
    date: 23,
    dienstverband: dienstArr[0],
    status: statusArr[0],
  },
  {
    day: "tue",
    date: 24,
    dienstverband: dienstArr[0],
    status: statusArr[0],
  },
  {
    day: "wed",
    date: 25,
    dienstverband: dienstArr[0],
    status: statusArr[0],
  },
  {
    day: "wed",
    date: 25,
    dienstverband: dienstArr[0],
    status: statusArr[0],
  },
];

export default function TimeSheet({ setIsOpen, setSelectedTimeBox }) {
  return (
    <div className="rounded-[25px] w-[700px] bg-white p-2">
      <div className="relative">
        {/* Verticale lijn aan rechterkant */}
        <div className="absolute left-[49px] top-0 bottom-0 w-[2px] bg-black"></div>

        {/* Alle items */}
        <div className="flex flex-col space-y-2">
          {data.map((entry, index) => (
            <div
              key={index}
              className="flex items-center border-b-1 border-gray-100 text-gray-600"
            >
              {/* Datuminfo links */}
              <div className=" w-[30px]  text-center">
                <p className="text-xl font-semibold">{entry.date}</p>
                <p className="text-sm font-normal">{entry.day}</p>
              </div>

              {/* Tijdlijnpunt rechts van datum */}
              <div className="relative w-10 flex justify-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full z-10"></div>
              </div>
              <div className="text-sm flex items-center  gap-11 p-4 ">
                <p>
                  dienstverband :{" "}
                  <span className="font-bold">{entry.dienstverband}</span>
                </p>

                <p>
                  status : <span className="font-bold">{entry.status}</span>
                </p>
                <FaEdit
                  className="text-green-700 cursor-pointer"
                  onClick={() => {
                    setSelectedTimeBox({ entry, index });
                    setIsOpen((prev) => !prev);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
