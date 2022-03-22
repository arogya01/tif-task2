import { useContext , useReducer , createContext } from "react";

const RequistionContext = createContext();


export default function RequistionDetails(){
    const initialState = {};

    const reducer = (state,action) => {

    
    };


    const [state,dispatch] = useReducer(reducer,action);


    return(
       <RequistionContext.Provider value={{state,dispatch}}>
           {props.children}
       </RequistionContext.Provider>
    )
}


export const useRequisition = () =>{
    return useContext(RequistionContext);
}