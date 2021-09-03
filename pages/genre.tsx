import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import { genreList } from "../lib/genreList";
import { fixedSentence } from "../lib/fixedSentence";

const Genre: NextPage = () => {
  return (
    <Layout
      title={`${fixedSentence.date}H-NEXTで見れるAVジャンルまとめ`}
      description={`H-NEXTで見れるAVジャンルまとめ`}
      keyword={fixedSentence.keywords}
      url={`${fixedSentence.url}/genre`}
      type="article"
    >
      <h1 className="text-xl sm:text-2xl text-gray-600">{`${fixedSentence.date}H-NEXTで見れる、AVジャンルまとめ【${genreList.length}件】`}</h1>
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
        {genreList.map((content) => {
          return (
            <div key={content.genreName}>
              <Link href={`/genre/${content.pageUrl}`}>
                <a className="text-blue-500 hover:opacity-90 border-b border-blue-500">
                  {content.genreName}
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

export default Genre;