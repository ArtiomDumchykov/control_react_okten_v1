import React, { createContext, useEffect, useMemo, useRef, useState } from 'react';

import { getLocalStorage, setLocaStorage } from '../utils';

const ThemeContext = createContext(null);

const themeLocalStorage = {
    KEY: 'theme',
    getTheme: () => {
      const storedTheme = getLocalStorage(themeLocalStorage.KEY);
      return storedTheme !== null ? JSON.parse(storedTheme) : null;
    },
    setTheme(theme) {

      setLocaStorage(this.KEY, theme)
    },
  };
  
const ThemeContextProvider = ({ children }) => {
  const [isTheme, setIsTheme] = useState(false);
  const bodyRef = useRef(document.querySelector("body"));

  const themeClass = useMemo(() => (isTheme ? "dark" : ""), [isTheme]);

  useEffect(() => {
    const storedTheme = themeLocalStorage.getTheme();
    if (storedTheme === null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setIsTheme(true);
      }
    } else {
      setIsTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    themeLocalStorage.setTheme(isTheme);
  }, [isTheme]);

  useEffect(() => {
    bodyRef.current.classList = themeClass;
  }, [themeClass]);

  const handletoggleTheme = () => {
    setIsTheme(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isTheme, setIsTheme, handletoggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };



// import React, { createContext, useEffect, useMemo, useRef, useState } from 'react'
// import { themeLocalstorage } from '../../utils';

// const ThemeContext = createContext(null);


// const ThemeContextProvider = ({ children }) => {

//     const [isTheme, setIsTheme] = useState(false);
//     const bodyRef = useRef(document.querySelector("body"));

//     const themeClass = useMemo(() => (isTheme ? "dark" : ""), [isTheme]);


//     useEffect(() => {
//         bodyRef.current.classList = themeClass;
//     }, [themeClass]);

//     const handletoggleTheme = () => {
//         ;
//         setIsTheme(prev => !prev)
//     }


//     return (
//         <ThemeContext.Provider value={{ isTheme, setIsTheme, handletoggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }

// export {
//     ThemeContextProvider,
//     ThemeContext
// }
