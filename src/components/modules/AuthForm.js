import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { authService, dbService } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";

const AuthForm = ({ setToggle, toggle }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    displayName: "",
  });

  const createAccount = async (event) => {
    event.preventDefault();
    let data = "";
    try {
      // 회원가입
      data = await createUserWithEmailAndPassword(
        authService,
        user.email,
        user.password
        // user.displayName
      );

      await addDoc(collection(dbService, "users"), {
        uid: data.user.uid,
        email: data.user.email,
        createAt: new Date().toLocaleString(),
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const LoginAccount = async (event) => {
    event.preventDefault();
    try {
      let data = "";
      data = await signInWithEmailAndPassword(
        authService,
        user.email,
        user.password
      );
    } catch (error) {
      if (error.message === "Firebase: Error (auth/user-not-found).") {
        alert("존재하지않는 계정입니다.");
        return;
      }
      if (error.message === "Firebase: Error (auth/wrong-password).") {
        alert("패스위드가 틀립니다.");
        return;
      }
    }
  };

  const OnchangeInput = (event) => {
    const {
      target: { value, name },
    } = event;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const onClickProvider = async () => {
    const provider = new FacebookAuthProvider();
    const data = await signInWithPopup(authService, provider);
  };

  return (
    <Container>
      <Wrapper>
        <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
        <h1>친구들의 사진과 동영상을 보려면 가입하세요.</h1>

        {toggle ? (
          <Form onSubmit={LoginAccount}>
            <input
              onChange={OnchangeInput}
              type="email"
              placeholder="이메일"
              name="email"
              value={user.email}
              required
            />
            <input
              onChange={OnchangeInput}
              type="password"
              placeholder="비밀번호"
              name="password"
              value={user.password}
              required
            />
            <input type="submit" value="로그인" />
          </Form>
        ) : (
          <Form onSubmit={createAccount}>
            <input
              onChange={OnchangeInput}
              type="email"
              placeholder="이메일"
              name="email"
              required
              value={user.email}
            />
            <input
              onChange={OnchangeInput}
              type="text"
              placeholder="사용자 이름"
              name="displayName"
              required
              value={user.displayName}
            />
            <input
              onChange={OnchangeInput}
              type="password"
              placeholder="비밀번호"
              name="password"
              required
              value={user.password}
            />
            <input type="submit" value="가입" />
          </Form>
        )}
        <Line>
          <div></div>
          <h1>또는</h1>
          <div></div>
        </Line>
        <Provider onClick={onClickProvider}>
          <Facebook />
          Facebook으로 로그인
        </Provider>
      </Wrapper>
      <SignUp>
        {toggle ? (
          <Fragment>
            계정이 없으신가요?
            <button onClick={() => setToggle(false)}>가입하기</button>
          </Fragment>
        ) : (
          <Fragment>
            계정이 있으신가요?
            <button onClick={() => setToggle(true)}>로그인</button>
          </Fragment>
        )}
      </SignUp>
      <DownloadBox>
        <h1>앱을 다운로드하세요.</h1>
        <div>
          <StoreBtn src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"></StoreBtn>
          <StoreBtn src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"></StoreBtn>
        </div>
      </DownloadBox>
    </Container>
  );
};

export default AuthForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 350px;
  flex: 1;
  margin: 50px 0;
  @media screen and (max-width: 370px) {
    width: 100%;
    margin: 10px;
  }
`;
const Logo = styled.img`
  display: block;
  margin: 20px auto;
  width: 175px;
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 40px 40px;
  padding-bottom: 20px;
  border: 1px solid var(--border-color);
  background-color: #fff;
  > h1 {
    text-align: center;
    word-break: keep-all;
    margin-bottom: 15px;
    font-size: 17px;
    font-weight: 600;
    color: #8e8e8e;
  }
  @media screen and (max-width: 370px) {
    padding: 0px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    height: 38px;
    padding: 7px;
    margin: 3px 0px;
    background-color: var(--base-bgcolor);
    border: 1px solid var(--border-color);
    border-radius: 3px;
    font-size: 12px;
  }
  input:last-child {
    background-color: rgba(0, 149, 246, 0.3);
    color: #fff;
    font-size: 14px;
    border: none;
  }
`;
const Line = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  div {
    background-color: var(--border-color);
    height: 0.9px;
    flex: 1;
    display: block;
  }
  h1 {
    margin: 0px;
    padding: 0 18px;
    font-size: 13px;
  }
`;
const Provider = styled.div`
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  color: #385185;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  svg {
    margin-right: 10px;
  }
`;
const SignUp = styled.div`
  text-align: center;
  margin: 10px 0px;
  padding: 20px 0px;
  border: 1px solid var(--border-color);
  background-color: #fff;
  font-size: 14px;
  button {
    border: none;
    background-color: #ffffff;
    color: #0095f6;
    font-size: 14px;
    font-weight: bold;
  }
`;
const DownloadBox = styled.div`
  text-align: center;
  h1 {
    margin: 10px 0 20px;
  }
  div {
    margin: 10px 0;
  }
`;
const StoreBtn = styled.img`
  height: 40px;
`;
