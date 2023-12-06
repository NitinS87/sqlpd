import { useContext } from "react";
import { TabContext } from "../context/TabContext";

const Navbar = () => {
  const { activeTab, setActiveTab } = useContext(TabContext);

  const getClassNames = (tab: string) => {
    return `${
      activeTab === tab
        ? "border-white border-b-0 border-2 rounded-tl-lg rounded-tr-lg"
        : "border-white border-b-2"
    } px-4 py-2 text-white w-full`;
  };
  return (
    <nav className="w-full lg:w-[50%] flex justify-center items-center mx-auto lg:py-2 text-xl lg:text-lg">
      <button
        onClick={() => setActiveTab("Home")}
        className={getClassNames("Home")}
      >
        Home
      </button>
      <button
        onClick={() => setActiveTab("SQL")}
        className={getClassNames("SQL")}
      >
        SQL
      </button>
      <button
        onClick={() => setActiveTab("Results")}
        className={getClassNames("Results")}
      >
        Results
      </button>
      <button
        onClick={() => setActiveTab("Guide")}
        className={getClassNames("Guide")}
      >
        Guide
      </button>
    </nav>
  );
};

export default Navbar;
