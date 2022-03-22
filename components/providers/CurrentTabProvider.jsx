import { useContext , useReducer , createContext } from "react";

const TabContext = createContext();



export default function CurrentTab(props){
    const initialState = {
        tab:1,
    };
    const reducer = (state, action) => {

        switch(action.type){
            case "increment":
                return state.tab + 1;
                break;
            case "previous":
                return state.tab-1;
                 break;
        }
    }
    const [state,dispatch] = useReducer(reducer,initialState);


    return(
       <TabContext.Provider value={{state,dispatch}}>
           {props.children}
       </TabContext.Provider>
    )
}

export const useTab = () => {
    return useContext(TabContext);
}