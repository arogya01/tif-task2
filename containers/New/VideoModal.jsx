import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Img } from "@chakra-ui/react";
import YouTube from "react-youtube";
import videos from "../New/content/Events.json";
import close from "../../public/new/close.svg";
import Image from "next/image";
import { VideoThumbnail } from "./VideoLinks";
import getYouTubeID from "get-youtube-id";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const VideoModal = ({ videoInfo, setVideoInfo }) => {
  const [dimensions, setDimensions] = useState({
    height: 900,
    width: 1440,
  });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <Flex
      direction="column"
      justify="space-between"
      position="fixed"
      bg="rgba(0,0,0)"
      zIndex="9999"
      top="0"
      bottom="0"
      left="0"
      right="0"
    >
      <Box
        ml="auto"
        pt="1.5rem"
        pr="1.5rem"
        cursor="pointer"
        onClick={() => {
          setVideoInfo(null);
        }}
      >
        <svg data-name="Layer 1" width="48" height="48" viewBox="0 0 64 64">
          <line
            x1="9.37"
            x2="54.63"
            y1="9.37"
            y2="54.63"
            fill="none"
            stroke="#f2f2f2"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            x1="9.37"
            x2="54.63"
            y1="54.63"
            y2="9.37"
            fill="none"
            stroke="#f2f2f2"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
        </svg>
      </Box>

      <Flex mx="auto" py="2rem">
        <YouTube
          videoId={videoInfo.id}
          opts={{
            width: `${dimensions.width * 0.4}px`,
            height: `${dimensions.height * 0.5}px`,
            playerVars: {
              modestbranding: 1,
              showinfo: 0,
            },
          }}
        />
        <Flex
          overflowY="scroll"
          flexDirection="column"
          width="400px"
          height="330px"
          px="2rem"
          color="white"
          bg="#000"
        >
          <Box as="h2" fontSize="1.2rem" mb="2rem">
            {videoInfo.headline}
          </Box>
          <Box
            as="p"
            fontWeight="light"
            mb="1rem"
            dangerouslySetInnerHTML={{
              __html: videoInfo.description,
            }}
          />
        </Flex>
      </Flex>

      <Box overflow="hidden" pt="0" width="100%" mx="auto">
        <Carousel responsive={responsive}>
          {videos.map((el) => {
            console.log("videos is:", el);
            return (
              <VideoThumbnail
                key={el.i}
                setVideoInfo={setVideoInfo}
                link={el.link}
                contentId={el.i}
                description={el.description}
              />
            );
          })}
        </Carousel>
      </Box>
    </Flex>
  );
};

export default VideoModal;
