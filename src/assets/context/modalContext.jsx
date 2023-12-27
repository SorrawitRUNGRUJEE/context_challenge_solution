import { createContext } from "react";

export const ModalContext = createContext()


export default function ModalContextProvider({children}){



    const value = {}

    return <ModalContext.Provider value={value}>
        {children}
    </ModalContext.Provider>
}
