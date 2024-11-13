// "use client";

// import Menubar from "../../components/Menubar";
// import Head from "next/head";
// import Link from "next/link";

// const page = () => {
//   return (
//     <main>
//       <div
//         className="scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll  bg-white "
//         style={{
//           backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <Menubar />
//         <div className="w-[80%] bg-white p-[25px] pb-[25px] mb-[30px] mx-auto">
//           <div className="lg:flex">
//             <div className="  lg:px-[40px] lg:pb-[30px]">
//               <div className="flex justify-center">
//                 <img
//                   src="/image/menmochi.jpg"
//                   className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px] "
//                   alt="mennmochi"
//                 />
//               </div>
//               <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
//                 明太子もちもんじゃ
//               </p>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
//                 クリーミーなだしが明太子の美味しさと調和する人気NO.1もんじゃ！モッツァレラチーズトッピングを加えると風味が増して更に美味しくなります！！
//               </p>
//               <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
//                 具材：キャベツ、天かす（海老入り）出汁、生クリーム、明太子、おもち
//               </p>
//             </div>
//             <div className="lg:px-[40px] lg:pb-[30px]">
//               <div className="flex justify-center">
//                 <img
//                   src="/image/kaisen.jpg"
//                   className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
//                   alt="mennmochi"
//                 />
//               </div>
//               <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
//                 海鮮もんじゃ
//               </p>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
//                 築地・豊洲で150年続く、水産仲卸直営のもんじゃ店だからこそ出せる最高峰の味です!海鮮は全て築地、豊洲から毎朝仕入れています！
//               </p>
//               <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
//                 具材：キャベツ、天かす（海老入り）出汁、さきいか、イカ、たこ、えび、塩辛、ホタテ
//               </p>
//             </div>
//             <div className="lg:px-[40px] lg:pb-[30px] ">
//               <div className="flex justify-center">
//                 <img
//                   src="/image/ikasumi.jpg"
//                   className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
//                   alt="mennmochi"
//                 />
//               </div>
//               <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
//                 イカ墨もんじゃ
//               </p>

//               <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
//                 良い意味で期待を裏切られた！と一度食べると病みつきになる事請け合いのもんじゃです!モッツァレラチーズトッピングで更に美味しくなります！！
//               </p>
//               <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
//                 具材：キャベツ、天かす（海老入り）出汁、生クリーム、さきいか、イカ墨、げそ、刻みニンニク、にんにくの芽、長ネギ、バター
//               </p>
//             </div>
//           </div>
//           <div className="lg:flex">
//             <div className="lg:px-[40px] lg:pb-[30px]">
//               <div className="flex justify-center">
//                 <img
//                   src="/image/mensiso.jpg"
//                   className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
//                   alt="mennmochi"
//                 />
//               </div>
//               <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
//                 明太子しそもんじゃ
//               </p>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
//                 大葉の爽やかな風味が、明太子の質の良さを更に引き立て、味わい深くしてくれるもんじゃです！
//               </p>
//               <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
//                 具材：キャベツ、天かす（海老入り）出汁、生クリーム、さきいか、明太子、しそ
//               </p>
//             </div>
//             <div className="lg:px-[40px] lg:pb-[30px]">
//               <div className="flex justify-center">
//                 <img
//                   src="/image/butakimu.jpg"
//                   className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
//                   alt="mennmochi"
//                 />
//               </div>
//               <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
//                 豚キムチもんじゃ
//               </p>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
//                 選りすぐりのキムチと特製ダレが合わさり、定番のもんじゃも一味違う美味しさに仕上がっています！チーズ、ニラ、コーンなどのトッピングもお好みでどうぞ！！{" "}
//               </p>
//               <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
//                 具材：キャベツ、天かす（海老入り）出汁、さきいか、豚、キムチ、ニラ、もやし、刻みニンニク
//               </p>
//             </div>
//             <div className="lg:px-[40px] lg:pb-[30px]">
//               <div className="flex justify-center">
//                 <img
//                   src="/image/umetako.jpg"
//                   className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
//                   alt="mennmochi"
//                 />
//               </div>
//               <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
//                 梅タコ豚のりもんじゃ
//               </p>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
//                 梅の酸味と豚肉の旨味にタコの食感がアクセントに加わり、海苔と大葉が風味を良くしてくれる、今の季節にピッタリのもんじゃです！
//               </p>
//               <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
//                 具材：キャベツ、天かす（海老入り）出汁、さきいか、豚、タコ、梅、のり、しそ
//               </p>
//             </div>
//           </div>
//           <div className="lg:flex">
//             <div className="lg:px-[40px] lg:pb-[30px]">
//               <div className="flex justify-center">
//                 <img
//                   src="/image/oyako.jpg"
//                   className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
//                   alt="mennmochi"
//                 />
//               </div>
//               <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
//                 親子もんじゃ
//               </p>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
//                 鶏肉の旨味と玉ねぎの甘みを、玉子が包み込む、食べていてホッとする和風の味わいのもんじゃです。{" "}
//               </p>
//               <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
//                 具材：キャベツ、天かす（海老入り）出汁、さきいか、鶏ひき肉、玉ねぎ、ネギ、のり、卵
//               </p>
//             </div>
//             <div className="lg:px-[40px] lg:pb-[30px]">
//               <div className="flex justify-center">
//                 <img
//                   src="/image/gyusuzi.jpg"
//                   className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
//                   alt="mennmochi"
//                 />
//               </div>
//               <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
//                 牛すじカレーもんじゃ
//               </p>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
//                 カレーのスパイシーな風味に、トロトロに煮込まれた牛すじの旨味が合わさりたまらない美味しさです！！{" "}
//               </p>
//               <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
//                 具材：キャベツ、天かす（海老入り）出汁、生クリーム、さきいか、牛すじ、カレー粉、ごぼう、こんにゃく、しめじ
//               </p>
//             </div>
//             <div className="lg:px-[40px] lg:pb-[30px]">
//               <div className="flex justify-center">
//                 <img
//                   src="/image/butanira.jpg"
//                   className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
//                   alt="mennmochi"
//                 />
//               </div>
//               <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
//                 豚ニラたまもんじゃ
//               </p>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
//                 ニラとニンニクの良い風味が引き立ち、玉子の濃厚な味わいで食欲がどんどん増してくるもんじゃです！{" "}
//               </p>
//               <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
//                 具材：キャベツ、天かす（海老入り）出汁、さきいか、豚、ニラ、にんにく、卵
//               </p>
//             </div>
//           </div>
//           <div className="lg:flex">
//             <div className="lg:px-[40px] lg:pb-[30px]">
//               <div className="flex justify-center">
//                 <img
//                   src="/image/gomoku.jpg"
//                   className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
//                   alt="mennmochi"
//                 />
//               </div>
//               <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
//                 五目もんじゃ
//               </p>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
//                 海鮮と豚肉、シャキシャキとした野菜が食感の良い贅沢なもんじゃです！
//               </p>
//               <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
//                 具材：キャベツ、天かす（海老入り）出汁、さきいか、豚、鶏肉、げそ、もち、さつま揚げ、麺、紅生姜、コーン
//               </p>
//             </div>
//             <div className="lg:px-[40px] lg:pb-[30px]">
//               <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
//                 素もんじゃ
//               </p>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
//                 お好みの具材をトッピングしてお楽しみください！
//               </p>
//               <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
//               <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
//                 具材：キャベツ、天かす（海老入り）、さきいか、出汁
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>{" "}
//     </main>
//   );
// };

// export default page;
