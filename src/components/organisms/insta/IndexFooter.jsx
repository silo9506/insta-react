import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 52px;

  justify-self: flex-end;
`;
const List = styled.ul`
  padding: 0px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0px;
`;
const Item = styled.li`
  color: #8e8e8e;
  font-weight: 400;
  font-size: 12px;
  margin: 0px 8px;
`;

const IndexFooter = () => {
  return (
    <Container>
      <List>
        <Item>Meta</Item>
        <Item>소개</Item>
        <Item>블로그</Item>
        <Item>채용 정보</Item>
        <Item>도움말</Item>
        <Item>API</Item>
        <Item>개인정보처리방침</Item>
        <Item>약관</Item>
        <Item>인기 계정</Item>
        <Item>해시태그</Item>
        <Item>위치</Item>
        <Item>Instagram Lite</Item>
      </List>
      <List>
        <Item>한국어</Item>
        <Item>© 2022 Instagram from Meta</Item>
      </List>
    </Container>
  );
};

export default IndexFooter;
