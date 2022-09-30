import { Link } from "react-router-dom";
import {
  Btn,
  Input,
  InstaLogo,
  Wrapper,
  Text,
  StoreBox,
  StoreBtn,
  Contents,
  Box,
} from "../../atoms/insta";
const LoginBox = () => {
  return (
    <Contents>
      <Link to={"/signup"}>
        <Box>
          <InstaLogo />

          <Wrapper margin="34px 40px 6px">
            <Input placeholder="전화번호,사용자 이름 또는 이메일"></Input>
          </Wrapper>
          <Wrapper margin="0 40px 14px">
            <Input placeholder="비밀번호"></Input>
          </Wrapper>
          <Wrapper margin="8px 40px">
            <Btn bgColor="rgba(0,149,246,.3)">로그인</Btn>
          </Wrapper>
          <Text
            fontSize="13px"
            margin="18px 40px"
            color="#8e8e8e;"
            fontWeight="600"
          >
            또는
          </Text>
          <Wrapper margin="8px 40px">
            <Btn bgColor="unset" color="#385185">
              Facebook으로 로그인
            </Btn>
          </Wrapper>
          <Text fontSize="12px" margin="12px 0px">
            비밀번호를 잊으셨나요?
          </Text>
        </Box>
      </Link>
      <Box>
        <Text margin="10px">계정이 없으신가요? 가입하기</Text>
      </Box>
      <Text margin="10px 20px 10px 20px">앱을 다운로드하세요.</Text>
      <StoreBox>
        <StoreBtn src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" />
        <StoreBtn src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" />
      </StoreBox>
    </Contents>
  );
};

export default LoginBox;
