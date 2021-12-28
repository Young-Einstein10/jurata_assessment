import type { NextPage } from "next";
import { useRouter } from "next/router";
import HomePage from "../components/HomePage";
import { AnswerProps } from "../components/HomePage/types";
import { Layout } from "../components/Layout";
import { fetchAnswers } from "../utils/apollo-client";

const Question: NextPage = ({ result }: AnswerProps) => {
  return (
    <Layout>
      <HomePage data={result} />
    </Layout>
  );
};

export default Question;

export async function getServerSideProps(context) {
  const { question } = context.params;

  const { data } = await fetchAnswers(question);

  return {
    props: {
      result: { question, ...data?.askMe },
    }, // will be passed to the page component as props
  };
}
