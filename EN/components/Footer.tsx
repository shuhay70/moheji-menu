"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
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
          <h1 className="text-white  lg:pb-[10px]">＜Our Dedication＞</h1>
          <p className="text-white  lg:w-[330px] w-[290px]">
            Founded in 1871 and directly operated by the Toyosu Fish Market, we
            are committed to delivering a unique dining experience through our
            carefully crafted dishes. Each morning, we simmer a homemade broth
            made from a blend of seafood, chicken bones, and aromatic
            vegetables, which serves as the base for our signature monjayaki.
            With our direct access to Toyosu, we handpick premium seafood items,
            grilled fish, and rare delicacies, curating an enticing array of
            “sakana” (small plates) to complement your meal. Each monjayaki is
            freshly prepared by our skilled staff at your table, so you can
            savor the professional quality of each dish at its peak.
          </p>
        </div>
        <div className="lg:border-l  border-white lg:h-[280px]  lg:mt-[30px]  lg:ml-[70px]  lg:mr-[70px] h-[5px] border-t my-[20px] mx-[10px]" />
        <div className=" lg:pt-[55px]  lg:pl-[5px]">
          <h1 className="text-white  lg:pb-[10px]">＜About us＞</h1>
          <p className="text-white  lg:w-[530px]  w-[290px]">
            Our core philosophy blends tradition with innovation. Our vision is
            to "Bring Tokyo Culture to the World." We are driven by the passion
            to deliver the flavors we believe in to our customers and to share
            Tokyo’s unique food culture globally. To achieve this, we strive to
            create memorable dining experiences as true professionals in the
            culinary arts.
          </p>
          <p className="text-white  lg:w-[530px]  w-[290px]">
            Our business spans the restaurant industry, with a focus on
            monjayaki specialty dining, and extends to retail, where we offer
            seafood, traditional Japanese delicacies, and other products to
            bring authentic Japanese flavors to our customers.
          </p>
          <div className=" lg:ml-[290px] lg:mt-[20px] mt-[10px] mb-[20px]">
            <Link className="text-red-200 " href="https://kano-corp.tokyo/">
              Visit Our Company Website Here 👈
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
