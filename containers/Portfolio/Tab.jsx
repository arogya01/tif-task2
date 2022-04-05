import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Tab() {
  const [tab,setTab] = useState("Web");

  return (
    <Flex px="6rem" pt="10rem" flexDirection="column">
      <Flex position="relative" justify="flex-start">
        <Text  cursor="pointer"  pb="1.5rem" mr="3rem" fontSize="3rem" 
        onClick={(event)=>setTab(event.target.innerHTML)}
        >
          web.
        </Text>
        <Text
        onClick={(event)=>setTab(event.target.innerHTML)}
         cursor="pointer"  
          pb="3rem"
          mr="3rem"
          pt="0.5rem"
          fontSize="3rem"
          fontWeight="light"
        >
          Typography.
        </Text>
        <Text cursor="pointer"   pb="1.5rem" mr="3rem" fontSize="3rem" fontWeight="light"
        onClick={(event)=>setTab(event.target.innerHTML)}
        >
          design.
        </Text>

        <Text
          position="absolute"
          pb="1.5rem"
          mr="3rem"
          fontSize="120px"
          right="-2rem"
          top="1.5rem"
          zIndex="-1"
          color="#E6E6e6"
          fontWeight=""
        >
         {tab}
        </Text>
      </Flex>

      <Flex justify="space-between" flexWrap="wrap" align="center">
        <Flex
          mr="1.5rem"
          my="1rem"
          width="382px"
          height="288px"
          bgColor="gray"
        ></Flex>
        <Flex
          mr="1.5rem"
          my="1rem"
          width="382px"
          height="288px"
          bgColor="gray"
        ></Flex>
        <Flex
          mr="1.5rem"
          my="1rem"
          width="382px"
          height="288px"
          bgColor="gray"
        ></Flex>
        <Flex
          mr="1.5rem"
          my="1rem"
          width="382px"
          height="288px"
          bgColor="gray"
        ></Flex>
        <Flex
          mr="1.5rem"
          my="1rem"
          width="382px"
          height="288px"
          bgColor="gray"
        ></Flex>
        <Flex
          mr="1.5rem"
          my="1rem"
          width="382px"
          height="288px"
          bgColor="gray"
        ></Flex>
      </Flex>
    </Flex>
  );
}
