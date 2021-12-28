import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import HomePage from "../components/HomePage";
import { AnswerProps } from "../components/HomePage/types";
import { Layout } from "../components/Layout";
import { fetchAnswers } from "../utils/apollo-client";

const Question: NextPage = ({ data }: AnswerProps) => {
  return (
    <Layout>
      <HomePage data={data} />
    </Layout>
  );
};

export default Question;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { question } = context.params as { question: string };

  const { data } = await fetchAnswers(question);
  const result = { question, ...data?.askMe } as AnswerProps;

  return {
    props: {
      data: result,
    }, // will be passed to the page component as props
  };
};
