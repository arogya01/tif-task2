import { Box, Flex } from "@chakra-ui/react";

export default function Tab() {
  return (
    <Flex direction="row" ml={4} mb={0} borderBottom="2px" borderColor="gray.300">
      <Box
        p={4}
        borderBottom="2px" borderColor="#FF8282"     

      >
        Requistion Details
      </Box>
      <Box
        p={4}
        color="#8087A4"
      >
        Job Details
      </Box>
      <Box
        p={4}
        color="#8087A4"
      >
        Interview Settings
      </Box>
    </Flex>
  );
}
