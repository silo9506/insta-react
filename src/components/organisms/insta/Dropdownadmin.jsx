import styled from "styled-components";
import { ReactComponent as Profile } from "../../../assets/img/insta/profile.svg";
import { admindata } from "../../../data/youtube/insta/dropdown";
const Container = styled.div`
  position: absolute;
  background-color: #fff;
  right: -23px;
  top: 40px;
  border-radius: 6px;
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
`;
const Item = styled.div`
  min-width: 198px;
  padding: 8px 16px;
  display: flex;
  font-size: 14px;
  align-items: center;
  &:last-child {
    margin: 4px 0;
    border-top: 1px solid #dbdbdb;
  }
`;
const IconWrapper = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  flex: 1;
`;
const Dropdownadmin = ({ isShow }) => {
  return (
    <>
      {isShow === "admin" && (
        <Container>
          {admindata.map(({ info, icon }, index) => {
            return (
              <Item key={index}>
                <IconWrapper>{icon()}</IconWrapper>
                <Text>{info}</Text>
              </Item>
            );
          })}
          <Item>
            <Text>로그아웃</Text>
          </Item>
        </Container>
      )}
    </>
  );
};

export default Dropdownadmin;
