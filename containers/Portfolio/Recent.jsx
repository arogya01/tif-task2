import { Flex, Heading } from "@chakra-ui/react";

export default function Recent() {
  return (
    <Flex mt="8rem" px="6rem" pb="4rem" flexDirection="column" align="center">
      <Heading pb="3rem">Recent Projects</Heading>

      <Flex justify="space-between">
        <Flex mr="1.5rem" width="382px" height="288px" bgColor="gray"></Flex>
        <Flex mr="1.5rem" width="382px" height="288px" bgColor="gray"></Flex>
        <Flex mr="1.5rem" width="382px" height="288px" bgColor="gray"></Flex>
      </Flex>
    </Flex>
  );
}
