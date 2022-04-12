import { Flex, Text, Img, chakra, Box } from "@chakra-ui/react";
import { motion, useMotionValue, isValidMotionProp } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
export const closeSpring = { type: "spring", stiffness: 300, damping: 35 };

const MotionFlex = motion(Flex);
const MotionPara = motion(Text);
const MotionImg = motion(Img);

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});

function checkZIndex(latest) {
  if (isSelected) {
    zIndex.set(2);
  } else if (!isSelected && latest.scaleX < 1.01) {
    zIndex.set(0);
  }
}

export default function BlockOne({ isSelected }) {
  const y = useMotionValue(0);
  const zIndex = useMotionValue(isSelected ? 2 : 0);
  const [isModalOpen, setModal] = useState(false);
  // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
  // const inverted = useInvertedBorderRadius(20);

  // We'll use the opened card element to calculate the scroll constraints
  const cardRef = useRef(null);

  // const constraints = useScrollConstraints(cardRef, isSelected);

  useEffect(() => {
    document.addEventListener("onClick", (event) => {
      console.log(event);
      if (event.target !== document.getElementById("fiex")) {
        if (isModalOpen === true) {
          setModal(false);
        }
      }
    });
  }, [isModalOpen]);

  return (
    <Flex justify="center" px="4.5em" my="4rem">
      <MotionFlex
        animate={{ scale: 1.5 }}
        width="300px"
        height="300px"
        onClick={() => setModal(true)}
        justify="center"
        align="center"
      >
        <MotionImg layoutId="2" src="/portfolio/example.png"></MotionImg>
      </MotionFlex>

      {/* {isModalOpen ? (
        <MotionFlex
          onClick={() => setModal(false)}
          width="800px"
          height="800px"
          bg="red.200"
          direction="column"
          align="center"
          borderRadius="16"
        >
          <MotionImg
            width="650px"
            height="400px"
            layoutId="2"
            src="/portfolio/example.png"
          ></MotionImg>

          <MotionPara mx="auto" px="2rem" mt="2rem">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </MotionPara>
        </MotionFlex>
      ) : (
     
      )} */}

      {isModalOpen ? (
        <MotionFlex
          animate={{
            scale: 1.2,
            transition: {
              ease: "easeOut",
              duration: 0.5,
            },
          }}
          id="fiex"
          onClick={(event) => {
            console.log(event.target);
            if (event.target !== document.getElementById("fiex")) {
              setModal(false);
            }
          }}
          layout
          position="fixed"
          top="60%"
          left="50%"
          width="800px"
          height="700px"
          borderRadius="16px"
          layoutTransition={isModalOpen ? openSpring : closeSpring}
          border="2px solid black"
          bgColor="#1C1C1E"
          justify="center"
          align="center"
          mx="auto"
          mt="-450px"
          ml="-400px"
          color="white"
          flexDirection="column"
        >
          <MotionImg width="300px" src="/portfolio/example.png" />
          <MotionPara px="5rem" mt="2rem">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </MotionPara>
        </MotionFlex>
      ) : null}
    </Flex>
  );
}
