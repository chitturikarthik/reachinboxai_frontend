import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Modes() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode ? "light" : "dark");
        root.classList.add(darkMode ? "dark" : "light");
    }, [darkMode]);

    const toggleMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="mr-10 cursor-pointer" onClick={toggleMode}>
            {darkMode ? <FaMoon className="text-burlywood" /> : <FaSun className="text-black" />}
        </div>
    );
}

export default Modes;
