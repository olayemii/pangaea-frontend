import { useContext } from "react";
import { ConfigContext } from "../contexts/ConfigContext";

const useConfig = () => {
  const { isOpen, toggleDrawer } = useContext(ConfigContext);

  const doToggleDrawer = () => toggleDrawer();

  return { doToggleDrawer, isOpen };
};

export default useConfig;
