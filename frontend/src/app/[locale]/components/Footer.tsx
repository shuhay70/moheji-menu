import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  // const Footer = () => {

  return (
    <footer className="flex justify-center lg:w-full bg-footercolor lg:p-2 lg:h-[350px] overflow-hidden">
      {/* <footer className="flex justify-between lg:w-full bg-footercolor lg:p-2  lg:h-[350px] w-[390px] pl-[52px]"> */}
      <div className="lg:flex">
        <div className="flex items-center justify-center">
          <Image
            className=" lg:pl-[20px] lg:w-auto lg:h-auto "
            // publicディレクトリの中にimageディレクトリを作り、そこに画像を保存すると、パスでたどる必要はなく『/』から始めれば良い。
            src="/image/logo1.jpg"
            width={300}
            height={300}
            // altはsrcに来るものの名前が相応しい
            alt="Logo"
          ></Image>
        </div>
        <div className="lg:pt-[55px] lg:pl-[5px]">
          <h1 className="text-white  lg:pb-[10px]"> {t("title1")}</h1>
          <p className="text-white  lg:w-[330px] w-[290px]">{t("ex11")}</p>
        </div>
        <div className="lg:border-l  border-white lg:h-[280px]  lg:mt-[30px]  lg:ml-[70px]  lg:mr-[70px] h-[5px] border-t my-[20px] mx-[10px]" />
        <div className=" lg:pt-[55px]  lg:pl-[5px]">
          <h1 className="text-white  lg:pb-[10px]">{t("title2")}</h1>
          <p className="text-white  lg:w-[530px]  w-[290px]">{t("ex21")}</p>
          <p className="text-white  lg:w-[530px]  w-[290px]">{t("ex22")}</p>
          <div className=" lg:ml-[290px] lg:mt-[20px] mt-[10px] mb-[20px]">
            <Link className="text-red-200 " href="https://kano-corp.tokyo/">
              {t("ex23")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// export default Footer;
