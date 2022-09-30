import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Contents = styled.div`
  background: url("https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png")
    no-repeat center;
  background-size: 468.32px 634.15px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 468.32px;
  min-height: 634.15px;
`;
const Box = styled.div`
  position: relative;
`;
const Carousel = styled.img`
  position: absolute;
  bottom: 0px;
  left: 0px;
  transform: translate(-30%, 46%);
  transition: opacity 1.5s ease-in;
  opacity: 0;
  ${({ isShow }) =>
    isShow &&
    css`
      opacity: 1;
    `}
`;
const Carousels = () => {
  const [isShow, setisShow] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (isShow === 4) {
        setisShow(1);
        console.log(isShow + "끝");
        return;
      }
      // console.log(1);
      setisShow(isShow + 1);
      console.log(isShow);
    }, 4500);
  }, [isShow]);

  return (
    // <Container>
    <Contents>
      <Box>
        <Carousel
          isShow={true}
          src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
        />
        <Carousel
          isShow={isShow === 2}
          src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"
        />
        <Carousel
          isShow={isShow === 3}
          src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
        />
        <Carousel
          isShow={isShow === 4}
          src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
        />
      </Box>
    </Contents>
    // </Container>
  );
};

export default Carousels;
