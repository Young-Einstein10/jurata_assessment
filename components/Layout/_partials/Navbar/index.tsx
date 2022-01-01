import React from "react";
import { Box, Container, Flex, HStack, Select, Text } from "@chakra-ui/react";
import Link from "next/link";
import LangSwitcher from "../LangSwitcher";

const Navbar = () => {
  return (
    <Box as="header" bgColor="brand" color="white">
      <Container maxW="container.lg" px={{ base: 4, sm: 6 }}>
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

          <Box>
            <LangSwitcher />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
