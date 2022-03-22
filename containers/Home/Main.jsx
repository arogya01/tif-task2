import { Box , Flex } from "@chakra-ui/react";
import RequistionDetails from "../../components/providers/RequistionDetailsProvider";
import Requistion from "./Requistion";
import Sidebar from "./Sidebar";


export default function Main(){
    return(
        <RequistionDetails>
        <Flex direction = "row" justify="space-between" p={8}>
        <Requistion />
        <Sidebar />
        </Flex>
        </RequistionDetails>
    )
}