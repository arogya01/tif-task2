import { Flex, Box } from "@chakra-ui/react";
import content from "./content/Events.json";
import VideoLinks, { VideoThumbnail } from "./VideoLinks";
import videos from './content/videos.json';


export default function Events({ header, tagLine }) {
  return (
    <Flex direction="column" align="center" py={16} bgColor="#EAE9E2">
      <Box as="h2" fontSize="42px" textAlign="center">
        {header}
      </Box>
      <Box pt={8}>
        <Box as="p" fontWeight="light">
          {tagLine}
        </Box>
      </Box>
      <Flex direction="row" justify="center" align="center">
        <Box p={8}>
         <VideoLinks videos={videos} />
        </Box>
      </Flex>
    </Flex>
  );
}
