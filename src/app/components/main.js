import Admin from "./page-blocks/admin.js";
import Content from "./page-blocks/inventaris.js";
import Banner from "./subcomponents/banner.js";
import Header from "./subcomponents/header.js";
import Organisation from "./page-blocks/organisation.js";
import Settings from "./page-blocks/settings.js";

export default function Main({ name, currentNav }) {
  function renderContent(nav) {
    switch (nav) {
      case "admin":
        return <Admin name={name} />;
      case "Organisatiebeheer":
        return <Organisation name={name} />;
      case "Settings":
        return <Settings name={name} />;
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
