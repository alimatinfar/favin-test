import Button from "../../UI/Button/Button";
import AddSVG from '../../../public/images/svg/add.svg'
import Image from "next/image";
import Typography from "../../UI/Typography/Typography";

function AddClassButton({}) {
  return (
    <Button className='flex-center space-x-2 space-x-reverse' textColor='text-black'>
      <Image src={AddSVG} />
      <Typography size='md'>اضافه کردن کلاس</Typography>
    </Button>
  );
}

export default AddClassButton;