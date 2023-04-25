import { createContext, useState } from "react";

const GlobalContext = createContext({})
const GlobalContextProvider: React.FC<{children: any}> = ({children}) => {

    const [homeState, setHomeState] = useState(false)
    const changeHome = () => {
        setHomeState(true)
    }
    return ( <GlobalContext.Provider value={{homeState, changeHome}}>
        {children}
    </GlobalContext.Provider>
    )
}
export default GlobalContextProvider
