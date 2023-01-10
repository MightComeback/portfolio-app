import { createContext, useContext, useState } from "react";
const StateContext = createContext<any>(undefined);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [graphics, setGraphics] = useState(false);

  return (
    <StateContext.Provider value={{ graphics, setGraphics }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
