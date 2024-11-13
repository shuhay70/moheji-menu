"use client";

import Menubar from "../../components/Menubar";
import Head from "next/head";
import Link from "next/link";

const page = () => {
  return (
    <main
    // ヘッダーの高さに応じたパディングと全高に設定
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
          <div className="font-bold flex justify-center font-bold text-[20px]">
            ＜Drinks＞
          </div>
          <div className="border-t border-yellow-700 lg:my-4"></div>
          <div className="lg:flex lg:justify-between lg:mx-[30px]">
            <div>
              <div className="lg:w-[500px] ">
                <p className="lg:pt-[30px] font-bold pt-[40px]">＜Beer＞</p>
                <div className="lg:w-[490px] border-t border-gray-300 lg:my-2"></div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className="font-bold">ASAHI</p>
                  <p>アサヒ生</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">SAPPORO AKABOSHI</p>
                  <p>赤星</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">SAPPORO</p>
                  <p>サッポロ</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">ALL FREE （Non-alcoholic）</p>
                  <p>オールフリー</p>
                  <p>800yeyen</p>
                </div>
              </div>
              <div className="lg:w-[500px] ">
                <p className="lg:pt-[60px] font-bold pt-[50px]">
                  ＜Tokyo's Famous Specialties＞
                </p>
                <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>
                <div className="flex flex-col  lg:w-[470px] my-2">
                  <div className="flex justify-between">
                    <p className=" font-bold">HOPPY（White・Black）</p>
                    <p>ホッピー</p>
                    <p>800yen</p>
                  </div>
                  <Link
                    className="text-red-400 text-[12px] pt-[5px]"
                    href="https://en.hoppy-happy.com/whats-hoppy/"
                  >
                    WHAT'S HOPPY？👈
                  </Link>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">NAKA（A Glass With Shochu） </p>
                  <p>中</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">
                    SOTO(HOPPY Bottle)(White・Black）)
                  </p>
                  <p>外</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">Vice Sour </p>
                  <p>バイスサワー</p>
                  <p>800yen</p>
                </div>
                <div className="flex flex-col  lg:w-[470px] my-2">
                  <div className="flex justify-between">
                    <p className=" font-bold">Anzu Bo Sour </p>
                    <p>あんず棒サワー</p>
                    <p>800yen</p>
                  </div>
                  <p className="text-[12px] pt-[5px]">
                    *A whole frozen 'Anzu-bou' (apricot bar) is used! It
                    features a refreshing sweetness and a nostalgic flavor.
                  </p>
                </div>
                <div className="flex flex-col  lg:w-[470px] my-2">
                  <div className="flex justify-between">
                    <p className=" font-bold">Mulberry Tea Shochu Highball </p>
                    <p>くわ酎サワー</p>
                    <p>800yen</p>
                  </div>
                  <p className="text-[12px] pt-[5px]">
                    *Tsukishima specialty! The mild texture of Mulberry tea can
                    be enjoyed with a refreshing taste
                  </p>
                </div>
                <div className="flex flex-col  lg:w-[470px] my-2">
                  <div className="flex justify-between">
                    <p className=" font-bold">Denki Bran </p>
                    <p>電気ブラン</p>
                    <p>800yen</p>
                  </div>
                  <p className="text-[12px] pt-[5px]">
                    *It is a 45-degree alcohol liqueur that was born in Asakusa
                    about 150 years ago.
                  </p>
                </div>
                <div className="flex flex-col lg:w-[470px] my-2">
                  <div className="flex justify-between">
                    <p className=" font-bold">Inazuma Highball </p>
                    <p>稲妻ハイボール</p>
                    <p>800yen</p>
                  </div>
                  <p className="text-[12px] pt-[5px]">
                    * It is a sparkling drink made with 'Denki Bran'."Inazuma"
                    means "thunder".
                  </p>
                </div>
              </div>
              <div className="lg:w-[490px] ">
                <p className="pt-[60px] font-bold">
                  ＜Highball, Shochu Highball＞
                </p>
                <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>
                <div className="flex justify-between lg:w-[470px] my-1">
                  <p className="font-bold">Kaku Highball </p>
                  <p>角ハイボール</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">Yamazaki Highball </p>
                  <p>山崎ハイボール</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">Hakushu Highball </p>
                  <p>白州ハイボール</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">Roku Highball </p>
                  <p>六ハイボール</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">Lemon Sour </p>
                  <p>甘くないレモンサワー</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">Sweet Lemon Sour </p>
                  <p>ちょっと甘いレモンサワー</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">Citrus Sudachi Sour</p>
                  <p>すだちサワー</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">Yrosiku Sudachu Highball </p>
                  <p>よろしくすだ酎サワー</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">Grapefruit Sour</p>
                  <p>グレープフルーツサワー</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">Matcha Highball </p>
                  <p>抹茶ハイボール</p>
                  <p>800yen</p>
                </div>
                <div className="flex jyenstify-between lg:w-[470px] my-2">
                  <p className=" font-bold">Oolong Tea Highball </p>
                  <p>ウーロンハイ</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">・ Jasmine Tea Highball </p>
                  <p>ジャスミンハイ</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">Honey and Citron Sour </p>
                  <p>はちみつ柚サワー</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">Plum Sour </p>
                  <p>梅干しサワー</p>
                  <p>800yen</p>
                </div>
              </div>
            </div>
            <div>
              <div className="lg:w-[490px] ">
                <p className="lg:pt-[30px] font-bold pt-[50px]">＜Shochu＞</p>
                <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>
                <div className="flex justify-between lg:w-[470px] my-1">
                  <p className="font-bold">AMAKUSA（Wheat shochu）</p>
                  <p>天草</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">TAIMEI（Wheat shochu）</p>
                  <p>泰明</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">YAMANEKO（Potato shochu ）</p>
                  <p>山猫</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">KAWAGOE（potato shochu）</p>
                  <p>川越</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">SHICHIDA（Rice shochu）</p>
                  <p>七田</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">
                    YOROSHIKU SENMAN ARUBESHI（Potato shochu）
                  </p>
                  <p>よろしく千萬あるべし</p>
                  <p>800yen</p>
                </div>
              </div>
              <div className="lg:w-[300px] ">
                <p className="pt-[60px] font-bold">＜Fruit Liquor＞</p>
                <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>
                <div className="flex justify-between lg:w-[470px] my-1">
                  <p className="font-bold ">Ripe Peach Wine </p>
                  <p>鳳凰美田 完熟桃</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className="font-bold ">Satsuma Mandarin Wine </p>
                  <p>鳳凰美田 温州みかん</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className="font-bold ">Unfiltered Plum Wine </p>
                  <p>八海山にごり梅酒</p>
                  <p>800yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className="font-bold ">Plum Wine </p>
                  <p>山形正宗梅酒</p>
                  <p>800yen</p>
                </div>
              </div>
              <div className="lg:w-[490px] ">
                <p className="pt-[60px] font-bold">＜SAKE＞</p>
                <div className="w-[490px] border-t border-gray-300 my-2"></div>
                <div className="flex justify-between lg:w-[470px] my-1">
                  <p className=" font-bold">HAKURAKUSEI </p>
                  <p>伯楽星 特別純米</p>
                  <p>800円yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">MATSUMOTO </p>
                  <p>澤屋まつもと 吟醸</p>
                  <p>800円yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">KOKURYU </p>
                  <p>黒龍</p>
                  <p>800円yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">SENKIN </p>
                  <p>仙禽</p>
                  <p>800円yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className=" font-bold">何か</p>
                  <p>800円yen</p>
                </div>
              </div>
              <div className="lg:w-[490px] ">
                <p className="pt-[60px] font-bold">＜ソフトドリンク＞</p>
                <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>
                <div className="flex justify-between lg:w-[470px] my-1">
                  <p className="font-bold ">Oolong tea </p>
                  <p>ウーロン茶</p>
                  <p>800円yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className="font-bold ">Jasmine tea </p>
                  <p>ジャスミン茶</p>
                  <p>800円yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className="font-bold ">Calpico </p>
                  <p>カルピス</p>
                  <p>800円yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className="font-bold ">Orange juice </p>
                  <p>オレンジジュース</p>
                  <p>800円yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className="font-bold ">Ramune </p>
                  <p>ラムネ</p>
                  <p>800円yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className="font-bold ">Cola </p>
                  <p>コーラ</p>
                  <p>800円yen</p>
                </div>
                <div className="flex justify-between lg:w-[470px] my-2">
                  <p className="font-bold ">Ginger Ale </p>
                  <p>ジンジャーエール</p>
                  <p>800円yen</p>
                </div>
                <p className="w-[235px]  text-[12px] bg-red-300 rounded p-1">
                  Soft drinks are free for preschool children (excluding
                  carbonated drinks)
                </p>
              </div>
            </div>
          </div>
          <div className="font-bold flex justify-center font-bold text-[20px] lg:pt-[0px] pt-[70px]">
            ＜Desserts＞
          </div>
          <div className="border-t border-yellow-700 lg:my-4"></div>
          <div className="my-[10px]mx-[30px] lg:flex lg:justify-between ">
            <div>
              <div className="flex justify-between lg:w-[470px]  lg:my-2 my-[15px]">
                <div className="flex">
                  <p>Ice Cream With Soybean Flour And Brown Sugar Syrup</p>
                  <p className="font-bold lg:text-[15px] text-[10px] lg:pt-[0px] pt-[5px]">
                    （Vanilla・Matcha）
                  </p>
                  <p className="font-bold">黒蜜きなこアイス</p>
                </div>
                <p>560円yen</p>
              </div>
              <div className="flex  lg:w-[470px] flex-col lg:my-2 my-[15px]">
                <div className="flex justify-between">
                  <p>Red Bean Paste Roll</p>
                  <p className="font-bold">あんこ巻き</p>
                  <p>560円yen</p>
                </div>
                <p className="text-[12px] pt-[5px]">
                  * Made by rolling red bean paste in dough that is grilled on a
                  hot plate.
                </p>
                <p className="text-[12px]">
                  Ingredients: Dough, red bean paste, black syrup
                </p>
              </div>
              <div className="flex  lg:w-[470px] flex-col lg:my-2 my-[15px]">
                <div className="flex justify-between">
                  <p>Matcha Red Bean Paste Roll</p>
                  <p className="font-bold">抹茶あんこ巻き</p>
                  <p>560円yen</p>
                </div>
                <p className="text-[12px] pt-[5px]">
                  *Made by rolling red bean paste in matcha-flavored dough that
                  is grilled on a hot plate.
                </p>
                <p className="text-[12px]">
                  Ingredients: Dough ( matcha-flavored), red bean paste, black
                  syrup
                </p>
              </div>
            </div>

            <div className="lg:mx-[30px]">
              <div className="flex  lg:w-[470px] flex-col lg:my-2 my-[15px]">
                <div className="flex justify-between">
                  <p>Rice cake with red bean paste</p>
                  <p className="font-bold">鉄板あんこもち</p>
                  <p>560円yen</p>
                </div>
                <p className="text-[12px] pt-[5px]">
                  Ingredients: Mochi, red bean paste, fresh cream, butter
                </p>
              </div>
              <div className="flex justify-between lg:w-[470px]  lg:my-2 my-[15px]">
                <div className="flex ">
                  <p>Ice cream topping </p>
                  <p className="font-bold lg:text-[15px] text-[10px] lg:pt-[0px] pt-[5px]">
                    （Vanilla・Matcha）
                  </p>
                  <p className="font-bold">トッピングアイス</p>
                </div>
                <p>560円yen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="bg-white lg:ml-[150px] lg:mr-[138px] lg:p-[30px] mr-[40px] p-[20px]  w-[80%]"></p> */}
    </main>
  );
};

export default page;
