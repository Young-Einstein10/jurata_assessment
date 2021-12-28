import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import Answer from "./_partials/Answer";
import { Search2Icon } from "@chakra-ui/icons";
import { AnswerProps } from "./types";
import { fetchAnswers } from "../../utils/apollo-client";

const HomePage = ({ data }: AnswerProps) => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<AnswerProps>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setValue(data.question);
      setResult(data);
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await fetchAnswers(value);

    setLoading(false);
    setResult({ question: value, ...result?.data?.askMe });
  };

  return (
    <Flex minH="calc(100vh - 93px)" direction="column" alignItems="center">
      <Heading as="h1" mt={40} fontSize="1.5rem" fontWeight="bold">
        Have any question? Find your answers below👇.
      </Heading>

      <Box as="form" w="700px" mt={10} mb={4} onSubmit={handleSubmit}>
        <FormControl>
          <InputGroup>
            <Input
              w="100%"
              id="question"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              bg="gray.100"
              type="text"
              placeholder="Enter Question..."
              borderRadius="4px"
              h="68px"
            />
            <InputRightElement h="68px">
              <Search2Icon transform="rotate(90deg)" />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Box>

      {loading ? (
        <Box py={12} px={6} w="700px" boxShadow="lg" bg="white">
          <SkeletonCircle textAlign={"center"} size="100" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      ) : result && !loading ? (
        <Answer data={result} />
      ) : null}
    </Flex>
  );
};

export default HomePage;
