import { useContext } from "react";
import { TabContext } from "../context/TabContext";
import { Guide, Home, Results, SQLTab } from ".";

interface TabComponents {
  [key: string]: JSX.Element;
}

const Main = () => {
  const { activeTab } = useContext(TabContext);
  const TabComponents: TabComponents = {
    Home: <Home />,
    SQL: <SQLTab />,
    Results: <Results />,
    Guide: <Guide />,
  };
  return (
    <main className="w-full lg:w-[50%] !min-h-full mx-auto text-white">
      {TabComponents[activeTab]}
    </main>
  );
};

export default Main;
