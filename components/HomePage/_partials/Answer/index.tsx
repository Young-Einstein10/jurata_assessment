import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { AnswerProps } from "../../types";

const Answer = ({ data }: { data: AnswerProps }) => {
  return (
    <Box>
      <Box
        p={6}
        w="full"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        rounded="lg"
        pos="relative"
        zIndex={1}
      >
        <Box rounded="lg" pos="relative">
          <Image
            rounded="lg"
            mx="auto"
            maxHeight={400}
            width="full"
            objectFit="cover"
            src={data?.image}
            alt="Answer Image"
          />
        </Box>

        <Box pt={10} textAlign="justify">
          <Heading color="black" fontSize="xl" mb={4} fontFamily="body">
            <em>{data?.question && `Q: ${data?.question}?`}</em>
          </Heading>

          <Text mb={4} fontSize="md">
            {data?.answer}
          </Text>

          {data?.url && (
            <Link href={data?.url} isExternal>
              Read More <ExternalLinkIcon mx="2px" />
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Answer;
