import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function HomePage() {
  const t = useTranslations("Top");

  return (
    <main className="bg-gray-300 w-full">
      <div className="relative w-full max-w-3xl mx-auto ">
        <img
          src="/image/backimg2.jpg"
          alt="背景画像"
          className="mt-[70px] w-full h-full object-cover block"
        />
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>
      <div className="bg-black">
        <div className="w-full lg:pt-[55px] lg:pl-[5px] px-[30px] py-[40px] flex flex-col items-center justify-center text-center">
          <h1 className="text-gray-300 lg:pb-[10px]"> {t("title1")}</h1>
          <p className="text-gray-300  lg:w-[330px] ">{t("ex1")}</p>
        </div>
        <div className="flex justify-center pb-[80px] pt-[25px]">
          <Link
            href="/menu/monja"
            className="bg-black border border-white text-white py-[10px] px-[35px]"
          >
            {t("button1")}
          </Link>
        </div>
      </div>
      <img src="/image/dote.jpg" alt="背景画像２" className="" />
      <p className="flex justify-center text-center pt-[50px] px-[30px]">
        {t("ex2")}
      </p>
      <div className="flex justify-center pb-[80px] pt-[35px]">
        <Link
          href="/history"
          className=" border border-black text-black py-[10px] px-[35px]"
        >
          {t("button2")}
        </Link>
      </div>
      {/* <img src="/image/dote.jpg" alt="f" className="" />
      <p className="flex justify-center text-center pt-[50px] px-[30px]">
        ここではもんじゃの誕生から現在のもんじゃまでの歴史、なぜ土手を作るのか、またもんじゃの作り方を紹介しています。
      </p>
      <div className="flex justify-center pb-[80px] pt-[35px]">
        <Link
          href="/history"
          className=" border border-black text-black py-[10px] px-[35px]"
        >
          もんじゃの作り方
        </Link>
      </div> */}
      <img src="/image/tsukurikata.jpg" alt="背景画像３" className="" />
      <p className="flex justify-center text-center pt-[50px] px-[30px]">
        {t("ex3")}
      </p>
      <div className="flex justify-center pb-[80px] pt-[35px]">
        <Link
          href="https://tabelog.com/tokyo/A1313/A131302/13186205/"
          className=" border border-black text-black py-[10px] px-[35px]"
        >
          {t("button3")}
        </Link>
      </div>
      <section id="access" className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">
            {t("button4")}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.5630801170955!2d139.77989475965092!3d35.66299117099849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018897adffd646d%3A0xc5898692406f85b5!2z5pyI5bO244KC44KT44GY44KDIOOCguOBuOOBmCDjga_jgarjgow!5e0!3m2!1sja!2sjp!4v1751299825143!5m2!1sja!2sjp"
                  width="100%"
                  height="270"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
