"use client";

import Menubar from "../../components/Menubar";
import Head from "next/head";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <div
        className="scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-scroll  bg-white "
        style={{
          backgroundImage: "url('/image/backimg1.jpg')", // メインの背景画像
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Menubar />
        <div className="w-[80%] bg-white p-[25px] pb-[25px] mb-[30px] mx-auto">
          <div className="lg:flex">
            <div className="  lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/menmochi.jpg"
                  className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px] "
                  alt="mennmochi"
                />
              </div>
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                Mentaikomochi Monja
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                The fresh cream perfectly complements the delicious flavor of
                mentaiko in this No.1 favorite monjayaki! Add mozzarella cheese
                as a topping to enhance the taste and make it even more
                delicious!
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                Ingredients: cabbage, tempura crisps (with shrimp), dashi, fresh
                cream, mentaiko (cod roe), mochi
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/kaisen.jpg"
                  className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                  alt="mennmochi"
                />
              </div>
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                Kaisen Monja
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                This monjayaki restaurant, operated by a seafood wholesaler with
                150 years of history at Tsukiji and Toyosu, offers the finest
                flavors only they can provide! All seafood is sourced fresh from
                Tsukiji and Toyosu markets every morning{" "}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                Ingredients: cabbage, tempura crisps (with shrimp), dashi,
                shredded dried squid, squid, octopus, shrimp, salted fish guts,
                scallops{" "}
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px] ">
              <div className="flex justify-center">
                <img
                  src="/image/ikasumi.jpg"
                  className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                  alt="mennmochi"
                />
              </div>
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                Ikasumi Monja
              </p>

              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                This monjayaki is sure to pleasantly surprise you and get you
                hooked from the first bite! Add mozzarella cheese as a topping
                to make it even more delicious!
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                Ingredients: cabbage, tempura crisps (with shrimp), dashi, fresh
                cream, shredded dried squid, squid ink, squid tentacles, minced
                garlic, garlic shoots, green onions, butter
              </p>
            </div>
          </div>
          <div className="lg:flex">
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/mensiso.jpg"
                  className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                  alt="mennmochi"
                />
              </div>
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                Mentaikosiso Monja
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                This monjayaki has a refreshing hint of shiso leaf that enhances
                the high-quality flavor of mentaiko, making it even richer and
                more enjoyable{" "}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                Ingredients: cabbage, tempura crisps (with shrimp), dashi, fresh
                cream, shredded dried squid, mentaiko (cod roe), perilla
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/butakimu.jpg"
                  className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                  alt="mennmochi"
                />
              </div>
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                Butakimchi Monja
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                The carefully selected kimchi combined with a special sauce
                creates a unique twist on the classic monjayaki, making it even
                more delicious! Feel free to add toppings like cheese, chives,
                or corn to suit your taste!{" "}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                Ingredients: cabbage, tempura crisps (with shrimp), dashi,
                shredded dried squid, pork, kimchi, chives, bean sprouts, minced
                garlic{" "}
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/umetako.jpg"
                  className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                  alt="mennmochi"
                />
              </div>
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                Umetakobutanori Monja
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                The tangy flavor of ume (plum) and the savory taste of pork are
                complemented by the texture of octopus, while nori (seaweed) and
                shiso leaf enhance the flavor, making this monjayaki perfect for
                the current season!
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                Ingredients: cabbage, tempura crisps (with shrimp), dashi,
                shredded dried squid, pork, octopus, ume (plum), nori (seaweed),
                shiso (perilla leaf)
              </p>
            </div>
          </div>
          <div className="lg:flex">
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/oyako.jpg"
                  className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                  alt="mennmochi"
                />
              </div>
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                Oyako Monja
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                This monjayaki features the savory taste of chicken and the
                sweetness of onions, all wrapped in egg, offering a comforting,
                traditional Japanese flavor that will warm you up as you eat{" "}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                Ingredients: cabbage, tempura crisps (with shrimp), dashi,
                shredded dried squid, ground chicken, onion, green onions, nori
                (seaweed), egg
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/gyusuzi.jpg"
                  className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                  alt="mennmochi"
                />
              </div>
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                Gyusuzi Monja
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                The spicy flavor of curry blends perfectly with the rich umami
                of tenderly simmered beef tendon, creating an irresistible
                deliciousness!{" "}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                Ingredients: cabbage, tempura crisps (with shrimp), dashi, fresh
                cream, shredded dried squid, beef tendon, curry powder, burdock
                root, konnyaku (devil's tongue), shimeji mushrooms
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/butanira.jpg"
                  className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                  alt="mennmochi"
                />
              </div>
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                Butanira Monja
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                The rich flavors of chives and garlic are brought out, while the
                creamy taste of egg enhances the overall experience, making this
                monjayaki incredibly appetizing and sure to boost your appetite!{" "}
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                ngredients: cabbage, tempura crisps (with shrimp), dashi,
                shredded dried squid, pork, chives, garlic, egg
              </p>
            </div>
          </div>
          <div className="lg:flex">
            <div className="lg:px-[40px] lg:pb-[30px]">
              <div className="flex justify-center">
                <img
                  src="/image/gomoku.jpg"
                  className="lg:h-[280px] lg:w-[280px] h-[260px] w-[260px]"
                  alt="mennmochi"
                />
              </div>
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                Gomoku Monja
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                This luxurious monjayaki combines seafood, pork, and crunchy
                vegetables, offering a delightful variety of textures!
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                ngredients: cabbage, tempura crisps (with shrimp), dashi,
                shredded dried squid, pork, chicken, squid tentacles, mochi,
                satsuma-age (fried fish cake), noodles, pickled ginger, corn.
              </p>
            </div>
            <div className="lg:px-[40px] lg:pb-[30px]">
              <p className="lg:flex lg:justify-center lg:text-[20px] font-bold lg:pt-[10px] my-[10px] lg:my-[0px]">
                Su nonja
              </p>
              <p className="lg:flex lg:justify-center lg:w-[280px] mb-[5px] lg:mb-[0px]">
                Feel free to add your favorite toppings and enjoy!
              </p>
              <div className="lg:w-[280px] border-t border-gray-300 lg:my-4"></div>
              <p className="lg:flex lg:justify-center lg:w-[280px] mt-[5px] mb-[25px] lg:mt-[0px] lg:mb-[0px]">
                Ingredients: cabbage, tempura crisps (with shrimp), shredded
                dried squid, dashi{" "}
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </main>
  );
};

export default page;
