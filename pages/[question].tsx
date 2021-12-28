import type { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomePage from "../components/HomePage";
import { AnswerProps } from "../components/HomePage/types";
import { Layout } from "../components/Layout";
import { fetchAnswers } from "../utils/apollo-client";

const Question: NextPage = ({ data }: AnswerProps) => {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("title")}>
      <HomePage data={data} />
    </Layout>
  );
};

export default Question;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { question } = ctx.params as { question: string };

  const { data } = await fetchAnswers(question);
  const result = { question, ...data?.askMe } as AnswerProps;

  return {
    props: {
      data: result,
      ...(await serverSideTranslations(ctx.locale!, ["common"])),
    }, // will be passed to the page component as props
  };
};
