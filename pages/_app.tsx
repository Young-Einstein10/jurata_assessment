import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import { ApolloProvider } from "@apollo/client";
import client from "../utils/apollo-client";
import theme from "../utils/theme";

import "@fontsource/merriweather";
import "@fontsource/source-sans-pro";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default appWithTranslation(MyApp);
