import React, { FC } from "react";
import Head from "next/head";
import Navbar from "./_partials/Navbar";
import { Box } from "@chakra-ui/react";
// import { Footer } from "./_partials/Footer";

export const Layout: FC<{ title?: string }> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Home | AskMe"}</title>
        <meta
          name="description"
          content="Ask any question you have and find an answer immediately."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Box as="main">{children}</Box>
    </>
  );
};
