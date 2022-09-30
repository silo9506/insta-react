import styled, { css } from "styled-components";
import { sidebarData } from "../../../data/youtube/insta/main";
import IndexFooter from "./IndexFooter";
const Sidebar = () => {
  return (
    <Container>
      <Box>
        <Acount>
          <Img src="https://yt3.ggpht.com/ytc/AKedOLRN3aSlaLJ8uL-0SwpOqWrSZSC9oHsimATEd2I-kQ=s88-c-k-c0x00ffffff-no-rj" />
          <TextBox>
            <Id>eyeless356</Id>
            <Info>도자기</Info>
          </TextBox>
          <Btn>전환</Btn>
        </Acount>
        <List>
          <Header>
            <Title>회원님을 위한 추천</Title>
            <Btn isblack>모두 보기</Btn>
          </Header>

          {sidebarData.map(({ profile, id, state }, index) => (
            <Item key={index}>
              <Acount mini>
                <Img mini src={profile} />
                <TextBox>
                  <Id>{id}</Id>
                  <Info>{state}</Info>
                </TextBox>
                <Btn>팔로우</Btn>
              </Acount>
            </Item>
          ))}
        </List>
        <Footer>
          <FooterItem>소개 •</FooterItem>

          <FooterItem>도움말 •</FooterItem>
          <FooterItem>홍보센터 •</FooterItem>
          <FooterItem>API •</FooterItem>
          <FooterItem>채용정보 •</FooterItem>
          <FooterItem>개인정보처리방침 •</FooterItem>
          <FooterItem>약관 •</FooterItem>
          <FooterItem>인기 계정 •</FooterItem>
          <FooterItem>해시태그 •</FooterItem>
          <FooterItem>언어</FooterItem>

          <FooterItem>© INSTAGRAM FROM META</FooterItem>
        </Footer>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  max-width: 293px;
  width: 100%;
  right: 25%;
`;
const Box = styled.div`
  position: sticky;
  top: 108px;
`;
const Acount = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 18px 4px 10px;
  align-items: center;
  ${({ mini }) =>
    mini &&
    css`
      margin: 0;
    `}
`;
const Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100%;
  ${({ mini }) =>
    mini &&
    css`
      width: 32px;
      height: 32px;
    `}
`;
const TextBox = styled.div`
  flex: 1;
  margin-left: 12px;
  font-size: 14px;
`;
const Id = styled.div`
  color: #262626;
`;
const Info = styled.div`
  color: #8e8e8e;
  font-size: 12px;
`;
const Btn = styled.button`
  font-size: 12px;
  background-color: white;
  border: none;
  padding: 0;
  font-weight: 600;
  color: #0095f6;
  height: fit-content;
`;
const List = styled.ul`
  list-style: none;
  padding: 0px;
`;
const Item = styled.li`
  padding: 8px 0px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
`;
const Title = styled.div`
  font-size: 14px;
  color: #8e8e8e;
`;
const Footer = styled.ul`
  display: flex;
  list-style: none;
  font-size: 12px;
  font-weight: 400;
  color: #c7c7c7;
  padding: 0;
  flex-wrap: wrap;
`;
const FooterItem = styled.li`
  margin-right: 3px;
  :last-child {
    margin-top: 12px;
  }
`;

export default Sidebar;
