import Image from "next/image";


const Maps = () => {

  return (
    <div className="flex  justify-center w-full bg-gray-200">
      <div className="relative h-[600px] w-[800px]">
        <Image
          src={`https://maps.googleapis.com/maps/api/staticmap?center=33.6714934,-93.6083925&zoom=14&scale=2&size=800x600&markers=33.6648403,-93.6045737&key=${process.env.GOOGLE_API_KEY}`}
          alt={"Map of Green-go on Google Maps"}
          className="object-cover"
          fill
          priority
        />
      </div>
    </div>
  );
};

export default Maps;