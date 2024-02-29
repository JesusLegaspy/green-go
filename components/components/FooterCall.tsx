import { FaPhone } from "react-icons/fa6";
import { Roboto_Condensed } from 'next/font/google';

const robotoCondensed = Roboto_Condensed({ weight: "400", subsets: ["latin"] });


const FooterCall = () => {

  return (
    <div className="lg:hidden z-40 fixed bottom-0 w-full shadow-[rgba(0,0,15,0.3)_0px_-1px_10px_0px]">
      <a href="tel:8708260950">
        <div className={`py-3 flex w-full justify-center items-center bg-quinary text-xl text-white ${robotoCondensed.className} md:hidden`}>
          <FaPhone />
          <div className="ml-2">Call Now</div>
        </div>
      </a>
    </div>
  );
};

export default FooterCall;