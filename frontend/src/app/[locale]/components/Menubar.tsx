import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Menubar");

  return (
    <div className="mx-auto w-[80%]">
      <div className="flex flex-col justify-center bg-white  lg:px-[10px] lg:pb-[30px] lg:pt-[30px] mt-[70px]  mt-[20px] lg:p-[5px] py-[5px] px-[1px]">
        <div className="flex justify-between px-[15px] py-[4px]">
          <div className="lg:w-[180px]  lg:flex lg:items-center lg:justify-center w-[33%]">
            <Link
              className="flex justify-center items-center  lg:text-[20px] lg:m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 lg:h-[50px] lg:w-[250px] mx-[2px] text-[12px] h-[40px]"
              href="/menu/monja"
            >
              {t("title1")}
            </Link>
          </div>
          <div className="lg:w-[180px]  lg:flex lg:items-center lg:justify-center w-[33%]">
            <Link
              className="flex justify-center items-center  lg:text-[20px] lg:m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 lg:h-[50px] lg:w-[250px] mx-[2px] text-[10px] h-[40px]"
              href="/menu/season"
            >
              {t("title2")}
            </Link>
          </div>
          <div className="lg:flex lg:w-[180px] lg:items-center lg:justify-center w-[33%]">
            <Link
              className="flex flex-col justify-center items-center  lg:text-[15px] lg:m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 lg:h-[50px] lg:w-[250px]  pl-[8px] text-[10px] h-[40px]"
              href="/menu/okonomiyaki"
            >
              {t("title3")}
            </Link>
          </div>
        </div>
        <div className="flex justify-between px-[15px] py-[4px]">
          <div className="lg:w-[180px]  lg:flex lg:items-center lg:justify-center w-[33%]">
            <Link
              className="flex justify-center items-center  lg:text-[20px] lg:m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 lg:h-[50px] lg:w-[250px] mx-[2px] text-[12px] h-[40px]"
              href="/menu/topping"
            >
              {t("title4")}
            </Link>
          </div>
          <div className="lg:w-[180px]  lg:flex lg:items-center lg:justify-center w-[33%]">
            <Link
              className="flex justify-center items-center  lg:text-[20px] lg:m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 lg:h-[50px] lg:w-[250px] pl-[10px] text-[12px] h-[40px]"
              href="/menu/teppan"
            >
              {t("title5")}
            </Link>
          </div>
          <div className="lg:flex lg:w-[180px] lg:items-center lg:justify-center w-[33%]">
            <Link
              className="flex flex-col justify-center items-center  lg:text-[15px] lg:m-[3px] font-bold bg-gray-200 hover:bg-indigo-300 lg:h-[50px] lg:w-[250px]  pl-[1px] text-[12px] h-[40px]"
              href="/menu/drink"
            >
              {t("title6")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
