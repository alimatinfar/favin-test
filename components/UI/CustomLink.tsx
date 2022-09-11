import React, {ReactNode} from 'react';
import Link from "next/link";

type Props = {
  className?: string;
  href: string;
  children: ReactNode;
}

function CustomLink({className, href, children}:Props) {
  return (
    <Link href={href}><a className={className && className}>
      {children}
    </a></Link>
  );
}

export default CustomLink;