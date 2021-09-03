import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import ReviewStar from "../../components/ReviewStar";
import { Datas } from "../../lib/Datas";
import { fixedSentence } from "../../lib/fixedSentence";

type Props = {
  Data: any;
};

const Post: NextPage<Props> = ({ Data }) => {
  if (!Data) {
    return <div>Loading...</div>;
  }

  const appealFlag = Data.aveReviewPoint;

  return (
    <Layout
      title={`${fixedSentence.date}H-NEXTで見れる「${Data.title}」`}
      description={`${fixedSentence.hnext}で${Data.title}は配信されてる？人気のAVをお得に見よう！`}
      keyword={fixedSentence.keywords}
      url={`${fixedSentence.url}/posts/${Data.forUrlNumber}`}
      type="article"
    >
      <div className="flex flex-col justify-center items-center w-11/12 sm:w-8/12">
        <h1 className="text-xl sm:text-2xl text-gray-600">{`${fixedSentence.date}${Data.title}`}</h1>
        {appealFlag > 4.0 && (
          <>
            <a
              className="mt-8 hover:opacity-80 cursor-pointer"
              href={fixedSentence.affiliateLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <div className="flex bg-yellow-100 rounded">
                <div className="flex flex-col justify-center items-center py-6 px-6 my-2 w-16 border-r border-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div className="py-6 px-6 my-2">{fixedSentence.comment}</div>
              </div>
            </a>
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
          </>
        )}
        <div className="py-8">
          <a
            className="hover:opacity-80 cursor-pointer"
            href={fixedSentence.affiliateLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Image
              src={`/package_images/${Data.imgName}`}
              alt={Data.title}
              width={828}
              height={466}
              objectFit="contain"
            />
          </a>
        </div>
        <div className="flex items-center w-full sm:px-4 pb-4 sm:pb-2">
          <div className="flex space-x-4">
            <Link href="/">
              <a>ホーム</a>
            </Link>
          </div>
          <div className="px-1">{`>`}</div>
          <div className="flex space-x-4">
            <Link href="/posts">
              <a>AV作品一覧</a>
            </Link>
          </div>
        </div>
        <div className="sm:flex sm:flex-1">
          <div className="sm:p-4 sm:w-1/2">
            <h2 className="text-xl">作品内容</h2>
            <p className="py-6 leading-relaxed">{Data.desc}</p>
          </div>
          <div className="sm:p-4 sm:w-1/2">
            <h2 className="text-xl">H-NEXTの配信データ</h2>
            <div className="grid grid-cols-2 gap-y-2 py-4">
              <div className="py-2 border-b border-gray-300">
                <span>評価</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                <ReviewStar star={Data.aveReviewPoint} />
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>視聴方法</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                <span className="pr-1">{Data.ondemand}</span>
                {Data.paid != "----" && (
                  <span className="pr-1">{`： ${Data.paid}`}</span>
                )}
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>女優</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                {Data.actress && Data.actress != "----"
                  ? Data.actress.map((data: string) => (
                      <span className="pr-1" key={data}>
                        <Link href={`/actress/${decodeURI(data)}`} passHref>
                          <a className="text-blue-500 hover:opacity-90 border-b border-blue-500">
                            {data}
                          </a>
                        </Link>
                      </span>
                    ))
                  : Data.actress.map((data: string) => (
                      <span className="pr-1" key={data}>
                        {data}
                      </span>
                    ))}
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>監督</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                {Data.director && Data.director != "----"
                  ? Data.director.map((data: string) => (
                      <span className="pr-1" key={data}>
                        <Link href={`/director/${decodeURI(data)}`} passHref>
                          <a className="text-blue-500 hover:opacity-90 border-b border-blue-500">
                            {data}
                          </a>
                        </Link>
                      </span>
                    ))
                  : Data.director.map((data: string) => (
                      <span className="pr-1" key={data}>
                        {data}
                      </span>
                    ))}
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>シリーズ</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                {Data.series && Data.series != "----"
                  ? Data.series.map((data: string) => (
                      <span className="pr-1" key={data}>
                        <Link href={`/series/${decodeURI(data)}`} passHref>
                          <a className="text-blue-500 hover:opacity-90 border-b border-blue-500">
                            {data}
                          </a>
                        </Link>
                      </span>
                    ))
                  : Data.series.map((data: string) => (
                      <span className="pr-1" key={data}>
                        {data}
                      </span>
                    ))}
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>メーカー</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                {Data.maker && Data.maker != "----"
                  ? Data.maker.map((data: string) => (
                      <span className="pr-1" key={data}>
                        <Link href={`/maker/${decodeURI(data)}`} passHref>
                          <a className="text-blue-500 hover:opacity-90 border-b border-blue-500">
                            {data}
                          </a>
                        </Link>
                      </span>
                    ))
                  : Data.maker.map((data: string) => (
                      <span className="pr-1" key={data}>
                        {data}
                      </span>
                    ))}
              </div>
              <div className="py-2 border-b border-gray-300">
                <span>ジャンル</span>
              </div>
              <div className="py-2 border-b border-gray-300">
                {Data.genre && Data.genre != "----"
                  ? Data.genre.map((data: string) => (
                      <span className="pr-1" key={data}>
                        <Link href={`/genre/${decodeURI(data)}`} passHref>
                          <a className="text-blue-500 hover:opacity-90 border-b border-blue-500">
                            {data}
                          </a>
                        </Link>
                      </span>
                    ))
                  : Data.genre.map((data: string) => (
                      <span className="pr-1" key={data}>
                        {data}
                      </span>
                    ))}
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </Layout>
  );
};

export default Post;

export async function getServerSidePaths() {
  const paths = Datas.map((Data) => {
    return {
      params: {
        id: String(Data.forUrlNumber),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export interface ParamsObj {
  id: string;
}

export async function getServerSideProps({ params }: { params: ParamsObj }) {
  const Data = Datas.find(function (Data) {
    return Data.forUrlNumber === params.id;
  });

  return {
    props: {
      Data,
      Datas,
    },
  };
}
