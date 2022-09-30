import styled from "styled-components";
import { ReactComponent as X } from "../../../assets/img/insta/X.svg";
import { inputdata } from "../../../data/youtube/insta/dropdown";
import UseDropdownClickBody from "../../../hook/useDropdownClickbody";
const Container = styled.div`
  height: 362px;
  width: 375px;
  padding: 12px 0 0 0;
  position: absolute;
  top: 52px;
  right: 50%;
  transform: translateX(50%);
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  overflow-y: scroll;
`;
const Header = styled.div`
  margin: 4px 16px 0;
  max-height: 24px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;
const Title = styled.div`
  font-size: 16px;
`;
const AllClear = styled.button`
  border: none;
  background: transparent;
  font-size: 14px;
  color: #0095f6;
`;
const List = styled.ul`
  padding: 0;
  list-style: none;
  margin: 8px 0px;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;
const Thumbnail = styled.img`
  border-radius: 100%;
  width: 44px;
  height: 44px;
  border: 3px solid #d92d7a;
  margin-right: 12px;
`;
const Info = styled.div`
  flex: 1;
  font-size: 14px;
  font-weight: 600;
`;
const Id = styled.div``;
const Name = styled.div`
  color: #8e8e8e;
`;
const BtnClear = styled.div`
  padding: 8px;
`;

const Dropdowninput = ({ isShow }) => {
  return (
    <>
      {isShow === "input" && (
        <Container>
          <Header>
            <Title>최근 검색 항목</Title>
            <AllClear>모두 지우기</AllClear>
          </Header>
          <List>
            {inputdata.map(({ thumbnail, id, name }) => (
              <Item key={name}>
                <Thumbnail src={thumbnail} />
                <Info>
                  <Id>{id}</Id>
                  <Name>{name}</Name>
                </Info>
                <BtnClear>
                  <X />
                </BtnClear>
              </Item>
            ))}
          </List>
        </Container>
      )}
    </>
  );
};

export default Dropdowninput;
