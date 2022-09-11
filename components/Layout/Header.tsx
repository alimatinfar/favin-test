import Container from "../Container/Container";
import Image from "next/image";
import ArrowSVG from '../../public/images/svg/arrow.svg'
import Typography from "../UI/Typography/Typography";

export type HeaderPropsType = {
  title: string;
  subTitle: string;
}

function Header({title, subTitle}: HeaderPropsType) {
  return (
    <div className='bg-white shadow py-10'>
      <Container className='flex justify-between items-center'>
        <div className='flex-center space-x-2 space-x-reverse'>
          <Image src={ArrowSVG} />
          <Typography size='md'>{title}</Typography>
        </div>
        <Typography size='md' className='text-primary'>{subTitle}</Typography>
      </Container>
    </div>
  );
}

export default Header;