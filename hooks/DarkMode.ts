import { useEffect, useState } from "react";

const useDarkMode = () => {
const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    enabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled]);

  return [enabled, setEnabled] as const;
};

export default useDarkMode;
