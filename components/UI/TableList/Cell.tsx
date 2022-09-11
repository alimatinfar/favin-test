import React, {ReactNode} from 'react';
import Typography from "../Typography/Typography";

type Props = {
  children: ReactNode;
  className: string;
}

function Cell({children, className}: Props) {
  return (
    <div className={`${className && className} text-center `}>
      <Typography size='xs'>
        {children}
      </Typography>
    </div>
  );
}

export default Cell;