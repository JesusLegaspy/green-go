import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfSharp } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";

const Stars = ({ rating }: { 'rating': number }) => {
  const numFull = Math.floor(rating);
  const hasHalf = rating % 1 !== 0 ? true : false;
  const numEmpty = Math.floor(5 - rating);

  const starsFull = () => {
    let i = 0;
    const stars = [];
    for (i; i < numFull; i++) {
      stars.push(<IoStarSharp key={`full-${i}`} />)
    }
    return stars;
  };
  const starsHalf = () => {
    if (hasHalf) return [<IoStarHalfSharp key="half" />];
    return [];
  }
  const starsEmpty = () => {
    let i = 0;
    const stars = [];
    for (i; i < numEmpty; i++) {
      stars.push(<IoStarOutline key={`empty-${i}`} />)
    }
    return stars;
  };

  return (
    <div className="flex text-amber-500">
      {[...starsFull(), ...starsHalf(), ...starsEmpty()]}
    </div>
  );

}

export default Stars