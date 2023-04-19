import {
  FaMoon,
  FaSun,
} from "react-icons/fa";
import useDarkMode from "../../hooks/DarkMode";

const Navigation = () => {
  return (
    <div
      className="flex flex-row items-center justify-evenly 
    bg-primaryLight dark:bg-primaryDark 
    w-full h-16 
    m-0 
    shadow-lg"
    >
      <ThemeIcon />
    </div>
  );
};



const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleDarkMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleDarkMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};

export default Navigation;
