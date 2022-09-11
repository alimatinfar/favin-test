import React, {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  className: string;
}

function Row({children, className}: Props) {
  return (
    <div className={`py-3 grid ${className && className}`}>
      {children}
    </div>
  );
}

export default Row;