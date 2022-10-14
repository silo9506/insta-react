import styled from "styled-components";
import { footerList } from "../../Data/data";

const Container = styled.div`
  width: 100%;
  justify-content: center;
  padding-bottom: 32px;
  ul {
    display: flex;
    justify-content: center;
    margin: 12px 0px;
    flex-wrap: wrap;
  }
  li {
    color: #8e8e8e;
    font-weight: 400;
    margin: 0px 8px;
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <ul>
        {footerList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <ul>
        <li>© 2022 Instagram from Meta</li>
      </ul>
    </Container>
  );
};

export default Footer;
