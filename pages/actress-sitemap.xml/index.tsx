import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { actressList } from "../../lib/actressList";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields: ISitemapField[] = actressList.map((data) => ({
    loc: `https://www.next-av-app.com/actress/${data.pageUrl}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};
export default function Site() {}
