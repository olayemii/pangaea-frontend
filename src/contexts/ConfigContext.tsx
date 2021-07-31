import { createContext, useState } from "react";
import { IConfigContext } from "../utils/interfaces";

export const ConfigContext = createContext<IConfigContext>(
  {} as IConfigContext
);

const ConfigContextProvider = (props: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (): void => {
    setIsOpen((open) => !open);
  };
  return (
    <ConfigContext.Provider
      value={{
        isOpen,
        toggleDrawer,
      }}
    >
      {props.children}
    </ConfigContext.Provider>
  );
};

export default ConfigContextProvider;
