import { useContext , useReducer , createContext } from "react";

const RequistionContext = createContext();


export default function RequistionDetails(props){
    const initialState = {
        requestTitle: "let's see if this",
        owner: "",
        hiringManager: "",
        openings: "",
        urgency: "",
        employementType: "",
      };

    const reducer = (state,action) => {
     
        switch(action.type){
            case "add":

        }
    };


    const [state,dispatch] = useReducer(reducer,initialState);


    return(
       <RequistionContext.Provider value={{state,dispatch}}>
           {props.children}
       </RequistionContext.Provider>
    )
}


export const useRequisition = () =>{
    return useContext(RequistionContext);
}