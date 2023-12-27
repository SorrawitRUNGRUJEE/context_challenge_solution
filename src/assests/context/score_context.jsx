import { createContext,useState,useEffect,useContext } from "react";

export const ScoreContext = createContext()


export default function ScoreContextProvider({children}){
    const [scoreOne, setScoreOne] = useState(0);
    const [scoreTwo, setScoreTwo] = useState(0);
    const [scoreThree, setScoreThree] = useState(0);
    const [scoreFour, setScoreFour] = useState(0);
    const [total, setTotal] = useState(0);
    const player = {
      one: "john",
      two: "jane",
      three: "noon",
      four: "bo",
    };
  
    useEffect(() => {
      TotalScore(scoreOne, scoreTwo, scoreThree, scoreFour);
    }, [scoreOne, scoreTwo, scoreThree, scoreFour]);
    const TotalScore = (one, two, three, four) => {
        
      const result = one + two + three + four;
      setTotal(result);
    };

    const increment =(name) =>{
        for(let i in player){
            if(player[i]==name){
                if(i === "one") setScoreOne( scoreOne +1)
                if(i === "two") setScoreTwo((el)=> el +1)
                if(i === "three") setScoreThree ((el)=> el+1)
                if(i === "four") setScoreFour((el)=> el+1)

            }
        
        }

    }

    const decrement = (name) => {
        for(let i in player){
            if(player[i] ==name){
                if(i == "one") setScoreOne((el)=> el -1)
                if(i == "two") setScoreTwo((el)=> el -1)
                if(i == "three") setScoreThree ((el)=> el-1)
                if(i == "four") setScoreFour((el)=> el-1)

            }
           
        }

    }



    const value = {total,increment,decrement,player,scoreOne,scoreTwo,scoreThree,scoreFour}

    return <ScoreContext.Provider value={value}>
        {children}
    </ScoreContext.Provider>
}

export const useScore = () =>{
    const context = useContext(ScoreContext)
    if(!context){
        throw new Error("useScore must be used within a ScoreContextProvider");
    }

    return context
    
    
}




