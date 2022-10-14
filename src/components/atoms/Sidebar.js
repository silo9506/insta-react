import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Admin } from "../../assets/profile.svg";
import { authService, dbService } from "../../firebase";

const Sidebar = ({ userData }) => {
  const [users, setUsers] = useState([]);

  const onClickLogout = () => {
    authService.signOut();
  };

  useEffect(() => {
    const response = async () => {
      const collectionRef = collection(dbService, "users");
      const q = query(collectionRef, orderBy("createAt", "desc"));

      onSnapshot(q, (snapshot) => {
        const res = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(res);
      });
    };
    response();
  }, []);

  console.log(users);

  return (
    <Container>
      <Box>
        <div>
          <Admin />
          {userData.displayName}
        </div>
        <Logout onClick={onClickLogout}>로그아웃</Logout>
      </Box>
      <UserInfo>소중한 회원님들</UserInfo>
      {users.map((item) => (
        <UserInfo key={item.uid}>
          <Admin />
          {item.email.split("@")[0]}
        </UserInfo>
      ))}
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  z-index: 1;
  height: 100%;
  max-width: 280px;
  width: 100%;
  margin-left: 20px;
  position: sticky;
  top: 80px;
`;

const Logout = styled.div`
  color: #0095f6;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  div {
    display: flex;
    align-items: center;
    svg {
      width: 40px;
      height: 40px;
      margin-right: 15px;
    }
  }
`;

const UserInfo = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  margin-left: 15px;
  svg {
    margin-right: 10px;
  }
`;
