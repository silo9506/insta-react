import styled from "styled-components";
import { topnavIcons } from "../../Data/svgIcon";
import { ReactComponent as Admin } from "../../assets/profile.svg";

const Topnav = ({ setOnModal }) => {
  const onClickIcon = (name) => {
    if (name === "새 게시물") {
      setOnModal(true);
    }
  };
  return (
    <Container>
      <Contents>
        <Logo>
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="logo"
          />
        </Logo>
        <Inputbox>
          <input placeholder="검색" />
        </Inputbox>
        <IconBox>
          {topnavIcons.map((item) => (
            <Icon
              onClick={(name) => onClickIcon(item.name)}
              key={item.name}
              name={item.name}
            >
              {item.icon()}
            </Icon>
          ))}
          <Icon>
            <Admin />
          </Icon>
        </IconBox>
      </Contents>
    </Container>
  );
};

export default Topnav;
const Container = styled.div`
  background-color: #ffffff;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid var(--border-color);
`;
const Contents = styled.div`
  max-width: 935px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const Inputbox = styled.div`
  flex-basis: 280px;
  /* flex: 0.5; */
  height: 36px;
  input {
    background-color: var(--input-bgcolor);
    width: 100%;
    height: 100%;
    outline: none;
    padding: 3px 16px;
    border-radius: 8px;
    border: none;
  }
  @media screen and (max-width: 550px) {
    input {
      display: none;
    }
  }
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  div + div {
    margin-left: 22px;
  }
  @media screen and (max-width: 550px) {
    div + div {
      margin-left: 5px;
    }
    div:last-child {
      margin-right: 10px;
    }
  }
`;
const Icon = styled.div`
  cursor: pointer;
  @media screen and (max-width: 550px) {
   svg{
    width:18px;
    height:18px
   }
`;
