import Image from 'next/image';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoStarSharp } from "react-icons/io5";

const getReviews = async () => {
  const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?fields=reviews&placeid=${process.env.GOOGLE_PLACE_ID}&key=${process.env.GOOGLE_API_KEY}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return (res.json());
}

interface Review {
  author_name: string,
  author_url: string,
  language: string,
  original_language: string,
  profile_photo_url: string,
  rating: number,
  relative_time_description: string,
  text: string,
  time: number,
  translated: Boolean
}

interface ResponseReview {
  html_attributions: [],
  result: {
    reviews: readonly Review[]
  },
  status: string
}

const Reviews = async () => {
  const data: ResponseReview = await getReviews();
  const reviews = data.result.reviews;

  const renderStars = (count: number) => {
    let i = 0;
    const stars = [];
    for (i; i < count; i++) {
      stars.push(
        <IoStarSharp key={i} />
      );
    }
    return stars;
  }

  return (
    <div>
      <div className="max-w-screen-2xl w-full">
        <div className='flex justify-center'>
          <div className='md:max-w-2xl p-4 mt-8'>
            <div className="mb-6">
              <p>We believe the greatest compliment is a customer referral. That's why we provide all customers with the absolute best service and highest quality work, at fair and competitive prices. See what other have to say:</p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center mb-12'>
        {reviews.map(review => (
          <div key={review.time} className='text-sm border px-5 py-4 max-w-96 md:w-96'>
            <div className="flex items-center w-fill justify-between">
              <div className='flex items-center mb-4'>
                <div>
                  <Image
                    src={review.profile_photo_url}
                    width={24}
                    height={24}
                    alt="Picture of the reviewer"
                  />
                </div>
                <div className='pl-2 font-bold'>
                  {review.author_name}
                </div>
              </div>
              <div className='justify-self-end hover:bg-slate-200 rounded-full p-0.5'>
                <a href={review.author_url} target='_blank'>
                  <BsThreeDotsVertical />
                </a>
              </div>
            </div>
            <div className='flex text-gray-600'>
              <div className='flex text-amber-500 mb-2'>
                {renderStars(review.rating)}
              </div>
              <div className='ml-2 text-xs'>
                {review.relative_time_description}
              </div>
            </div>
            <div className='mb-4'>
              <p>
                {review.text}
              </p>
            </div>
            <div className='text-xs text-gray-500'>
              {review.translated && `Translated by Google - ${review.original_language}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Reviews;
