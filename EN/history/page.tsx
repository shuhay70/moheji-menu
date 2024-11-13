"use client";

import Menubar from "../components/Menubar";
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
        className="scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll  bg-white"
        style={{
          backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%] bg-white p-[25px] pb-[25px] mb-[30px] mx-auto mt-[30px]">
          <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pb-[0px] pb-[10px]">
            ＜The History of Monjayaki＞
          </p>
          <div className="lg:flex">
            <p className="lg:px-[25px]">
              Monja is a dish in which ingredients are mixed with flour that has
              been loosely dissolved in water, baked on a griddle, and eaten hot
              with a spatula for each person. The origin of monja dates back to
              the late Edo period (1603-1867), when it was sold as an affordable
              snack in front of a candy shop in Tsukishima. Around the 1950s,
              when food was scarce, simple monjayaki, made by dissolving udon
              flour and adding soy sauce and syrup, was widely popular among
              children. From the end of the Edo period to the Meiji era
              (1868-1912), when supplies were scarce, children who did not have
              easy access to paper and calligraphy tools would write letters on
              a griddle with dough made from wheat flour dissolved in water to
              teach and play with, hence the name "mojiyaki." The word "moji"
              turned to "monja" and changed to "monja . With the postwar
              economic growth, monja evolved by adding ingredients such as
              cabbage, corn and fried eggs, but at the same time, the number of
              dagashiya, which children had grown familiar with, declined
              dramatically. Several monjayaki stores sprang up in an attempt to
              preserve the taste familiar from childhood, and monjayaki has
              transformed into a snack for adults, and continues to this day.
              The essential ingredients for monjayaki are a teppan and a
              spatula. Monjayaki is usually eaten by scooping a small amount
              from the outside of the dough and pressing it against the teppan
              to char it, but nowadays there are so many different variations of
              ingredients that one can enjoy a variety of tastes and monja
              textures.
            </p>
            <img
              src="/image/rekisi.jpg"
              className="lg:h-[280px] lg:w-[280px] lg:p-[25px] lg:pt-[0px] pt-[15px]"
              alt="mennmochi"
            />
          </div>

          <div className="lg:w-[1100px] border-t border-gray-300 lg:my-[40px] my-[25px]"></div>
          <div className="lg:flex">
            <div className="lg:flex lg:flex-col">
              <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pb-[0px] pb-[10px]">
                ＜Why Make a "Dote" (Dough Ring)＞
              </p>
              <p className="lg:px-[25px]">
                When it comes to monjayaki, many people immediately think of the
                "dote" (a dough ring). But why is it necessary? Isn’t it the
                same if you just mix everything together? In fact, you can make
                monjayaki with or without the dote! The dote was originally
                invented as a "trick" to prevent the watery batter from spilling
                over the edge of the griddle. While modern griddles have raised
                edges, making a dote is no longer essential. However, it remains
                a part of Tokyo culture, a remnant of the past! Creating the
                dote adds an element of excitement and fun, especially when you
                wonder if the batter will spill over or not. It's a playful
                touch from the old town and adds to the charm of making
                monjayaki. Additionally, the dote helps balance the moisture
                from the cabbage and thickens the batter, enhancing the overall
                flavor. For the perfect monjayaki experience, leave the details
                to the professionals at Moheji!
              </p>
            </div>

            <img
              src="/image/dote.jpg"
              className="lg:h-[280px] lg:w-[280px] lg:p-[25px] lg:pt-[0px] pt-[15px] "
              alt="mennmochi"
            />
          </div>
          <div className="lg:w-[1100px] border-t border-gray-300 lg:my-[40px] my-[25px]"></div>

          <div className="lg:flex lg:items-center">
            <div className="lg:flex lg:flex-col ">
              <p className="lg:pl-[25px] lg:p-[15px] font-bold lg:pb-[0px] pb-[10px]">
                ＜How to Make Monjayaki＞
              </p>
              <p className="lg:px-[25px]">
                At our restaurant, our staff will make the monjayaki for you.
              </p>
              <p className="lg:px-[25px]">
                <p>①Prepare the griddle</p>
                Spread an appropriate amount of oil using a large spatula. Drop
                a small amount of the batter onto the griddle, and heat it until
                it sizzles.
              </p>
              <p className="lg:px-[25px]">
                <p>②Cook the ingredients</p>
                Place the pork, squid, rice cakes, and other ingredients onto
                the griddle and lightly stir-fry them.
              </p>
              <p className="lg:px-[25px]">
                <p>③Add the remaining ingredients</p>
                ③Add the remaining ingredients Drop the remaining ingredients
                from the bowl onto the griddle (be careful not to spill the
                broth, as it may burn).
              </p>
              <p className="lg:px-[25px]">
                <p>④Cook the cabbage</p>
                Stir-fry the cabbage until it becomes tender, using a cutting
                motion.
              </p>
              <p className="lg:px-[25px]">
                <p>⑤Create the dote (dough ring)</p>
                Once the cabbage has softened, form a circular dote (dough ring)
                around the ingredients. The key is to make sure the broth
                doesn’t spill out.
              </p>
              <p className="lg:px-[25px]">
                <p>⑥Add the broth</p>
                Pour the remaining broth into the center of the dote. Pour it
                gently to avoid spilling. After a while, the broth will start to
                bubble inside the dote.
              </p>
              <p className="lg:px-[25px]">
                <p>⑦Mix everything together</p>
                Gradually mix the inside and outside of the dote together. Once
                everything is combined, lower the heat and spread it thinly to
                complete the dish. Top with your choice of toppings like aonori
                (green seaweed) or cheese!
              </p>
            </div>
            <img
              src="/image/tsukurikata.jpg"
              className="lg:h-[280px] lg:w-[280px] lg:p-[25px] lg:pt-[0px] pt-[15px] items-center"
              alt="mennmochi"
            />
          </div>
        </div>
      </div>{" "}
    </main>
  );
};

export default page;
