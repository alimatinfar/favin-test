import {ReactNode} from 'react';

type Props = {
  textColor?: 'text-white' | 'text-black',
  className?: string,
  onClick?: (event: any) => void,
  children: ReactNode
}

function Button({textColor='text-white', onClick, children, className}: Props) {

  const customClass = `${className && className}  ${textColor}`

  return (
    <button
      {...onClick ? {onClick: onClick} : {} }
      className={`rounded-md text-center duration-300 bg-primary p-2.5 ${customClass}`}>
      {children}
    </button>
  );
}

export default Button;