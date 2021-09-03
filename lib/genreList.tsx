import { Datas } from "./Datas";

//ジャンルの抽出
let tmpList = [];
for (let i = 0; i < Datas.length; i += 1) {
  for (let j = 0; j < Datas[i].genre.length; j = j + 1) {
    tmpList.push(Datas[i].genre[j]);
  }
}

const set = new Set(tmpList); //重複の削除（setオブジェクト化）
const arrayList = Array.from(set); //setオブジェクトを配列化

//Nodataの削除
let arrayName = arrayList.filter((item) => {
  return item != "----";
});

// pageUrlオブジェクトを追加
const newResult = arrayName.map((name) => {
  return {
    genreName: name,
    pageUrl: decodeURI(
      name
        .substr(0, 8)
        .replace(
          /○|〇|●|×|★|＆|◆|【|】|♀|「|」|！|（|）|・|〜|『|』|-| |。|ー|.|’|、|…|％|～|？|☆|‘/g,
          ""
        )
    ),
  };
});

export const genreList = newResult;
