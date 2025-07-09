import React from "react";

const data = [
  { day: "mon", date: 23 },
  { day: "tue", date: 24 },
  { day: "wed", date: 25 },
  { day: "wed", date: 25 },
];

export default function TimeSheet() {
  return (
    <div className="rounded-[25px] w-[700px] bg-white p-2">
      <div className="relative">
        {/* Verticale lijn aan rechterkant */}
        <div className="absolute left-[49px] top-0 bottom-0 w-[2px] bg-black"></div>

        {/* Alle items */}
        <div className="flex flex-col space-y-2">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center">
              {/* Datuminfo links */}
              <div className="text-gray-600 w-[30px]  text-center">
                <p className="text-xl font-semibold">{entry.date}</p>
                <p className="text-sm font-normal">{entry.day}</p>
              </div>

              {/* Tijdlijnpunt rechts van datum */}
              <div className="relative w-10 flex justify-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
