import styled from "styled-components";

const Backdropbox = styled.div`
  width: 100vh;
  height: 100vh;
  display: fixed;
  overflow: hidden;
  top: 0;
`;
const Container = styled.div``;
const Title = styled.div``;
const List = styled.div`
  padding: 0;
  list-style: none;
`;
const Item = styled.div``;
const Info = styled.div``;
const Modal = () => {
  return (
    <Backdropbox>
      <Container>
        <Title>유튜브</Title>
        <List>
          <Item>
            <Title>사용기술</Title>
            <Info></Info>
          </Item>
          <Item>
            <Title>주요기능</Title>
            <Info></Info>
          </Item>
        </List>
      </Container>
    </Backdropbox>
  );
};

export default Modal;
