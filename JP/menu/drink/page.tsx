// "use client";

// import Menubar from "../../components/Menubar";
// import Head from "next/head";
// import Link from "next/link";

// const page = () => {
//   return (
//     <main
//     // ヘッダーの高さに応じたパディングと全高に設定
//     // style={{
//     //   backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
//     //   backgroundSize: "cover",
//     //   backgroundPosition: "center",
//     // }}
//     >
//       <div
//         className="scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll bg-white"
//         style={{
//           backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <Menubar />
//         <div className="w-[80%] bg-white p-[25px] pb-[25px] mb-[30px] mx-auto">
//           <div className="font-bold flex justify-center font-bold text-[20px]">
//             ＜お飲み物＞
//           </div>
//           <div className="border-t border-yellow-700 lg:my-4"></div>
//           <div className="lg:flex lg:justify-between lg:mx-[30px]">
//             <div>
//               <div className="lg:w-[500px] ">
//                 <p className="lg:pt-[30px] font-bold pt-[40px]">＜ビール＞</p>
//                 <div className="lg:w-[490px] border-t border-gray-300 lg:my-2"></div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className="font-bold">アサヒ生</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">サッポロ赤星</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">オールフリー</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">オールフリー</p>
//                   <p>800円</p>
//                 </div>
//               </div>
//               <div className="lg:w-[500px] ">
//                 <p className="lg:pt-[60px] font-bold pt-[50px]">＜東京名物＞</p>
//                 <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>
//                 <div className="flex flex-col  lg:w-[470px] my-2">
//                   <div className="flex justify-between">
//                     <p className=" font-bold">ホッピー（白・黒）</p>
//                     <p>800円</p>
//                   </div>
//                   <Link
//                     className="text-red-400 text-[12px] pt-[5px]"
//                     href="https://tanoshiiosake.jp/10404"
//                   >
//                     ホッピーとは？👈
//                   </Link>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">中</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">外（白・黒）</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">オリジナルバイスサワー</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex flex-col  lg:w-[470px] my-2">
//                   <div className="flex justify-between">
//                     <p className=" font-bold">あんず棒サワー</p>
//                     <p>800円</p>
//                   </div>
//                   <p className="text-[12px] pt-[5px]">
//                     *凍らせた「あんず棒」を丸々1本使用！爽やかな甘さと懐かしい味わいが特徴。
//                   </p>
//                 </div>
//                 <div className="flex flex-col  lg:w-[470px] my-2">
//                   <div className="flex justify-between">
//                     <p className=" font-bold">くわ酎サワー</p>
//                     <p>800円</p>
//                   </div>
//                   <p className="text-[12px] pt-[5px]">
//                     *月島名物！くわ茶のまろやかな口当たりがさっぱり楽しめます。
//                   </p>
//                 </div>
//                 <div className="flex flex-col  lg:w-[470px] my-2">
//                   <div className="flex justify-between">
//                     <p className=" font-bold">電気ブラン</p>
//                     <p>800円</p>
//                   </div>
//                   <p className="text-[12px] pt-[5px]">
//                     *明治時代に浅草で生まれたアルコール45度のリキュールです。
//                   </p>
//                 </div>
//                 <div className="flex flex-col lg:w-[470px] my-2">
//                   <div className="flex justify-between">
//                     <p className=" font-bold">稲妻ハイボール</p>
//                     <p>800円</p>
//                   </div>
//                   <p className="text-[12px] pt-[5px]">
//                     * 「電気ブラン」の炭酸割りです。
//                   </p>
//                 </div>
//               </div>
//               <div className="lg:w-[490px] ">
//                 <p className="pt-[60px] font-bold">＜ハイボール・酎ハイ＞</p>
//                 <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>
//                 <div className="flex justify-between lg:w-[470px] my-1">
//                   <p className="font-bold">角ハイボール</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">山崎ハイボール</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">白州ハイボール</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">六ハイボール</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">甘くない生レモンサワー</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">ちょっと甘いレモンサワー</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">すだちサワー</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">よろしくすだ酎サワー</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">グレープフルーツサワー</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">自家製抹茶ハイ</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">ウーロンハイ</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">ジャスミンハイ</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">はちみつ柚子サワー</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">梅干しサワー</p>
//                   <p>800円</p>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="lg:w-[490px] ">
//                 <p className="lg:pt-[30px] font-bold pt-[50px]">＜焼酎＞</p>
//                 <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>
//                 <div className="flex justify-between lg:w-[470px] my-1">
//                   <p className="font-bold">天草（麦）</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">泰明（麦）</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">山ねこ（芋）</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">川越（芋）</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">七田（米）</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">よろしく千萬あるべし（米）</p>
//                   <p>800円</p>
//                 </div>
//               </div>
//               <div className="lg:w-[300px] ">
//                 <p className="pt-[60px] font-bold">＜果実酒＞</p>
//                 <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>
//                 <div className="flex justify-between lg:w-[470px] my-1">
//                   <p className="font-bold ">鳳凰美田 完熟桃</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">鳳凰美田 温州みかん</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">八海山にごり梅酒</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">山形正宗梅酒</p>
//                   <p>800円</p>
//                 </div>
//               </div>
//               <div className="lg:w-[490px] ">
//                 <p className="pt-[60px] font-bold">＜日本酒＞</p>
//                 <div className="w-[490px] border-t border-gray-300 my-2"></div>
//                 <div className="flex justify-between lg:w-[470px] my-1">
//                   <p className="font-bold ">伯楽星 特別純米</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">澤屋まつもと 吟醸</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">黒龍</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">何か</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">何か</p>
//                   <p>800円</p>
//                 </div>
//               </div>
//               <div className="lg:w-[490px] ">
//                 <p className="pt-[60px] font-bold">＜ソフトドリンク＞</p>
//                 <div className="lg:w-[490px] border-t border-gray-300 my-2"></div>
//                 <div className="flex justify-between lg:w-[470px] my-1">
//                   <p className="font-bold ">ウーロン茶</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">ジャスミン茶</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">カルピス</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">オレンジジュース</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">ラムネ</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">コーラ</p>
//                   <p>800円</p>
//                 </div>
//                 <div className="flex justify-between lg:w-[470px] my-2">
//                   <p className=" font-bold">ジンジャーエール</p>
//                   <p>800円</p>
//                 </div>
//                 <p className="w-[235px]  text-[12px] bg-red-300 rounded p-1">
//                   ソフトドリンク未就学児無料（一部除く）
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="font-bold flex justify-center font-bold text-[20px] lg:pt-[0px] pt-[70px]">
//             ＜デザート＞
//           </div>
//           <div className="border-t border-yellow-700 lg:my-4"></div>
//           <div className="my-[10px]mx-[30px] lg:flex lg:justify-between ">
//             <div>
//               <div className="flex justify-between lg:w-[470px]  lg:my-2 my-[15px]">
//                 <div className="flex">
//                   <p className="font-bold">黒蜜きなこアイス</p>
//                   <p className="font-bold lg:text-[15px] text-[10px] lg:pt-[0px] pt-[5px]">
//                     （バニラ・抹茶）
//                   </p>
//                 </div>
//                 <p>560円</p>
//               </div>
//               <div className="flex  lg:w-[470px] flex-col lg:my-2 my-[15px]">
//                 <div className="flex justify-between">
//                   <p className="font-bold">あんこ巻き</p>
//                   <p>560円</p>
//                 </div>
//                 <p className="text-[12px] pt-[5px]">
//                   *鉄板で焼いた天生地であんこを巻いた料理です。
//                 </p>
//                 <p className="text-[12px]">
//                   具材：天生地、あんこ、黒蜜（お好みで）
//                 </p>
//               </div>
//               <div className="flex  lg:w-[470px] flex-col lg:my-2 my-[15px]">
//                 <div className="flex justify-between">
//                   <p className="font-bold">抹茶あんこ巻き</p>
//                   <p>560円</p>
//                 </div>
//                 <p className="text-[12px] pt-[5px]">
//                   *鉄板で焼いた抹茶味の天生地であんこを巻いた料理です。
//                 </p>
//                 <p className="text-[12px]">
//                   具材：天生地（抹茶味）、あんこ、黒蜜（お好みで）
//                 </p>
//               </div>
//             </div>

//             <div className="lg:mx-[30px]">
//               <div className="flex  lg:w-[470px] flex-col lg:my-2 my-[15px]">
//                 <div className="flex justify-between">
//                   <p className="font-bold">鉄板あんこもち</p>
//                   <p>560円</p>
//                 </div>
//                 <p className="text-[12px] pt-[5px]">
//                   具材：おもち、あんこ、生クリーム、バター
//                 </p>
//               </div>
//               <div className="flex justify-between lg:w-[470px]  lg:my-2 my-[15px]">
//                 <div className="flex ">
//                   <p className="font-bold">トッピングアイス</p>
//                   <p className="font-bold lg:text-[15px] text-[10px] lg:pt-[0px] pt-[5px]">
//                     （バニラ・抹茶）
//                   </p>
//                 </div>
//                 <p>560円</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <p className="bg-white lg:ml-[150px] lg:mr-[138px] lg:p-[30px] mr-[40px] p-[20px]  w-[80%]"></p> */}
//     </main>
//   );
// };

// export default page;
