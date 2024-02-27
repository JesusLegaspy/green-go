import { FaPhone } from "react-icons/fa6";
import { Roboto_Condensed } from 'next/font/google';

const robotoCondensed = Roboto_Condensed({ weight: "400", subsets: ["latin"] });


const FooterCall = () => {

  return (
    <a href="tel:8708260950" className="w-full">
      <div className={`py-3 flex w-full justify-center items-center bg-quinary text-xl text-white ${robotoCondensed.className} md:hidden`}>
        <FaPhone />
        <div className="ml-2">Call Now</div>
      </div>
    </a>
  );
};

export default FooterCall;