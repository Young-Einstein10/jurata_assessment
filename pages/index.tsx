import type { GetStaticProps, NextPage } from "next";
import HomePage from "../components/HomePage";
import { Layout } from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("title")}>
      <HomePage />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => ({
  props: {
    ...(await serverSideTranslations(ctx.locale!, ["common"])),
  },
});

export default Home;
