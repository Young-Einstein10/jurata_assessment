import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  SkeletonCircle,
  SkeletonText,
  Stack,
  useToast,
} from "@chakra-ui/react";
import Answer from "./_partials/Answer";
import { Search2Icon } from "@chakra-ui/icons";
import { AnswerProps } from "./types";
import { FETCH_ANSWERS } from "../../utils/apollo-client";
import { useTranslation } from "next-i18next";
import { useMutation } from "@apollo/client";

const HomePage = ({ data }: { data?: AnswerProps }) => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<AnswerProps>();

  const [mutateFn, { loading, error }] = useMutation(FETCH_ANSWERS);

  const { t } = useTranslation("common");
  const toast = useToast();

  useEffect(() => {
    if (data) {
      setValue(data.question);
      setResult(data);
    }

    if (error) {
      toast({
        title: error.message,
        status: "error",
        position: "top",
      });
      console.log(error);
    }
  }, [error, data, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!value) {
      return toast({
        title: "Please enter a question.",
        status: "error",
        position: "top",
      });
    }

    const result = await mutateFn({
      variables: { input: { query: value } },
    });

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
