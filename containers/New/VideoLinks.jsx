import React, { useEffect, useState } from "react";
import { Box, Flex, SimpleGrid, Img } from "@chakra-ui/react";
import VideoModal from "./VideoModal";
import { getYouTubeIdFromLink } from "../../components/YoutubeId";

const VideoLinks = ({ bg, videos }) => {
  const [videoInfo, setVideoInfo] = useState(null);

  return (
    <Box as="section" width="100%">
      <Box>
        {videoInfo && (
          <VideoModal setVideoInfo={setVideoInfo} videoInfo={videoInfo} />
        )}
        <Flex
          width="100%"
          flexDirection="column"
          justifyContent="space-between"
          align="center"
        >
          <SimpleGrid spacing="3rem" columns={3}>
            {videos.map((el) => {
              return (
                <VideoThumbnail
                  key={el.link}
                  setVideoInfo={setVideoInfo}
                  link={el.link}
                />
              );
            })}
          </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  );
};

export const VideoThumbnail = ({ link, setVideoInfo }) => {
  const id = getYouTubeIdFromLink(link);
  const [videoThumbnail, setVideoThumbnail] = useState("");
  const [description, setDescription] = useState("");
  const [headline, setHeadline] = useState("");

  useEffect(() => {
    try {
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${process.env.NEXT_PUBLIC_YT_KEY}`
      )
        .then((res) => {
          const result = res.json();

          return result;
        })
        .then((data) => {
          console.log(data.items[0].snippet.thumbnails.medium.url);
          setVideoThumbnail(data.items[0].snippet.thumbnails.medium.url);

          setDescription(data.items[0].snippet.description);
          setHeadline(data.items[0].snippet.title);
        });
    } catch (err) {
      console.log(err);
    }
  }, [id]);
  return (
    <Flex
      onClick={() => setVideoInfo({ id, headline, description })}
      cursor="pointer"
      
      width="320px"
      direction="column"
      align="center"
    >
    <Box
    position="relative"
    >
      <Img
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="40px"
        src="./play-button.svg"
      />
      <Img width="100%" src={videoThumbnail} />
      </Box>
      <Box as="h3" p="0.5rem" fontWeight="bold">
        {headline}
      </Box>
      <Box as="p" fontSize="12px" fontWeight="light" px="0.5rem">
        {description.slice(0, 75) + "...."}
      </Box>
    </Flex>
  );
};

export default VideoLinks;
