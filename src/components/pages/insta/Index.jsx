import Login from "./Login";
import IndexFooter from "../../organisms/insta/IndexFooter";
import Carousels from "../../organisms/insta/Carousel";
import styled from "styled-components";
import { useState, useEffect } from "react";
import LoginBox from "../../organisms/insta/LoginBox";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  min-width: 350px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Index = () => {
  return (
    <Container>
      <Box>
        <Contents>
          <Link to={"/login"}>
            <Carousels />
          </Link>
        </Contents>
        <Contents>
          <LoginBox />
        </Contents>
      </Box>
      <IndexFooter />
    </Container>
  );
};

export default Index;
