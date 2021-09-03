import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { Datas } from "../../lib/Datas";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields: ISitemapField[] = Datas.map((data) => ({
    loc: `https://www.next-av-app.com/posts/${data.forUrlNumber}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};
export default function Site() {}
