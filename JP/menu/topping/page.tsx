// "use client";

// import Menubar from "../../components/Menubar";
// import Head from "next/head";
// import Link from "next/link";

// const page = () => {
//   return (
//     <main

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
//           <div className="font-bold flex justify-center  text-[20px]">
//             ＜トッピング＞
//           </div>
//           <div className="border-t border-yellow-700 lg:my-4"></div>
//           <div className="lg:flex lg:justify-between lg:p-[15px]">
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">チーズ</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">おもち</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">しそ</p>
//               <p>220円</p>
//             </div>
//           </div>
//           <div className="lg:flex lg:justify-between lg:p-[15px]">
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">卵</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">麺</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">紅しょうが</p>
//               <p>220円</p>
//             </div>
//           </div>
//           <div className="lg:flex lg:justify-between lg:p-[15px]">
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">にんにく</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">ねぎ</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">切りいか</p>
//               <p>220円</p>
//             </div>
//           </div>
//           <div className="lg:flex lg:justify-between lg:p-[15px]">
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">コーン</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">バター</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">もやし</p>
//               <p>220円</p>
//             </div>
//           </div>
//           <div className="lg:flex lg:justify-between lg:p-[15px]">
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">刻みのり</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">納豆</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">明太子</p>
//               <p>220円</p>
//             </div>
//           </div>
//           <div className="lg:flex lg:justify-between lg:p-[15px]">
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">梅干し</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">ニラ</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">特製カレー粉</p>
//               <p>220円</p>
//             </div>
//           </div>
//           <div className="lg:flex lg:justify-between lg:p-[15px]">
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">生クリーム</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">青唐醤油漬け</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">ごはん</p>
//               <p>220円</p>
//             </div>
//           </div>
//           <div className="lg:flex lg:justify-between lg:p-[15px]">
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">しめじ</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">ジャガイモ</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">キムチ</p>
//               <p>220円</p>
//             </div>
//           </div>
//           <div className="lg:flex lg:justify-between lg:p-[15px]">
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">イカの塩辛</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">さつま揚げ</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">九条ネギ</p>
//               <p>220円</p>
//             </div>
//           </div>
//           <div className="lg:flex lg:justify-between lg:p-[15px]">
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">豚バラ</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">豚ひき肉</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">鶏ひき肉</p>
//               <p>220円</p>
//             </div>
//           </div>
//           <div className="lg:flex lg:justify-between lg:p-[15px]">
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">肉味噌</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">いか</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">タコ</p>
//               <p>220円</p>
//             </div>
//           </div>
//           <div className="lg:flex lg:justify-between lg:p-[15px]">
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">えび</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">アサリ</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">ゲソ</p>
//               <p>220円</p>
//             </div>
//           </div>
//           <div className="lg:flex lg:justify-between lg:p-[15px]">
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">いか墨</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">ホタテ</p>
//               <p>220円</p>
//             </div>
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="font-bold">牛すじ</p>
//               <p>220円</p>
//             </div>
//           </div>
//           <div className="lg:flex lg:justify-between lg:p-[15px]">
//             <div className="flex justify-between lg:w-[180px] lg:py-[0px] lg:px-[7px] px-[15px] py-[5px]">
//               <p className="lg:w-[200px] font-bold">ガーリックバター</p>
//               <p className="lg:w-[200px] pl-[25px]">220円</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <p className="bg-white lg:ml-[150px] lg:mr-[138px] lg:p-[30px] mr-[40px] p-[20px]  w-[80%]"></p> */}
//     </main>
//   );
// };

// export default page;
