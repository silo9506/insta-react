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
import Modal from "../atoms/Modal";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px;
  position: relative;
  background-color: var(--base-bgcolor);
`;

const OutletComponent = ({ userData }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [onModal, setOnModal] = useState(false);

  return (
    <Container>
      <Topnav setOnModal={setOnModal} />
      {onModal && (
        <Modal
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          setOnModal={setOnModal}
          userData={userData}
        />
      )}
      <Outlet context={{ imageUrl, userData }} />
      <Footer />
    </Container>
  );
};

export default OutletComponent;
