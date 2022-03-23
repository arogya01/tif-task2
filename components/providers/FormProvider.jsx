import { useContext , useReducer , createContext } from "react";

const FormContext = createContext();


export default function FormProvider(props){
    const initialState = {
        count:1
    };

    const reducer = (state,action) => {
        let newState = {};

      switch(action.type){
          case "increment":
            newState = {count : state.count + 1}
            break;
          case "decrement":
            newState = {count : state.count - 1}
            break;

      }

      return newState;

    };


    const [state,dispatch] = useReducer(reducer,initialState);


    return(
       <FormContext.Provider value={{state,dispatch}}>
           {props.children}
       </FormContext.Provider>
    )
}


export const useForm = () =>{
    return useContext(FormContext);
}