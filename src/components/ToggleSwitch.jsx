import { useState, useEffect } from "react";

const ToggleSwitch = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div
      onClick={() => {
        setIsDark(!isDark);
      }}
      className={`w-14 h-7 flex items-center rounded-full bg-gray-400 p-1 cursor-pointer
        ${isDark ? "bg-green-400" : "bg-gray-400"}
      `}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-1000
        ${isDark ? "translate-x-7" : ""}
      `}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
