import Image from "next/image";


const Maps = () => {

  return (
    <div>
      <Image
        src={`https://maps.googleapis.com/maps/api/staticmap?center=San%20Francisco,CA&zoom=12&size=600x400&markers=san%20francisco,%20ca|37.811039,%20-122.477567&key=${process.env.GOOGLE_API_KEY}`}
        alt={"Map of Green-go on Google Maps"}
        width={500}
        height={500}
      />
    </div>
  );
};

export default Maps;