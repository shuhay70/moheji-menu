"use client";

import Menubar from "../../components/Menubar";
import Head from "next/head";
import Link from "next/link";

const page = () => {
  return (
    <main

    // style={{
    //   backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // }}
    >
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
            ＜Toppings＞
          </div>
          <div className="border-t border-yellow-700 lg:my-4"></div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Mozzarella Cheese</p>
              <p>チーズ</p>
              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Rice cake </p>
              <p>おもち</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Perilla</p>
              <p>しそ</p>

              <p>220円</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Egg</p>
              <p>卵</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Noodle</p>
              <p>麺</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Red Pickled Ginger</p>
              <p>紅しょうが</p>

              <p>220円</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Garlic</p>
              <p>にんにく</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Green Onion</p>
              <p>ねぎ</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Shredded Dried Squid</p>
              <p>さきいか</p>

              <p>220円</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Corn</p>
              <p>コーン</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Butter</p>
              <p>バター</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Bean Sprouts </p>
              <p>もやし</p>

              <p>220円</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Dry seaweed </p>
              <p>刻みのり</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Natto</p>
              <p>納豆</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Mentaiko (Cod Roe)</p>
              <p>明太子</p>

              <p>220円</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Plum</p>
              <p>梅</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Chinese chive</p>
              <p>ニラ</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Curry Powder</p>
              <p>カレー粉</p>

              <p>220円</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Fresh Cream</p>
              <p>生クリーム</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">
                Green chili pepper and garlic pickled in soy sauce
              </p>
              <p>青唐醤油漬け</p>
              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Rice</p>
              <p>ライス</p>

              <p>220円</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Mushroom</p>
              <p>しめじ</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Potato</p>
              <p>ジャガイモ</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Kimuchi</p>
              <p>キムチ</p>

              <p>220円</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">salted fish guts</p>
              <p>塩辛</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Satsumaage(Fish Cake)</p>
              <p>さつま揚げ</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Kujo Green Onion </p>
              <p>九条ネギ</p>

              <p>220円</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Sliced Pork Libs </p>
              <p>豚バラ</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Ground Pork</p>
              <p>豚ひき肉</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Ground Chicken </p>
              <p>鶏ひき肉</p>

              <p>220円</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Nikumiso</p>
              <p>肉味噌</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Squid</p>
              <p>イカ</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Octopus</p>
              <p>タコ</p>

              <p>220円</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Shrimp</p>
              <p>エビ</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Clams</p>
              <p>アサリ</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Squid’s leg</p>
              <p>ゲソ</p>

              <p>220円</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Squid ink</p>
              <p>イカ墨</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Scallop</p>
              <p>ホタテ</p>

              <p>220円</p>
            </div>
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="font-bold">Beef sinew </p>
              <p>牛すじ</p>

              <p>220円</p>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:p-[15px]">
            <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
              <p className="lg:w-[200px] font-bold">Garlic Butter </p>
              <p>ガーリックバター</p>

              <p className="lg:w-[200px] pl-[25px]">220円</p>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="bg-white lg:ml-[150px] lg:mr-[138px] lg:p-[30px] mr-[40px] p-[20px]  w-[80%]"></p> */}
    </main>
  );
};

export default page;
