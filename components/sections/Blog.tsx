import { Roboto_Condensed } from 'next/font/google';
import Facebook from '../components/FaceBook';

const robotoCondensed = Roboto_Condensed({ weight: "400", subsets: ["latin"] });

const Blog = () => {


  return (
    <div className="flex flex-col items-center w-full bg-gray-200">
      <div className="flex flex-col items-center md:max-w-2xl mt-8 mb-6">
        <div>
          <h2 className={`uppercase text-3xl text-gray-700 ${robotoCondensed.className}`}>
            Latest News
          </h2>
        </div>
        <Facebook />
      </div>
    </div>
  );
};

export default Blog;