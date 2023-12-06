import { ReactNode, createContext, useState } from "react";

export type TabContextType = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};
export const TabContext = createContext<TabContextType>({
  activeTab: "",
  setActiveTab: () => {},
});

export const TabContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};
