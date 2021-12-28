import React from "react";
import { Box, Container, Flex, HStack, Select, Text } from "@chakra-ui/react";
import Link from "next/link";
import LangSwitcher from "../LangSwitcher";

const Navbar = () => {
  return (
    <Box as="header" bgColor="brand" color="white">
      <Container maxW="container.lg">
        <Flex
          as="nav"
          py="1.5rem"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/">
            <a>
              <Text color="white" fontSize="3xl" fontWeight="bold">
                AskMe
              </Text>
            </a>
          </Link>

          <HStack spacing={5}>
            <Link href="#">
              <a>
                <Text fontWeight="bold">Login</Text>
              </a>
            </Link>

            <LangSwitcher />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
