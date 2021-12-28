import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import Answer from "./_partials/Answer";
import { Search2Icon } from "@chakra-ui/icons";
import { AnswerProps } from "./types";
import { fetchAnswers } from "../../utils/apollo-client";
import { useTranslation } from "next-i18next";

const HomePage = ({ data }: AnswerProps) => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<AnswerProps>();
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation("common");

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
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 32, md: 36 }}
      >
        <Heading
          as="h1"
          lineHeight="1.5"
          fontWeight={600}
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
        >
          {t("h1")}
        </Heading>

        <Box as="form" mt={10} mb={4} onSubmit={handleSubmit}>
          <FormControl>
            <InputGroup>
              <Input
                w="100%"
                id="question"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                bg="gray.100"
                type="text"
                placeholder={t("placeholder")}
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
          <Box py={12} px={6} boxShadow="lg" bg="white">
            <SkeletonCircle textAlign={"center"} size="100" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        ) : result && !loading ? (
          <Answer data={result} />
        ) : null}
      </Stack>
    </Container>
  );
};

export default HomePage;
