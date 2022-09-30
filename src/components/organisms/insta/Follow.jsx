import styled from "styled-components";
import { inputdata } from "../../../data/youtube/insta/dropdown";
const Follow = () => {
  return (
    <Container>
      {inputdata.map(({ thumbnail, id }, index) => (
        <FollowBox key={index}>
          <Thumbnail src={thumbnail} />
          <Name>{id}</Name>
        </FollowBox>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 16px 0;
  border-radius: 3px;
  margin-bottom: 24px;
  border: 1px solid #dbdbdb;
  display: flex;
`;
const FollowBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85px;
  width: 80px;
  overflow: hidden;
`;
const Thumbnail = styled.img`
  width: 52px;
  height: 52px;
  border: 4px solid #dd5499;
  border-radius: 100%;
  margin-top: 4px;
  margin-bottom: 8px;
`;
const Name = styled.div`
  font-size: 12px;
  width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  color: gray;
`;

export default Follow;
