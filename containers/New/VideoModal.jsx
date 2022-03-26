import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Img } from "@chakra-ui/react";
import YouTube from "react-youtube";
import videos from "../New/content/Events.json";
import close from "../../public/new/close.svg";
import Image from "next/image";
import { VideoThumbnail } from "./VideoLinks";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import getYouTubeID from "get-youtube-id";
import { Carousel } from "react-responsive-carousel";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";


const VideoModal = ({ videoInfo, setVideoInfo }) => {
  console.log(videoInfo);
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
      bg="rgba(0,0,0,0.9)"
      zIndex="9999"
      top="0"
      bottom="0"
      left="0"
      right="0"
    >
      <Box ml="auto" pt="1.5rem" pr="1.5rem" cursor="pointer" onClick={()=>{
        setVideoInfo(null);
      }}>
        <svg data-name="Layer 1" width="48"
            height="48" viewBox="0 0 64 64">
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
      <Flex mx="auto">
        <YouTube
          videoId={videoInfo.id}
          opts={{
            width: `${dimensions.width * 0.5}px`,
            height: `${dimensions.height * 0.5}px`,
            playerVars: {
              modestbranding: 1,
              showinfo: 0,
            },
          }}
        />
        <Box color="white" bg="#000">
          {videoInfo.description.headlineLong}
        </Box>
      </Flex>

      <Box overflow="hidden" width="90%" mx="auto">
        <Flex>
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
        </Flex>
      </Box>
    </Flex>
  );
};

export default VideoModal;

const Thumbnail = ({ link }) => {
  console.log(link);
  const id = getYouTubeID(link);
  console.log(id);
  return (
    <Img
      width="100%"
      src={"http://img.youtube.com/vi/" + id + "/mqdefault.jpg"}
    />
  );
};
