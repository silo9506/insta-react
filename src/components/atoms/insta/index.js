import styled from "styled-components";

export const InstaLogo = styled.div`
  margin: 22px auto 12px;
  background: url("https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png")
    no-repeat center;
  background-size: contain;
  height: 51px;
  width: 175px;
`;

export const Btn = styled.button`
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 5px 9px;
  background-color: ${({ bgColor }) => bgColor || "#0095f6"};
  color: ${({ color }) => color || "#fff"};
  flex: 1;
  font-size: 14px;
  font-weight: 600;
`;

export const Input = styled.input`
  font-size: 12px;
  background: #fafafa;
  padding: 9px 0 7px 8px;
  text-overflow: ellipsis;
  color: #8e8e8e;
  flex: 1;
  outline: none;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  box-sizing: border-box;
  min-height: 38px;
`;

export const Wrapper = styled.div`
  margin: ${({ margin }) => margin};
  display: flex;
`;

export const Text = styled.div`
  text-align: center;
  font-size: ${({ fontSize }) => fontSize || "14px"};
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const StoreBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto;
`;
export const StoreBtn = styled.img`
  height: 40px;
  & + & {
    margin-left: 8px;
  }
`;

export const Container = styled.div`
  min-height: ${({ height }) => height || "100vh"};
  min-width: 350px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const Contents = styled.div`
  margin: 0 auto;
  max-width: 350px;
  width: 100%;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Box = styled.div`
  margin-bottom: 10px;
  border: 1px solid #dbdbdb;
  padding: 10px 0px;
`;
