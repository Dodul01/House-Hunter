import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [rooms, setRooms] = useState([]);

    const storeUserInfoInLocalStorage = (user) => {
        if (user) {
            localStorage.setItem('User', JSON.stringify(user))
        }
    }

    const readUserInfoLocalStorage = () => {
        setUser(JSON.parse(localStorage.getItem('User')))
    }

    const appInfo = {
        setUser, user, storeUserInfoInLocalStorage, readUserInfoLocalStorage,
        setRooms, rooms, 
    }

    return (
        <AppContext.Provider value={appInfo}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;