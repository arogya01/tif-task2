import { Flex , Box, Spacer} from "@chakra-ui/react";
import Image from 'next/image';


export default function About({content,header,imgSrc , pieceOne, pieceTwo}){
    return(
        <Flex direction="column" align="center" py={16} bgColor="#EAE9E2">
        <Box as="h2" fontSize="42px" textAlign="center">{header}</Box>
        <Flex direction="row" justify="evenly" align="center" p={8}>
        <Box flex={1} pl={30} fontWeight="light" fontSize="0.8rem" width="620px" >
            <Box as="p">{pieceOne}</Box>
            <br/>
            <Box as="p">{pieceTwo}</Box>
        </Box>
        <Box width="390px" height="390px" pl={10} flex={1}>
            <Image src={imgSrc} alt="about" width={390} height={390}/>
        </Box>
        </Flex>
        </Flex>
    )
}