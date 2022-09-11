import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  className?: string;
}

function Container({children, className}: Props) {
  return (
    <div className={`max-w-2xl mx-auto ${className && className}`}>
      {children}
    </div>
  );
}

export default Container;