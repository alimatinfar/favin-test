import React, {ReactNode} from 'react';
import Header, {HeaderPropsType} from "./Header";
import Container from "../Container/Container";

interface Props extends HeaderPropsType {
  children: ReactNode;
}

function Layout({title, subTitle, children}: Props) {
  return (
    <>
      <Header title={title} subTitle={subTitle}/>

      <Container className='pt-36'>
        {children}
      </Container>
    </>
  );
}

export default Layout;