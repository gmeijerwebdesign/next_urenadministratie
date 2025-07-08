import Content from "./content";
import Banner from "./subcomponents/banner";
import Header from "./subcomponents/header";

export default function Main({ name }) {
  return (
    <div className="w-full bg-white">
      <Header name={name} />
      <Banner />
      <Content />
    </div>
  );
}
