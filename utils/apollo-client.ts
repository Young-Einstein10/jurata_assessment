import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { gql } from "@apollo/client";

const MUTATION = gql`
  fragment QuestionInput on REST {
    query: String
  }

  mutation AskMe($input: QuestionInput!) {
    askMe(input: $input)
      @rest(type: "Answer", path: "answer/Question", method: "POST") {
      answer
      image
      url
    }
  }
`;

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// Set `RestLink` with your endpoint
const restLink = new RestLink({
  uri: "https://api.m3o.com/v1/",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${API_KEY}`,
  },
});

// Setup your client
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

export const fetchAnswers = async (query: string) => {
  const res = await client.mutate({
    variables: { input: { query } },
    mutation: MUTATION,
  });

  return res;
};

export default client;
