import { Roboto_Condensed } from 'next/font/google';

const robotoCondensed = Roboto_Condensed({ weight: "400", subsets: ["latin"] });

const Blog = () => {


  return (
    <div className="flex flex-col items-center w-full bg-gray-200">
      <div id="fb-root"></div>
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0" nonce="yQ7ldDDd"></script>
      <div className="md:max-w-2xl mt-8 mb-6">
        <h2 className={`uppercase text-3xl text-gray-700 ${robotoCondensed.className}`}>
          Latest News
        </h2>
        <div className="fb-page" data-href="https://www.facebook.com/people/Green-go/100095414971348" data-tabs="timeline" data-width="500" data-height="800" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"></div>
        {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FGreen-go%2F100095414971348%2F%3Fmibextid%3DLQQJ4d&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="800" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
      </div>
    </div>
  );
};

export default Blog;