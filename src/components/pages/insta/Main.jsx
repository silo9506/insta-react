import TopNav from "../../organisms/insta/TopNav";
import Sidebar from "../../organisms/insta/Sidebar";
import Follow from "../../organisms/insta/Follow";
import styled, { css } from "styled-components";
import Post from "../../organisms/insta/Post";
import { useState } from "react";
const Container = styled.div`
  position: relative;
  /* margin-top: 60px; */
  /* display: flex;
  justify-content: center; */
  min-height: 100vh;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-top: 60px;
`;
const Contents = styled.div`
  max-width: 614px;
  padding-top: 30px;
  width: 100%;
  margin-right: 28px;
`;
const Main = () => {
  const [isShow, setisShow] = useState("");
  return (
    <Container>
      <TopNav isShow={isShow} setisShow={() => setisShow()} />
      <Box>
        <Contents>
          <Follow />
          <Post />
        </Contents>
        <Sidebar />
      </Box>
    </Container>
  );
};

export default Main;
