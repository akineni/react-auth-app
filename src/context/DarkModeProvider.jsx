import { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(() => {
		// Lazy init: read from localStorage only once
		return localStorage.getItem("darkMode") === "true";
	});

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
		localStorage.setItem("darkMode", darkMode);
	}, [darkMode]);

	return (
		<DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

export function useDarkMode() {
	return useContext(DarkModeContext);
}
