import { Datas } from "./Datas";

//シリーズの抽出
let tmpList = [];
for (let i = 0; i < Datas.length; i += 1) {
  for (let j = 0; j < Datas[i].series.length; j = j + 1) {
    tmpList.push(Datas[i].series[j]);
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
    seriesName: name,
    pageUrl: decodeURI(
      name
        .substr(0, 8)
        .replace(
          /○|〇|●|×|★|＆|◆|【|】|♀|「|」|！|（|）|・|〜|『|』|-| |。|ー|/g,
          ""
        )
    ),
  };
});

export const seriesList = newResult;
