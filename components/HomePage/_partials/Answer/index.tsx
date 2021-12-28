import { Box, useColorModeValue, Heading, Text, Image } from "@chakra-ui/react";
import { AnswerProps } from "../../types";

const Answer = ({ data }: AnswerProps) => {
  return (
    <Box py={12} w="700px">
      <Box
        p={6}
        w="full"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        rounded="lg"
        pos="relative"
        zIndex={1}
      >
        <Box rounded={"lg"} pos={"relative"}>
          <Image
            rounded="lg"
            mx="auto"
            maxHeight={400}
            width="full"
            objectFit="cover"
            src={data?.image}
            alt="Question"
          />
        </Box>

        <Box pt={10}>
          <Heading fontSize="xl" mb={2} fontFamily="body" fontWeight={500}>
            <em>{data?.question && `Q: ${data?.question}?`}</em>
          </Heading>

          <Text color="gray.500" fontSize="sm" textTransform="uppercase">
            {data?.answer}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Answer;
