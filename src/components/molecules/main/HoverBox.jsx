import { useState } from "react";
import styled, { css } from "styled-components";
const Container = styled.div`
  position: relative;
  background-color: chocolate;
  color: white;
  height: 400px;
  width: 400px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 10;
  position: relative;
  transition: transform 0.5s ease-in;
  ${({ onMouse }) =>
    onMouse &&
    css`
      transform: scale(50%);
    `};
`;
const TextBox = styled.div`
  position: absolute;
  bottom: 0px;
  padding: 30px 0px;
  width: 100%;
  text-align: center;
  background-color: teal;
`;
const Title = styled.h4`
  margin: 0px;
  font-size: 30px;
`;
const Info = styled.div`
  font-size: 15px;
  margin-top: 5px;
`;
const HoverBox = () => {
  const [onMouse, setonMouse] = useState(false);

  return (
    <Container
      onMouseOut={() => setonMouse(false)}
      onMouseOver={() => setonMouse(true)}
    >
      <Image
        onMouse={onMouse}
        src="https://thumb.mt.co.kr/06/2021/10/2021102615414079102_1.jpg/dims/optimize/"
      />
      <TextBox>
        <Title>유튜브</Title>
        <Info>클론코딩</Info>
      </TextBox>
    </Container>
  );
};

export default HoverBox;
