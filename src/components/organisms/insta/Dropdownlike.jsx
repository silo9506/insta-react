import styled from "styled-components";
const Container = styled.div`
  max-height: 362px;
  min-height: 100px;
  height: 362px;
  overflow-y: auto;
  width: 500px;
  position: absolute;
  background-color: #fff;
  right: -48px;
  top: 40px;
  border-radius: 6px;
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
`;
const Dropdownlike = ({ isShow }) => {
  return <>{isShow === "like" && <Container></Container>}</>;
};

export default Dropdownlike;
