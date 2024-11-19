"use client";

import Menubar from "../../components/Menubar";
import Head from "next/head";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <div
        className="scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll bg-white"
        style={{
          backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Menubar />
        <div className="w-[80%] bg-white p-[25px] pb-[25px] mb-[30px] mx-auto">
          <div className="font-bold flex justify-center  text-[20px]">
            ＜Appetizer＞
          </div>
          <div className="border-t border-yellow-700 lg:my-4"></div>
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-[320px]  px-[6px]">
              <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold">青唐醤油漬け</p>
                <p>1500円</p>
              </div>
              <div className="flex">
                <p>具材：キャベツ、天かす、桜えび、卵、天生地、豚</p>
              </div>
            </div>
            <div className="lg:w-[350px] px-[6px]">
              <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold">力士肉味噌きゅうり</p>
                <p>1500円</p>
              </div>
              <div className="flex">
                <p>
                  具材：キャベツ、天かす、桜えび、卵、天生地、えび、タコ、ホタテ、いか、げそ
                </p>
              </div>
            </div>
            <div className="lg:w-[350px]  px-[6px] ">
              <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold lg:w-auto w-[170px]">
                  たたききゅうりの梅わさび和え
                </p>
                <p className="lg:w-auto w-[60px]">1500円</p>
              </div>
              <div className="flex">
                <p>
                  具材：
                  キャベツ、天かす、桜えび、卵、天生地、牛すじ、ごぼう、こんにゃく、
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:pt-[50px]">
            <div className="lg:w-[350px]  px-[6px]">
              <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold">キムチ</p>
                <p>1500円</p>
              </div>
              <div className="flex">
                <p>
                  具材：キャベツ、天かす、桜えび、卵、天生地、豚、牛すじ、イカ、
                </p>
              </div>
            </div>
            <div className="lg:w-[350px] px-[6px]">
              <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold">チャンジャ</p>
                <p>1500円</p>
              </div>
              <div className="flex">
                <p>具材：キャベツ、天かす、桜えび、卵、天生地、麺、豚、</p>
              </div>
            </div>
            <div className="lg:w-[350px]  px-[6px] ">
              <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold">炙り明太子</p>
                <p>1500円</p>
              </div>
              <div className="flex">
                <p>具材： キャベツ、天かす、桜えび、卵、天生地、</p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:pt-[50px]">
            <div className="lg:w-[350px]  px-[6px]">
              <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold">こぼれしらす冷奴</p>
                <p>1500円</p>
              </div>
              <div className="flex">
                <p>
                  具材：キャベツ、天かす、桜えび、卵、天生地、豚、牛すじ、イカ、
                </p>
              </div>
            </div>
            <div className="lg:w-[350px] px-[6px]">
              <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold">もずくとろろ</p>
                <p>1500円</p>
              </div>
              <div className="flex">
                <p>具材：キャベツ、天かす、桜えび、卵、天生地、麺、豚、</p>
              </div>
            </div>
            <div className="lg:w-[350px]  px-[6px] ">
              <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold">和牛すじ煮</p>
                <p>1500円</p>
              </div>
              <div className="flex">
                <p>具材： キャベツ、天かす、桜えび、卵、天生地、</p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:pt-[50px]">
            <div className="lg:w-[350px]  px-[6px]">
              <div className="flex justify-between pb-[10px] pr-[10px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold lg:w-auto w-[170px]">
                  冷やしトマトと玉ねぎサラダ
                </p>
                <p className="lg:w-auto w-[60px] ">1500円</p>
              </div>
              <div className="flex">
                <p>
                  具材：キャベツ、天かす、桜えび、卵、天生地、豚、牛すじ、イカ、
                </p>
              </div>
            </div>
          </div>
          <div className="font-bold flex justify-center pt-[90px]  text-[20px]">
            ＜鉄板焼き＞
          </div>
          <div className="border-t border-yellow-700 lg:my-4"></div>
          <div className="lg:flex  lg:justify-between">
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px]">
              <div className="flex justify-between  lg:w-[300px] lg:pt-[0px] pt-[20px]">
                <p className="font-bold">にんにくホイル焼き</p>
                <p>1280円</p>
              </div>
              <div className="flex">
                <p>具材： にんにく、ごま油、</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[0px] pt-[20px]">
              <div className="flex justify-between ">
                <p className="font-bold">塩辛じゃがバター</p>
                <p>1280円</p>
              </div>
              <div className="flex">
                <p>具材： 塩辛、ジャガイモ、バター</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[0px] pt-[20px]">
              <div className="flex justify-between">
                <p className="font-bold">げそ焼き</p>
                <p>1280円</p>
              </div>
              <div className="flex">
                <p>具材： イカゲソ、もやし、バター</p>
              </div>
            </div>
          </div>
          <div className="lg:flex ">
            <div className="lg:flex lg:flex-col lg:w-[350px] lg:px-[6px] lg:pt-[50px] lg:mr-[28px] pt-[20px]">
              <div className="flex justify-between ">
                <p className="font-bold">きの子盛りバター</p>
                <p>1280円</p>
              </div>
              <div className="flex">
                <p>具材： えのき、しめじ、しいたけ、バター</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] pt-[20px]">
              <div className="flex justify-between ">
                <p className="font-bold">鳥軟骨焼き</p>
                <p>1280円</p>
              </div>
              <div className="flex">
                <p>具材：鳥軟骨（ヒザ軟骨・ヤゲン軟骨）、もやし、</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[390px]  lg:pr-[6px] lg:pt-[50px]  lg:pl-[40px] pt-[20px]">
              <div className="flex justify-between">
                <p className="font-bold">鳥もも焼き</p>
                <p>1280円</p>
              </div>
              <div className="flex">
                <p>具材： 鳥もも、長ネギ</p>
              </div>
            </div>
          </div>
          <div className="lg:flex ">
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] lg:mr-[28px] pt-[20px]">
              <div className="flex justify-between ">
                <p className="font-bold">鳥せせり焼き</p>
                <p>1280円</p>
              </div>
              <div className="lg:flex">
                <p>具材：鳥せせり、もやし、大根おろし</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] pt-[20px]">
              <div className="flex justify-between ">
                <p className="font-bold">とん平焼き</p>
                <p>1280円</p>
              </div>
              <div className="flex">
                <p>具材： 豚、天かす、桜えび、九条ネギ、卵</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[390px]  lg:pr-[6px] lg:pt-[50px]  lg:pl-[40px] pt-[20px]">
              <div className="flex justify-between">
                <p className="font-bold lg:w-auto w-[200px]">
                  カジキマグロのガーリックステーキ
                </p>
                <p>1280円</p>
              </div>
              <div className="flex">
                <p>具材： カジキマグロ、もやし、にんにく、大根おろし</p>
              </div>
            </div>
          </div>
          <div className="lg:flex ">
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] lg:mr-[28px] pt-[20px]">
              <div className="flex justify-between ">
                <div className="flex">
                  <p className="font-bold">海鮮アヒージョ</p>
                  <p className="font-bold text-[12px] pt-[5px]">
                    （バケット付き）
                  </p>
                </div>
                <p>1280円</p>
              </div>
              <div className="flex">
                <p>
                  具材：イカ、エビ、タコ、ホタテ、チャンジャ、鷹の爪、長ネギ、にんにく、バター、オリーブオイル
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:w-[350px]  lg:px-[6px] lg:pt-[50px] pt-[20px]">
              <div className="flex justify-between">
                <div className="flex">
                  <p className="font-bold lg:text-[14px] text-[13px]">
                    明太子しいたけアヒージョ
                  </p>
                  <p className="font-bold lg:text-[12px] text-[8px] pt-[4px]">
                    （バケット付き）
                  </p>
                </div>
                <p>1280円</p>
              </div>
              <div className="flex">
                <p>具材：明太子、しいたけ、にんにく、バター、オリーブオイル</p>
              </div>
            </div>
            <div className="lg:flex lg:flex-collg:w-[390px] lg:pr-[6px] lg:pt-[50px] lg:pl-[40px] pt-[20px]">
              <div className="flex justify-between ">
                <p className="font-bold">追加バケット（４つ）</p>
                <p>1280円</p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </main>
  );
};

export default page;
