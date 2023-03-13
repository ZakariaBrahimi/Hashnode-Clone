import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext()

export const DarkModeProvider = ({children})=>{
    const [isDark, setIsDark] = useState(false)

    useEffect(()=>{
        document.documentElement.className = isDark ? "dark" : ""
    }, [isDark])
    return (
        <DarkModeContext.Provider value={{isDark, setIsDark}}>
			{children}
		</DarkModeContext.Provider>
	)
}
export default DarkModeContext;

/*

1. Global State [isDark, setIsDark] => Context API
2. when I click dark mood button then setIsDark(prev=>!prev) 
3. if it's dark mode (isDark===true) then do whatever you want


*/