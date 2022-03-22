import { Box, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useRequisition } from "../../components/providers/RequistionDetailsProvider";

export default function Sidebar() {

  const {state,dispatch} = useRequisition();

  return (
    <Flex
      flex="1"
      direction="column"
        
      p={8}
      
      css={css`
        box-shadow: -24px -24px 34px #ffffff,
          24px 24px 34px rgba(128, 135, 164, 0.13);
        border-radius: 10px;
      `}
    >
      <Flex fontStyle="italic" direction="row" p={4} m={4} justify="space-between">
        <Box>
          <Box as="p">Draft</Box>
        </Box>
        <Box>
          <Box as="p" bgColor="#E74861" p={2} borderRadius={4}>
            Preview
          </Box>
        </Box>
      </Flex>

      <Flex
        bgColor="#37446E"
        direction="row"
        p={4}
        m={4}
        justify="space-between"
        borderRadius={4}
        color="white"
      >
        <Box as="h2">Senior Javascript Developer</Box>
        <Box as="p">openings 5</Box>
      </Flex>

      <Flex direction="column" p={4} m={4} bgColor="white"
       css={
         css`
           box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
         `
       }
       >
         <Box>
        <Box as="h2">Requistion Details</Box>
        </Box>

        <Flex direction="row" justify="space-between">
        <Box p={2} >
        <Box as="p">Owner</Box>
        <Box as="p">{state.owner}</Box>
        </Box>
        <Box p={2} >
        <Box as="p">urgency</Box>
        <Box as="p">{state.urgency}</Box>
        </Box>
        <Box p={2} >
        <Box as="p">EmploymentType</Box>
        <Box as="p">{state.employmentType}</Box>
        </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
