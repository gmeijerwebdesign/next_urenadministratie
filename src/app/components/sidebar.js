import { SlCalender } from "react-icons/sl";
import { MdOutlineLogout } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { signOut } from "next-auth/react";
export default function SideBar({ session, onNavigate }) {
  const menuItems = [
    { label: "Urenregistratie", icon: <SlCalender /> },
    { label: "Verlofoverzicht", icon: <FaCircleInfo /> },
    { label: "Wachtwoord Wijzigen", icon: <FaKey /> },
    { label: "Instructie", icon: <FaCircleInfo /> },
    { label: "Uitloggen", icon: <MdOutlineLogout /> },
  ];

  if (session?.user?.role === "Manager") {
    menuItems.push({ label: "admin", icon: <RiAdminFill /> });
  }

  return (
    <div className="hidden lg:flex h-screen pt-11 w-[15%] bg-[#2f4050] text-[#A7B1C2] font-medium text-[13px]">
      <div className="flex flex-col gap-7 w-full ">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 hover:bg-[#25333f] px-4 py-2 rounded cursor-pointer"
            onClick={() => {
              if (item.label === "Uitloggen") {
                signOut({ callbackUrl: "/login" });
              } else {
                onNavigate(item.label);
              }
            }}
          >
            {item.icon}
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
