import Image from "next/image";
import Stars from "../components/Stars";

import { Roboto_Condensed } from 'next/font/google';

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

const getDetails = async () => {
  const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?fields=rating,url,website,name,opening_hours,formatted_address,formatted_phone_number,user_ratings_total&placeid=${process.env.GOOGLE_PLACE_ID}&key=${process.env.GOOGLE_API_KEY}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return (res.json());
}

interface DayTime {
  date: string,
  day: number,
  time: string,
}

interface Periods {
  close: DayTime,
  open: DayTime,
}

interface CurrentOpeningHours {
  open_now: boolean,
  periods: readonly Periods[],
  weekday_text: string[],
}

interface ResponseDetails {
  html_attributions: readonly [],
  result: {
    rating: number,
    url: string,
    website: string,
    name: string,
    opening_hours: CurrentOpeningHours,
    formatted_address: string,
    formatted_phone_number: string,
    user_ratings_total: number,
  },
  status: string,
}

const Maps = async () => {
  const data: ResponseDetails = await getDetails();

  const rating = data.result.rating;
  const url = data.result.url;
  const website = data.result.website;
  const name = data.result.name;
  const openingHours = data.result.opening_hours;
  const address = data.result.formatted_address;
  const phoneNumber = data.result.formatted_phone_number;
  const ratingsNumber = data.result.user_ratings_total;


  const getTime = (time: number): string => {
    const hour = time / 100;
    const minutes = String(time % 100).padStart(2, '0');
    if (12 < hour) return `${hour - 12}:${minutes} PM`;
    return `${hour}:${minutes} AM`;
  }

  return (
    <div className={`flex ${robotoCondensed.className} justify-center w-full bg-gray-200`}>
      <div className="relative h-[600px] w-[800px]">
        <Image
          src={`https://maps.googleapis.com/maps/api/staticmap?center=33.6714934,-93.6083925&zoom=14&scale=2&size=800x600&markers=33.6648403,-93.6045737&key=${process.env.GOOGLE_API_KEY}`}
          alt={"Map of Green-go on Google Maps"}
          className="object-cover"
          fill
          priority
        />
        <div className="absolute top-8 left-4 text-sm text-gray-600 bg-white drop-shadow-lg h-32 w-64">
          <div className="flex flex-col pt-2 pl-1">
            <div className="text-base font-bold text-black">{name}</div>
            <div className="flex">
              <div className="mr-1">{Number(rating).toFixed(1)}</div>
              <Stars rating={rating} />
              <div className="ml-1">({ratingsNumber})</div>
            </div>
            <div>Mechanic · {address.split(',').at(0)}</div>
            <div className="flex">
              {openingHours.open_now ? <div className="text-green-600">Open ·</div> : <div>Closed</div>}
              <div className="pl-2">Closes at {getTime(Number.parseInt(openingHours.periods.at(0)?.close.time ?? '0'))} ·</div>
            </div>
            <div>{phoneNumber}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;