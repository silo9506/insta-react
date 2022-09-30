import { Link } from "react-router-dom";
import {
  Btn,
  Input,
  InstaLogo,
  Wrapper,
  Text,
  StoreBox,
  StoreBtn,
  Container,
  Contents,
  Box,
} from "../../atoms/insta";
import IndexFooter from "../../organisms/insta/IndexFooter";

const Sigup = () => {
  return (
    <Container>
      <Contents>
        <Box>
          <Link to={"/main"}>
            <InstaLogo />
          </Link>
          <Text
            fontSize="17px"
            margin="0px 40px 18px 40px"
            color="#8e8e8e;"
            fontWeight="600"
          >
            친구들의 사진과 동영상을 보려면 가입하세요.
          </Text>
          <Wrapper margin="8px 40px">
            <Btn>Facebook으로 로그인</Btn>
          </Wrapper>
          <Text
            fontSize="13px"
            margin="18px 40px"
            color="#8e8e8e;"
            fontWeight="600"
          >
            또는
          </Text>
          <Wrapper margin="0 40px 6px">
            <Input placeholder="휴대폰 번호 또는 이메일 주소"></Input>
          </Wrapper>
          <Wrapper margin="0 40px 6px">
            <Input placeholder="성명"></Input>
          </Wrapper>
          <Wrapper margin="0 40px 6px">
            <Input placeholder="사용자이름"></Input>
          </Wrapper>
          <Wrapper margin="0 40px 14px">
            <Input placeholder="비밀번호"></Input>
          </Wrapper>
          <Wrapper margin="8px 40px 28px 40px">
            <Btn bgColor="rgba(0,149,246,.3)">가입</Btn>
          </Wrapper>
        </Box>
        <Box>
          <Text margin="10px">계정이 있으신가요? 로그인</Text>
        </Box>
        <Text margin="10px 20px 10px 20px">앱을 다운로드하세요.</Text>
        <StoreBox>
          <StoreBtn src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" />
          <StoreBtn src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" />
        </StoreBox>
      </Contents>
      <IndexFooter />
    </Container>
  );
};

export default Sigup;
