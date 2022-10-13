import { useEffect, useState } from "react";
import styled from "styled-components";
import { authSlideData } from "../../Data/data";

const Container = styled.div`
  background: url("https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png");
  background-repeat: no-repeat;
  background-size: 468.32px 634.15px;
  background-position: -40px 0;
  height: 581px;
  width: 450px;
  position: relative;
`;
const Slideimg = styled.img`
  position: absolute;
  right: 85px;
  bottom: 13px;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1.5s ease-in;
`;

const AuthSlide = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  let timmer = null;

  const startTimmer = () => {
    if (slideIndex === authSlideData.length) {
      setSlideIndex(0);
      console.log("다시0으로");
      return;
    }
    timmer = setTimeout(() => {
      setSlideIndex((prev) => prev + 1);
    }, 5000);
  };

  useEffect(() => {
    startTimmer();
  }, []);

  useEffect(() => {
    startTimmer();
  }, [slideIndex]);

  return (
    <Container>
      {authSlideData.map((item, index) => (
        <Slideimg key={item} src={item} active={index === slideIndex} />
      ))}
    </Container>
  );
};

export default AuthSlide;
