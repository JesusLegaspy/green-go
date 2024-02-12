import { IconType } from "react-icons";


const Service = ({ Icon, text }: { Icon: IconType, text: String }): JSX.Element => {
  return (
    <div className='flex items-center justify-center'>
      <div className='text-7xl bg-tertiary text-black rounded-lg'>
        <Icon className="p-3" />
      </div>
      <div className='flex items-center bg-quaternary w-8/12 h-12 max-w-sm'>
        <p className='uppercase pl-3'>{text}</p>
      </div>
    </div>
  );
};

export default Service;