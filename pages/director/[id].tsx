import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import ReviewStar from "../../components/ReviewStar";
import { Datas } from "../../lib/Datas";
import { directorList } from "../../lib/directorList";
import { fixedSentence } from "../../lib/fixedSentence";

type Props = {
  Data: any;
};

const Post: NextPage<Props> = ({ Data }) => {
  if (!Data) {
    return <div>Loading...</div>;
  }

  // URLに合わせて監督作品を抽出
  let directorAvList = Datas.filter((item) => {
    if (item.director == Data.directorName) {
      return item;
    } else if (item.director.length > 1) {
      for (let i = 0; i < item.director.length; i++) {
        if (item.director[i] == Data.directorName) {
          return item;
        }
      }
    }
  });

  // 評価順に並び替え
  directorAvList.sort(function (a, b) {
    if (a.aveReviewPoint < b.aveReviewPoint) return 1;
    if (a.aveReviewPoint > b.aveReviewPoint) return -1;
    return 0;
  });

  return (
    <Layout
      title={`${fixedSentence.date}H-NEXTで見れる『${Data.directorName}』の監督作品まとめ`}
      description={`H-NEXTで見れる${Data.directorName}の監督作品まとめ`}
      keyword={fixedSentence.keywords}
      url={`${fixedSentence.url}/director/${decodeURI(Data.directorName)}`}
      type="article"
    >
      <h1 className="text-xl sm:text-2xl text-gray-600">{`${fixedSentence.date}H-NEXTで見れる『${Data.directorName}』の監督作品まとめ【${directorAvList.length}件】`}</h1>
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
      <div className="flex items-center w-11/12">
        <div className="flex space-x-4">
          <Link href="/">
            <a>ホーム</a>
          </Link>
        </div>
        <div className="px-1">{`>`}</div>
        <div className="flex space-x-4">
          <Link href="/director">
            <a>AV監督一覧</a>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 w-11/12">
        {directorAvList.map((content, index) => {
          return (
            <div key={content.forUrlNumber}>
              <div className="flex flex-col justify-center items-center">
                <span className="inline-block py-2 px-8 text-xl text-white bg-pink-400 rounded">{`${
                  index + 1
                } / ${directorAvList.length}`}</span>
              </div>
              <div className="pt-4">
                <Link href={`/posts/${content.forUrlNumber}`} passHref>
                  <a>
                    <Image
                      src={`/package_images/${content.imgName}`}
                      alt={content.title}
                      width={828}
                      height={466}
                      objectFit="contain"
                    />
                  </a>
                </Link>
              </div>
              <h3 className="py-1 truncate">{content.title}</h3>
              <ReviewStar star={content.aveReviewPoint} />
              {content.paid == "----" ? (
                <p className="my-2">
                  <span className="py-1 px-2 text-white bg-green-600 rounded">
                    {content.ondemand}
                  </span>
                </p>
              ) : (
                <p className="my-2 ">
                  <span className="py-1 px-2 text-white bg-gray-400 rounded">
                    {content.ondemand}
                  </span>
                  <span className="pl-2">{content.paid}</span>
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Post;

export async function getServerSidePaths() {
  const paths = directorList.map((director) => {
    return {
      params: {
        id: String(director.pageUrl),
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
  const Data = directorList.find(function (director) {
    return director.pageUrl === params.id;
  });

  return {
    props: {
      Data,
      Datas,
    },
  };
}
