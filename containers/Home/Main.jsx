import { Box , Flex } from "@chakra-ui/react";
import { useForm } from "../../components/providers/FormProvider";
import RequistionDetails from "../../components/providers/RequistionDetailsProvider";
import Requistion from "./Requistion";
import Sidebar from "./Sidebar";

export default function Main(){
    
   const {state, dispatch} = useForm();

    return(
        <RequistionDetails>
        <Flex direction = "row" justify="space-between" p={8}>
        <Requistion />
        <Sidebar />
        </Flex>
        </RequistionDetails>
    )
}