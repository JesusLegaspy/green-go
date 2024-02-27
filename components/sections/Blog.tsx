import { Roboto_Condensed } from 'next/font/google';
import Posts from '../components/Posts';
import dynamic from 'next/dynamic';

const robotoCondensed = Roboto_Condensed({ weight: "400", subsets: ["latin"] });

const Blog = () => {

  return (
    <div className="flex flex-col items-center w-full bg-gray-200">
      <div className="flex flex-col items-center md:max-w-2xl mt-8 mb-12">
        <div>
          <h2 className={`uppercase text-3xl text-gray-700 ${robotoCondensed.className} mb-4`}>
            Latest News
          </h2>
        </div>
        <Posts
          url='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02FB1JkzDPiZrFkvpkei2zUanTX9QVvy7Fj7MddE5kkQ4mSmLtJhiiPpf3swufChMLl%26id%3D100095414971348&show_text=true'
          height={600}
        />
        <Posts
          url='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02Wq64nAqR7RbdyB3rHR7XMwpVMwSHbg5soHEm8LQoSQWGdDehQbwqTxcGzfeqrzEql%26id%3D100095414971348&show_text=true'
          height={300}
        />
        {/* <Posts url='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02aSzNXhSFSPquK7ocdXn31tMz1V1fM7nKYAecF4dFDkJyYX7N5aJTszvsUBRN5pMvl%26id%3D100095414971348&show_text=true'
          height={400}
        /> */}
      </div>
    </div>
  );
};

export default Blog;