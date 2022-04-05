import { Flex, Text, Img } from "@chakra-ui/react";

export default function BlockOne() {
  return (
    <Flex px="4.5em">
      <Flex
        mx="1.5rem"
        justify="center"
        align="center"
        width="382px"
        height="444px"
        position="relative"
        bgColor="primary.700"
        opacity="0.9"
        _hover={{
          transform: "scale(1.05) translateZ(0px)",
        }}
      >
        <Img
          position="absolute"
          _hover={{
            transform: "scale(1.05) translateZ(0px)",
          }}
          bgColor="primary.700"
          zIndex="-1"
          opacity="0.6"
          src="./portfolio/example.png"
          alt="bg"
        />
        <Text fontSize="2.5rem">Web</Text>
      </Flex>
      <Flex
        mx="1.5rem"
        justify="center"
        align="center"
        width="382px"
        height="444px"
        bgColor="gray"
      >
        <Text fontSize="2.5rem">Typography</Text>
      </Flex>
      <Flex
        mx="1.5rem"
        justify="center"
        align="center"
        width="382px"
        height="444px"
        bgColor="gray"
      >
        <Text fontSize="2.5rem">Design</Text>
      </Flex>
    </Flex>
  );
}
