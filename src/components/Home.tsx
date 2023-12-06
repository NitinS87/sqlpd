import { useContext } from "react";
import { TabContext } from "../context/TabContext";
import { Footer } from ".";

const Home = () => {
  const { setActiveTab } = useContext(TabContext);
  return (
    <div className="flex flex-col !justify-center !items-center gap-10 !min-h-full h-[85vh]">
      <h2 className="text-4xl text-center font-semibold">
        Welcome to the SQL Query Builder!
      </h2>
      <div className="text-lg flex flex-col justify-center w-[80%] lg:w-1/2 gap-2 text-center">
        <span>
          Use the tabs above to navigate between the SQL Query Builder and the
          Results page.
        </span>
        <span>
          The SQL Query Builder allows you to build SQL queries using a
          graphical interface.
        </span>
      </div>
      <button
        className="py-2 px-6 border border-white rounded-md hover:text-black hover:bg-white transition-all"
        onClick={() => {
          setActiveTab("SQL");
        }}
      >
        Continue
      </button>
      <Footer />
    </div>
  );
};

export default Home;
