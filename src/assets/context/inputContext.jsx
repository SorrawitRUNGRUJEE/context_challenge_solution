import { createContext } from "react";

export const InputContext = createContext()


export default function InputContextProvider({children}){



    const value = {}

    return <InputContext.Provider value={value}>
        {children}
    </InputContext.Provider>
}


