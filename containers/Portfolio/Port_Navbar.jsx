import { Text, Flex, Box, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Port_Navbar() {
  return (
    <Flex flexDirection="row" justify="space-between" pt="2rem" px="6rem">
      <Box>
        <Text fontSize="43px" transform="rotate(-15deg)">
          p.
        </Text>
      </Box>
      <Flex justify="space-between" align="center" >
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
          <a>Projects</a>
          </Link>
          <Box as="span" fontSize="2rem">
            .
          </Box>
        </Text>
        <Text pr="1.5rem" fontSize="22px" cursor="pointer">
        <Link href="/">
          <a>Clients</a>
          </Link>
          <Box as="span" fontSize="2rem">
            .
          </Box>
        </Text>
        <Button
          pr="1.5rem"
          variant="outline"
          borderColor="black"
          borderRadius="50px"
        >
          get in touch
        </Button>
      </Flex>
    </Flex>
  );
}
