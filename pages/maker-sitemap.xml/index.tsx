import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { makerList } from "../../lib/makerList";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields: ISitemapField[] = makerList.map((data) => ({
    loc: `https://www.next-av-app.com/maker/${data.pageUrl}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};
export default function Site() {}