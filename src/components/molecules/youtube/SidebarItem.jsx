import styled, { css } from "styled-components";

const SidebarItem = ({ list }) => {
  return (
    <>
      {list.map(({ name, icon }, index) => (
        <Item key={index}>
          <IconWrapper>{icon()}</IconWrapper>
          <Name>{name}</Name>
        </Item>
      ))}
    </>
  );
};

const Item = styled.div`
  height: 40px;
  cursor: pointer;
  display: flex;
  padding: 0px 24px;
  color: white;
  align-items: center;

  :hover {
    background: #4c4c4c;
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;
const Name = styled.div`
  margin-left: 24px;
  font-size: 14px;
`;

export default SidebarItem;
