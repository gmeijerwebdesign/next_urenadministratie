import Header from "./subcomponents/header";

export default function Main({ name }) {
  return (
    <div className="w-full bg-white">
      <Header name={name} />
    </div>
  );
}
