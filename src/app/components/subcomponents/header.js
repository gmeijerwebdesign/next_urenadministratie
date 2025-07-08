export default function Header({ name }) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  return (
    <div className="p-4 flex justify-between bg-[#f3f3f4] w-full text-gray-500 text-sm">
      <button></button>
      <div className=" flex gap-4">
        <p>
          Huidige week :{" "}
          <span className="font-bold">{`${year}-${month}-${day}`}</span>
        </p>
        <p>
          ingelogd als : <span className="font-bold">{name}</span>
        </p>
        <p>
          Organisatie : <span className="font-bold">{name}</span>
        </p>
      </div>
    </div>
  );
}
