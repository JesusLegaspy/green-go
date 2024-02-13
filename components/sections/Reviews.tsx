
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
  return (
    <div className="max-w-screen-2xl w-full">
      <div className='flex justify-center'>
        <div className='md:max-w-2xl p-4 mt-8'>
          <div className="mb-4">
            <p>We believe the greatest compliment is a customer referral. That's why we provide all customers with the absolute best service and highest quality work, at fair and competitive prices. See what other have to say:</p>
          </div>
          <div>
            {reviews.map(review => (
              <div key={review.time}>
                <p>{review.author_name}</p>
                <div>{review.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



export default Reviews;
