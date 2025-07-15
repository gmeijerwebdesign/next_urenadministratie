import Admin from "./admin";
import Content from "./inventaris";
import Banner from "./subcomponents/banner";
import Header from "./subcomponents/header";
import Organisation from "./subcomponents/organisation";

export default function Main({ name, currentNav }) {
  function renderContent(nav) {
    switch (nav) {
      case "admin":
        return <Admin name={name} />;
      case "Organisatiebeheer":
        return <Organisation name={name} />;
      case "Wachtwoord Wijzigen":
        return <div>Wachtwoord wijzigen</div>;
      case "Instructie":
        return <div>Instructiepagina</div>;
      default:
        return <Content />;
    }
  }

  return (
    <div className="w-full bg-white min-h-screen h-screen overflow-auto">
      <Header name={name} />
      <Banner />
      {renderContent(currentNav)}
      {/* {currentNav === "admin" ? <Admin name={name} /> : <Content />} */}
    </div>
  );
}
