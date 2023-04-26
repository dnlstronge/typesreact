import React, { createContext, useState, useContext } from "react";

const myData = { };

/* default values */
export const GlobalContext = createContext({
    homeActive: false, updateHome: () => {},
    programsActive: false, updatePrograms: () => {},
    playgroundActive: false, updatePlayground: () => {},
    aboutActive: false, updateAbout: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const GlobalContextProvider: React.FC<Props> = ({ children }) => {

    const [homeActive, setHomeActive] = useState(true)
    const [programsActive, setProgramsActive] = useState(false)
    const [playgroundActive, setPlaygroundActive] = useState(false)
    const [aboutActive, setAboutActive] = useState(false)




    /*Helpers to update global state */

    const updateHome = () => {
        setHomeActive(true)
        setProgramsActive(false)
        setPlaygroundActive(false)
        setAboutActive(false)
    }
    const updatePrograms = () => {
        setHomeActive(false)
        setProgramsActive(true)
        setPlaygroundActive(false)
        setAboutActive(false)
    }

    const updatePlayground = () => {
        setHomeActive(false)
        setProgramsActive(false)
        setPlaygroundActive(true)
        setAboutActive(false)
    }

    const updateAbout = () => {
        setHomeActive(false)
        setProgramsActive(false)
        setPlaygroundActive(false)
        setAboutActive(true)
    }
  return (
    <GlobalContext.Provider value={{ 
        homeActive, 
        updateHome,  
        programsActive, 
        updatePrograms, 
        playgroundActive, 
        updatePlayground,
        aboutActive,
        updateAbout}}>
      {children}
    </GlobalContext.Provider>
  );
};
