import { Outlet } from "react-router-dom";
import Footer from "../atoms/Footer";
import { ReactComponent as Search } from "../../assets/Search.svg";
import { ReactComponent as Airplane } from "../../assets/airplane.svg";
import { ReactComponent as Compass } from "../../assets/compass.svg";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as Pluse } from "../../assets/pluse.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import styled from "styled-components";
import Topnav from "../modules/Topnav";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 36px;
  position: relative;
  background-color: var(--base-bgcolor);
`;

const OutletComponent = () => {
  const [onModal, setOnModal] = useState(false);
  return (
    <Container>
      <Topnav setOnModal={setOnModal} />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default OutletComponent;
