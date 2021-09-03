import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { seriesList } from "../../lib/seriesList";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields: ISitemapField[] = seriesList.map((data) => ({
    loc: `https://www.next-av-app.com/series/${decodeURI(data.pageUrl)}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};
export default function Site() {}
