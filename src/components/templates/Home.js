import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { authService, dbService } from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Content from "../atoms/Content";
import Sidebar from "../atoms/Sidebar";
import { getAuth } from "firebase/auth";

const Home = () => {
  const { imageUrl, userData } = useOutletContext();
  const [contents, setContents] = useState([]);

  console.log(userData);
  const onClickLogout = () => {
    authService.signOut();
  };

  useEffect(() => {
    const response = async () => {
      const collectionRef = collection(dbService, "content");
      const q = query(collectionRef, orderBy("createdAt", "desc"));

      onSnapshot(q, (snapshot) => {
        const res = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContents(res);
      });
    };
    response();
  }, []);

  return (
    <Container>
      <Contents>
        {contents.map((item) => (
          <Content
            userData={userData}
            key={item.createdAt}
            contents={item}
            isOwner={item.creatorId === userData.uid}
          />
        ))}
      </Contents>
      <Sidebar userData={userData} />
      <Mobile onClick={onClickLogout}>
        <p>Log out</p>
      </Mobile>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
`;

const Contents = styled.div`
  max-width: 450px;
  width: 100%;
  @media screen and (max-width: 800px) {
    max-width: 300px;
  }
`;

const Mobile = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: #0095f6;
  background-color: #f35369;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
  color: white;
  display: none;
  opacity: 0.9;
  p {
    font-size: 14px;
    font-weight: bold;
    display: flex;
    text-align: center;
    align-items: center;
    height: 100%;
  }
  @media screen and (max-width: 450px) {
    display: block;
  }
`;
