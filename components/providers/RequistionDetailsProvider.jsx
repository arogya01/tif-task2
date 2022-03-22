import { useContext , useReducer , createContext } from "react";

const RequistionContext = createContext();


export default function RequistionDetails(props){
    const initialState = {
        requestTitle: "",
        owner: "",
        hiringManager: "",
        openings: "",
        urgency: "",
        employementType: "",
      };

    const reducer = (state,action) => {
       const newState= {};

        switch(action.type){
            case "add":
             newState = action.formValue;
             break;
             default:
                 throw new Error();     
        }

        return newState;
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