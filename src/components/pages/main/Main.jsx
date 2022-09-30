import Header from "../../organisms/main/Header";
import Info from "../../pages/main/Info";
import Project from "./Project";
import styled from "styled-components";
import Home from "./Home";
import { ReactComponent as Arrow } from "../../../assets/img/insta/arrow03.svg";
import { useState } from "react";
const Container = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  height: 100vh;
`;
const PageList = styled.ul`
  padding: 0px;
  list-style: none;
  margin: 0px;
  display: flex;
  transform: ${({ isShow }) => `translateX(${-100 * isShow}vw)`};
  padding-top: 65px;
  transition: transform 0.5s ease-in-out;
`;
const ArrowBtn = styled.button`
  position: absolute;
  background-color: transparent;
  border-radius: 100%;
  border: none;
  top: 50%;
  margin: 0px;
  padding: 0px;
  transform: translateY(-50%);
  z-index: 1;
  svg {
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
`;
const Priv = styled(ArrowBtn)`
  left: 50px;
`;
const Next = styled(ArrowBtn)`
  right: 50px;
  transform: rotate(180deg) translateY(50%);
`;

const Main = () => {
  const [isShow, setisShow] = useState(0);
  const maxPage = 2;
  const onClickArrow = (n) => {
    setisShow(isShow + n);
  };
  return (
    <>
      <Container>
        <Header isShow={isShow} setisShow={(n) => setisShow(n)} />
        {isShow > 0 && (
          <Priv onClick={() => onClickArrow(-1)}>
            <Arrow />
          </Priv>
        )}
        {isShow < maxPage && (
          <Next onClick={() => onClickArrow(+1)}>
            <Arrow />
          </Next>
        )}

        <PageList isShow={isShow}>
          <Home />
          <Info />
          <Project />
        </PageList>
      </Container>
    </>
  );
};

export default Main;
