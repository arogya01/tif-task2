import React, { useState } from "react";
import { Box, Flex, SimpleGrid, Img } from "@chakra-ui/react";
import getYouTubeID from "get-youtube-id";
import VideoModal from "./VideoModal";

const VideoLinks = ({ bg, videos }) => {
  const [videoInfo, setVideoInfo] = useState(null);

  return (
    <Box as="section" width="100%" >
      <Box>
        {videoInfo && (
          <VideoModal
            setVideoInfo={setVideoInfo}
            videoInfo={videoInfo} 
           
          />
        )}
        <Flex
          width="100%"
          flexDirection="column"
          justifyContent="space-between"
          align="center"
        >
          <SimpleGrid  spacing="3rem"  columns={3}>
            {videos.map((el) => {
              
              return (
                <Flex key={el.i} width="320px"  direction="column" align="center" >
                <VideoThumbnail
                  setVideoInfo={setVideoInfo}
                  link={el.link}
                  contentId={el.i}
                  description={el.description}
                />
                <Box as="h3"  p="0.5rem"  fontWeight="bold">{el.headline}</Box>
                <Box as="p"  p="0.5rem" >{el.content}</Box>
                </Flex>
              );
            })}
          </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  );
};

export const VideoThumbnail = ({ link, setVideoInfo ,description }) => {
  const id = getYouTubeID(link);
  return (
    <Box
      onClick={() => setVideoInfo({id,setVideoInfo,description})}
      cursor="pointer"
      position="relative"
    >
      <Img
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="40px"
        src="/play-button.svg"
      />
      <Img width="100%" src={"http://img.youtube.com/vi/" + id + "/mqdefault.jpg"} />
    </Box>
  );
};

export default VideoLinks;
