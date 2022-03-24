import { Flex, Box, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Image from "next/image";

export default function Community({
  header,
  content,
  tagLine,
  btnName,
  imgSrcOne,
  imgSrcTwo,
  imgSrcThree,
}) {
  return (
    <Flex direction="column" align="center" my={20}>
      <Box as="h2" fontSize="42px" textAlign="center">
        {header}
      </Box>
      <Box
        fontWeight="light"
        width="720px"
        pt={6}
        textAlign="center"
        lineHeight={1.5}
      >
        <Box as="p">{content}</Box>
        <br />
      </Box>
      <Box as="p">{tagLine}</Box>

      <Flex direction="row" align="center" justify="space-between" mt={8}>
        <Box mx={4}>
          <Image src={imgSrcOne} alt="one" />
        </Box>
        <Box mx={4}>
          <Image src={imgSrcOne} alt="one" />
        </Box>
        <Box mx={4}>
          <Image src={imgSrcOne} alt="one" />
        </Box>
      </Flex>

      <Button
        mt={8}
        _hover={{
          color: "white",
          bgColor: "#2B2B2B",
        }}
        variant="outline"
        borderColor="black"
        borderRadius={22}
      >
        <Box as="span" mr={2}>
          {btnName}
        </Box>
        <ArrowForwardIcon />
      </Button>
    </Flex>
  );
}
