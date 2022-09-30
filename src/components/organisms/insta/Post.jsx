import styled, { css } from "styled-components";
import { postList } from "../../../data/youtube/insta/main";
import { ReactComponent as Moredot } from "../../../assets/img/insta/moredot.svg";
import { ReactComponent as Smaile } from "../../../assets/img/insta/smail.svg";
import { ReactComponent as Miniheart } from "../../../assets/img/insta/miniheart.svg";
import PostCarousel from "./PostCarousel";

const Post = () => {
  return (
    <>
      {postList.map(({ user, imageList, likes, replys, created_at }, index) => (
        <Container key={index}>
          <Header>
            <Profile src={user.profileImage} />
            <Id>{user.name}</Id>
            <IconWrapper>
              <Moredot />
            </IconWrapper>
          </Header>
          <PostCarousel imageList={imageList} />
          <Contents>
            <Box>좋아요 {likes.total}개</Box>
            <Box text>
              {replys.items.map(({ content, user }, index) => (
                <TextWrapper key={index}>
                  <Name>{user.name}</Name>
                  <Comments>{content}</Comments>

                  <Miniheart />
                </TextWrapper>
              ))}
              <Totalcomment>댓글 {replys.total}6개 모두 보기</Totalcomment>
            </Box>
            <Created>{created_at}</Created>
            <Box between>
              <IconWrapper>
                <Smaile />
              </IconWrapper>
              <Input placeholder="댓글 달기..." />
              <Button>게시</Button>
            </Box>
          </Contents>
        </Container>
      ))}
    </>
  );
};

const Container = styled.div`
  margin-bottom: 24px;
  max-width: 614px;
  border: 1px solid #cdcdcd;
  box-sizing: border-box;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  font-size: 14px;
  font-weight: 600;
`;
const Profile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  margin-right: 14px;
`;
const Id = styled.div`
  flex: 1;
`;
const ImgBox = styled.div`
  max-width: 614px;
  min-height: 614px;
  position: relative;
  width: 100%;
  overflow: hidden;
`;
const Contents = styled.div``;
const Box = styled.div`
  color: #262626;
  font-size: 14px;
  font-weight: 600;
  padding: 0px 16px;
  display: flex;
  &:last-child {
    border-top: 1px solid #cdcdcd;
  }
  ${({ between }) =>
    between &&
    css`
      justify-content: space-between;
      padding: 6px 8px;
      align-items: center;
    `}
  ${({ text }) =>
    text &&
    css`
      flex-direction: column;
      margin-top: 8px;
    `};
`;
const IconWrapper = styled.div`
  padding: 8px;
`;
const Icons = styled.div`
  display: flex;
`;
const Name = styled.span``;
const Comments = styled.span`
  font-weight: 400;
  padding-left: 5px;
  flex: 1;
`;
const Totalcomment = styled.div`
  color: #8e8e8e;
  font-weight: 400;
  margin-top: 4px;
`;
const Created = styled.div`
  font-size: 10px;
  padding-left: 16px;
  margin-bottom: 16px;
  color: #8e8e8e;
  margin-top: 4px;
`;
const Input = styled.input`
  flex: 1;
  padding: 8px 0px;
  padding-left: 16px;
  height: 18px;
  max-height: 80px;
  border: none;
  outline: none;
  color: gray;
`;
const Button = styled.button`
  color: #0095f6;
  border: 0;
  background-color: transparent;
`;
const TextWrapper = styled.div`
  margin-bottom: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Post;
