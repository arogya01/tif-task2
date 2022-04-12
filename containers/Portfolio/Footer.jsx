import { Flex, Box, Img, Text , Button} from "@chakra-ui/react";

export default function Footer({ content }) {
  return (
    <Flex
      px="6rem"
      py="10rem"
      flexDirection="column"
      align="center"
      justify="center"
    >
      <Box boxSize="95px">
        <Img src="./portfolio/zap.png" alt="zap" />
      </Box>

      <Text
        fontSize="1.5rem"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
        textAlign="center"
        pt="1rem"
      />
       <Button
          pr="1.5rem"
          variant="outline"
          borderColor="black"
          borderRadius="50px"
          mt="2rem"
          p="1.5rem"
          fontWeight="normal"
          fontSize="22px"
        >
          get in touch
        </Button>
    </Flex>
  );
}
