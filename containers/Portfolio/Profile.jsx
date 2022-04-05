import { Flex, Img, Box, Heading, Text } from "@chakra-ui/react";

export default function Profile({ content }) {
  return (
    <Flex py="7rem" px="6rem" flexDirection="column" align="space-between">
      <Flex align="center">
        <Box boxSize="121px" mr="3rem">
          <Img src="./portfolio/Ellipse.png" alt="Ellipse" />
        </Box>

        <Box mr="1.5rem" boxSize="2rem">
          <Img src="./portfolio/Twitter.png" alt="Ellipse" />
        </Box>
        <Box mr="1.5rem" boxSize="2rem">
          <Img src="./portfolio/linkedin.png" alt="Ellipse" />
        </Box>
        <Box mr="1.5rem" boxSize="2rem">
          <Img src="./portfolio/dribbble.png" alt="Ellipse" />
        </Box>
        <Box mr="1.5rem" boxSize="2rem">
          <Img src="./portfolio/facebook.png" alt="Ellipse" />
        </Box>
      </Flex>

      <Flex mt="3rem"
      >
        <Box position="relative">
        <Img position="absolute" top="-4rem" left="1.5rem" zIndex="-1" src="./portfolio/stroke.png" />
        <Heading fontSize="52px" fontWeight={900}>Peter Pan</Heading>
        </Box>
      </Flex>

      <Box mt="2rem" mr="8rem">
        <Text fontSize="1.5rem">{content}</Text>
      </Box>
    </Flex>
  );
}
