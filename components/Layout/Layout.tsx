import React, {ReactNode} from 'react';
import Header, {HeaderPropsType} from "./Header";

interface Props extends HeaderPropsType {
  children: ReactNode;
}

function Layout({title, subTitle, children}: Props) {
  return (
    <>
      <Header title={title} subTitle={subTitle}/>

      <main>{children}</main>
    </>
  );
}

export default Layout;