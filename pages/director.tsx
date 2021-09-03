import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import { directorList } from "../lib/directorList";
import { fixedSentence } from "../lib/fixedSentence";

const Director: NextPage = () => {
  return (
    <Layout
      title={`${fixedSentence.date}H-NEXTで見れるAV監督まとめ`}
      description={`H-NEXTで見れるAV監督まとめ`}
      keyword={fixedSentence.keywords}
      url={`${fixedSentence.url}/director`}
      type="article"
    >
      <h1 className="text-xl sm:text-2xl text-gray-600">{`${fixedSentence.date}H-NEXTで見れる、AV監督まとめ【${directorList.length}人】`}</h1>
      <div className="py-4 sm:px-4">
        <p>{fixedSentence.caution}</p>
      </div>
      <div className="flex flex-col justify-center items-center py-4 cursor-pointer">
        <span className="py-1 text-sm">{fixedSentence.microCopy}</span>
        <a
          className="py-3 px-8 text-xl text-white bg-pink-500 hover:bg-pink-400 rounded transition"
          href={fixedSentence.affiliateLink}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          H-NEXTで見る
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 w-11/12">
        {directorList.map((content) => {
          return (
            <div key={content.directorName}>
              <Link href={`/director/${content.pageUrl}`}>
                <a className="text-blue-500 hover:opacity-90 border-b border-blue-500">
                  {content.directorName}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center py-4 cursor-pointer">
        <span className="py-1 text-sm">{fixedSentence.microCopy}</span>
        <a
          className="py-3 px-8 text-xl text-white bg-pink-500 hover:bg-pink-400 rounded transition"
          href={fixedSentence.affiliateLink}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          H-NEXTで見る
        </a>
      </div>
    </Layout>
  );
};

export default Director;
