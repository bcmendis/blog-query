import { FiMoon, FiSun } from "react-icons/fi";
import useDarkMode from "../../hooks/DarkMode";

const Navigation = () => {
  return (
    <div
      className="flex flex-row items-center justify-between 
    bg-primaryLight dark:bg-primaryDark 
    w-full h-20 
    m-0 
    shadow-lg"
    >
      <h1 className="text-lg md:text-3xl p-2 ml-5">Blog<span className="font-bold text-purple-600 dark:text-purple-400">it</span></h1>
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
        <FiSun
          size="40"
          className="text-white mr-5 hover:text-purple-400 hover:cursor-pointer"
        />
      ) : (
        <FiMoon
          size="40"
          className="text-white mr-5 hover:text-purple-700 hover:cursor-pointer"
        />
      )}
    </span>
  );
};

export default Navigation;
