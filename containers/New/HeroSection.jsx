import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex , Button } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Image from "next/image";
import Logo from "../../public/new/Logo.png";



export default function HeroSection({tagLine , btnName}) {
  return (
    <Flex direction="column" position="relative" align="center" >
      <Box position="absolute" width="100%" height="835px" zIndex="hide">
        <Image
          alt="Mountains"
          src="/new/hero.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>

      <Flex direction="column" align="center">
        <Flex
          as="nav"
          direction="row"
          bgColor="white"
          mt={8}
          css={css`
            border-radius: 80px;
          `}
        >
          <Box
            as="span"
            bgColor="#78B3FD"
            
            borderRight="2px"
            cursor="pointer"
            borderColor="gray"
            px={8}
            py={2}
            css={css`
              border-top-left-radius: 80px;
              border-bottom-left-radius: 80px;
            `}
          >
            Home
          </Box>
          <Box
            as="span"
            borderRight="2px"
            cursor="pointer"
            borderColor="gray"
            _hover={{
              color:"blue"
            }}
            
            px={8}
            py={2}
          >
            About
          </Box>
          <Box
            as="span"
            borderRight="2px"
            cursor="pointer"
            borderColor="gray"
            _hover={{
              color:"blue"
            }}
            
            px={8}
            py={2}
          >
            Speakers
          </Box>
          <Box
            as="span"
            borderRight="2px"
            cursor="pointer"
            borderColor="gray"
            _hover={{
              color:"blue"
            }}
            
            px={8}
            py={2}
          >
            Community
          </Box>
          <Box as="span" borderColor="black" cursor="pointer" 
          _hover={{
              color:"blue"
            }}
          px={8} py={2}>
            Events
          </Box>
        </Flex>

        <Flex mt={20}>
          <Image src={Logo} alt="logo" />
        </Flex>
      </Flex>


      <Flex bgColor="white" p={4}>
        <Box as="h2" fontSize="1.2rem" fontWeight="bold" >{tagLine}</Box>
      </Flex>
 
      <Flex m={10} color="white">
        <Button _hover={
          {
            color:"black",
            bgColor:"white"
          }
        } variant="outline">
         <Box as="span" mr={2}>{btnName}</Box> 
        <ArrowForwardIcon />
        </Button>
        
      </Flex>
 
 
    </Flex>

    
  );
}
