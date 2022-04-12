import { Flex, Text, keyframes } from "@chakra-ui/react";
import { useState } from "react";

const variants = {
  initial: {
    opacity: 0,
    scale: 0.3,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: [0.6, 0],
    scale: [0.6, 0.3],
  },
};

const All = () => {
  return (
    <Flex
      animation={spinAnimation}
      position="relative"
      initial="initial"
      animate="animate"
      exit="exit"
      flexWrap="wrap"
      align="center"
    >
      <Text
        position="absolute"
        pb="1.5rem"
        mr="3rem"
        fontSize="120px"
        right="-2rem"
        top="-7rem"
        zIndex="-1"
        color="#E6E6e6"
        animation={spinAnimation}
      >
        all.
      </Text>
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
  );
};

const fade = keyframes`
  0% {opacity:0}
  50% {opacity:0.5}
  100% {opacity:1}
`;
const spinAnimation = `${fade} 1s linear`;

const Web = () => {
  return (
    <Flex
      animation={spinAnimation}
      justify="space-between"
      position="relative"
      flexWrap="wrap"
      align="center"
    >
      <Text
        position="absolute"
        pb="1.5rem"
        mr="3rem"
        fontSize="120px"
        right="-2rem"
        top="-7rem"
        zIndex="-1"
        color="#E6E6e6"
        fontWeight=""
        animation={spinAnimation}
      >
        web.
      </Text>
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
  );
};

const Typography = () => {
  return (
    <Flex
      animation={spinAnimation}
      flexWrap="wrap"
      position="relative"
      align="center"
    >
      <Text
        position="absolute"
        pb="1.5rem"
        mr="3rem"
        fontSize="120px"
        right="-2rem"
        top="-7rem"
        zIndex="-1"
        color="#E6E6e6"
        fontWeight=""
        animation={spinAnimation}
      >
        typography.
      </Text>
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
  );
};

const Design = () => {
  return (
    <Flex flexWrap="wrap" position="relative" animation={spinAnimation}>
      <Text
        position="absolute"
        pb="1.5rem"
        mr="3rem"
        fontSize="120px"
        right="-2rem"
        top="-7rem"
        zIndex="-1"
        color="#E6E6e6"
        fontWeight=""
        animation={spinAnimation}
      >
        design.
      </Text>
      <Flex
        mr="1.5rem"
        my="1rem"
        width="382px"
        height="288px"
        bgColor="gray"
      ></Flex>
    </Flex>
  );
};

const SelectedTab = ({ tabValue }) => {
  if (tabValue === "all.") {
    return <All />;
  } else if (tabValue === "web.") {
    return <Web />;
  } else if (tabValue === "typography.") {
    return <Typography />;
  } else if (tabValue === "design.") {
    return <Design />;
  } else return null;
};

export default function Tab() {
  const [tab, setTab] = useState("all.");

  return (
    <Flex px="6rem" pt="10rem" flexDirection="column">
      <Flex position="relative" justify="flex-start">
        <Text
          cursor="pointer"
          pb="1.5rem"
          mr="3rem"
          fontSize="3rem"
          onClick={(event) => setTab(event.target.innerHTML)}
        >
          all.
        </Text>
        <Text
          cursor="pointer"
          pb="1.5rem"
          mr="3rem"
          fontSize="3rem"
          onClick={(event) => setTab(event.target.innerHTML)}
        >
          web.
        </Text>
        <Text
          onClick={(event) => setTab(event.target.innerHTML)}
          cursor="pointer"
          pb="3rem"
          mr="3rem"
          pt="0.5rem"
          fontSize="3rem"
          fontWeight="light"
        >
          typography.
        </Text>
        <Text
          cursor="pointer"
          pb="1.5rem"
          mr="3rem"
          fontSize="3rem"
          fontWeight="light"
          onClick={(event) => setTab(event.target.innerHTML)}
        >
          design.
        </Text>
      </Flex>

      <SelectedTab tabValue={tab} />
    </Flex>
  );
}
