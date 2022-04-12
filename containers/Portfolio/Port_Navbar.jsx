import { Text, Flex, Box, Button, Img } from "@chakra-ui/react";
import Link from "next/link";

export default function Port_Navbar() {
  return (
    <Flex flexDirection="row" justify="space-between" pt="2rem" px="6rem">
      <Img
        position="absolute"
        zIndex="-1"
        left="694px"
        top="-167px"
        overflow="hidden"
        src="/Portfolio/spiral.svg"
      />
      <Box>
        <Text fontSize="43px" transform="rotate(-15deg)">
          <Link href="/portfolio">
            <a>p.</a>
          </Link>
        </Text>
      </Box>
      <Flex justify="space-between" align="center">
        <Text pr="1.5rem" fontSize="22px" cursor="pointer">
          <Link href="/">
            <a>about</a>
          </Link>

          <Box as="span" fontSize="2rem">
            .
          </Box>
        </Text>
        <Text pr="1.5rem" fontSize="22px" cursor="pointer">
          <Link href="/portfolio/projects">
            <a>projects</a>
          </Link>
          <Box as="span" fontSize="2rem">
            .
          </Box>
        </Text>
        <Text pr="1.5rem" fontSize="22px" cursor="pointer">
          <Link href="/">
            <a>clients</a>
          </Link>
          <Box as="span" fontSize="2rem">
            .
          </Box>
        </Text>
        <Button
          variant="outline"
          borderColor="black"
          borderRadius="50px"
          py="1.5rem"
          px="2rem"
        >
          <Text fontSize="1.5rem">get in touch</Text>
        </Button>
      </Flex>
    </Flex>
  );
}
