import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { authService, dbService } from "../../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Content from "../atoms/Content";
import Sidebar from "../atoms/Sidebar";
import { getAuth } from "firebase/auth";

const Home = () => {
  const { imageUrl, userData } = useOutletContext();
  const [contents, setContents] = useState([]);

  console.log(authService.currentUser);

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

    // onSnapshot(collection(dbService, "content"), (snapshot) => {
    //   const contentArray = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }));
    //   setContents(contentArray);
    // });
  }, []);

  console.log(contents);

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
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: 200vh;
  display: flex;
  justify-content: center;
`;

const Contents = styled.div`
  max-width: 600px;
  width: 100%;
`;
