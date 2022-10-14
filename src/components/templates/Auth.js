import { Fragment, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../atoms/Footer";
import AuthForm from "../modules/AuthForm";
import AuthSlide from "../modules/AuthSlide";

const Container = styled.div`
  width: 100%;
  background-color: var(--base-bgcolo);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Auth = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(true);
  return (
    <Container>
      <Wrapper>
        {toggle && <AuthSlide />}
        <AuthForm
          setToggle={(value) => setToggle(value)}
          toggle={toggle}
          location={location.pathname}
        />
      </Wrapper>
      <div>
        <Footer />
      </div>
    </Container>
  );
};

export default Auth;
