import styled, { css } from "styled-components";
import { ReactComponent as Search } from "../../../assets/img/insta/Search.svg";
import { ReactComponent as Airplane } from "../../../assets/img/insta/airplane.svg";
import { ReactComponent as Compass } from "../../../assets/img/insta/compass.svg";
import { ReactComponent as Heart } from "../../../assets/img/insta/heart.svg";
import { ReactComponent as Pluse } from "../../../assets/img/insta/pluse.svg";
import { ReactComponent as Home } from "../../../assets/img/insta/home.svg";
import Dropdowninput from "./DropdownInput";
import Dropdownlike from "./Dropdownlike";
import Dropdownadmin from "./Dropdownadmin";
import Modal from "./Modal";
import { useState, useRef, useEffect } from "react";
import UseDropdownClickBody from "../../../hook/useDropdownClickbody";
import { Outlet } from "react-router-dom";
const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  height: 60px;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  background-color: #fff;
  z-index: 5;
`;
const Box = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  max-width: 935px;
  justify-content: space-between;
  width: 100%;
  flex: 1;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${({ isLogo }) =>
    isLogo &&
    css`
      flex-grow: 0.5;
    `}
  ${({ isInput }) =>
    isInput &&
    css`
      height: 36px;
      min-width: 125px;
      width: 268px;
      /* padding: 3px 16px; */
      position: relative;
    `}
`;
const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const Input = styled.input`
  padding: 0px 16px;
  background-color: #efefef;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 8px;
  height: 100%;
  width: 100%;
  color: black;
`;
const SearchWrapper = styled.span`
  position: absolute;
  color: #8e8e8e;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  background-color: #efefef;
  font-size: 16px;
  ${({ isShow }) =>
    isShow &&
    css`
      display: none; ;
    `}
  svg {
    margin-right: 12px;
  }
`;

const Admin = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 100%;
`;
const BtnWrapeer = styled.div`
  position: relative;
  & + & {
    margin-left: 24px;
    cursor: pointer;
  }
`;
const TopNav = ({}) => {
  const [isShow, setisShow] = useState("");
  // const element = UseDropdownClickBody(() => setisShow(""));
  // const element2 = UseDropdownClickBody(() => setisShow(""));
  // const element3 = UseDropdownClickBody(() => setisShow(""));
  // const element4 = UseDropdownClickBody(() => setisShow(""));
  const onClickShow = (value) => {
    if (isShow === value) {
      setisShow();
      return;
    }
    setisShow(value);
  };

  return (
    <>
      <Modal isShow={isShow} setisShow={() => setisShow()} />
      <Container>
        <Box>
          <Wrapper isLogo>
            <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
          </Wrapper>
          <Wrapper
            // ref={element}
            isInput
            onClick={() => {
              onClickShow("input");
            }}
          >
            <Input type="text" placeholder="검색" />
            <SearchWrapper isShow={isShow === "input"}>
              <Search />
              검색
            </SearchWrapper>
            <Dropdowninput isShow={isShow} />
          </Wrapper>
          <Wrapper>
            <BtnWrapeer>
              <Home />
            </BtnWrapeer>
            <BtnWrapeer>
              <Airplane />
            </BtnWrapeer>
            <BtnWrapeer>
              <Pluse
                // ref={element2}
                onClick={() => {
                  onClickShow("modal");
                }}
              />
            </BtnWrapeer>
            <BtnWrapeer>
              <Compass />
            </BtnWrapeer>
            <BtnWrapeer>
              <Heart
                // ref={element3}
                onClick={() => {
                  onClickShow("like");
                }}
              />
              <Dropdownlike isShow={isShow} />
            </BtnWrapeer>
            <BtnWrapeer>
              <Admin
                src="https://yt3.ggpht.com/yti/APfAmoFiBEGEcTRtsCoAJGkpHExlWPbtViLh4mo1xg=s88-c-k-c0x00ffffff-no-rj-mo"
                // ref={element4}
                onClick={() => {
                  onClickShow("admin");
                }}
              />
              <Dropdownadmin isShow={isShow} />
            </BtnWrapeer>
          </Wrapper>
        </Box>
      </Container>
    </>
  );
};

export default TopNav;
