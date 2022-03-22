import { Box } from "@chakra-ui/react";
import { useTab } from "../../components/providers/CurrentTabProvider";

export default function  Header(){
   
    const {state,dispacth} = useTab();

    const Statement = (state) => {
        if(state.tab ===1 ){
            return (
                <Box as="h2" fontSize="1.5rem"> 
                Create A Requistion
                </Box>
            )
        }else if (state.tab === 2) {
            return (
                <Box as="h2" fontSize="1.5rem"> 
                Create A Job
                </Box>
            )
        }
        else {
            return (
                <Box as="h2" fontSize="1.5rem"> 
                Create A Interview
                </Box>
            )
        }

        
    }

    return(
        <Box p={8}>
            {Statement(state)}
        </Box>
    )
}