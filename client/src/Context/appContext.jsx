import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const appInfo = {
        setUser, user
    }


    return (
        <AppContext.Provider value={appInfo}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;