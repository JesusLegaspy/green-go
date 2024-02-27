import { FaFacebook } from "react-icons/fa";
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ weight: "300", subsets: ["latin"] });

const Footer = () => {

  return (
    <div className="flex flex-col items-center bg-secondary w-full pt-16 pb-4 text-white">
      <div className="flex justify-end w-full max-w-4xl text-5xl pr-2 sm:pr-4">
        <a href="https://www.facebook.com/people/Green-go/100095414971348" target="_blank">
          <FaFacebook />
        </a>
      </div>
      <div className={`w-full max-w-5xl text-xs ${openSans.className} pl-2 sm:pl-4 mt-8`}>
        Copyright: Copyright ©2023 Green-go!. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;