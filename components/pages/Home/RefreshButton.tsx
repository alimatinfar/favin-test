import Image from "next/image";
import TickSVG from '../../../public/images/svg/tick.svg';
import ReloadSVG from '../../../public/images/svg/reload.svg';



function RefreshButton({}) {
  return (
    <div className='flex shadow bg-white rounded-md p-3'>
      <Image src={ReloadSVG} />
    </div>
  );
}

export default RefreshButton;