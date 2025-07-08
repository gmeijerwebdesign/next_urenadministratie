import Admin from "./admin";
import Content from "./content";
import Banner from "./subcomponents/banner";
import Header from "./subcomponents/header";

export default function Main({ name, currentNav }) {
  return (
    <div className="w-full bg-white">
      <Header name={name} />
      <Banner />
      {currentNav === "admin" ? <Admin name={name} /> : <Content />}
    </div>
  );
}
