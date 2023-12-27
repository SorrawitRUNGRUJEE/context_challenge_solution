import { createContext } from "react";

export const ScoreContext = createContext()


export default function ScoreContextProvider({children}){



    const value = {}

    return <ScoreContext.Provider value={value}>
        {children}
    </ScoreContext.Provider>
}




