import { useState } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/img/insta/arrow02.svg";
import { ReactComponent as Heart } from "../../../assets/img/insta/heart.svg";
import { ReactComponent as Comment } from "../../../assets/img/insta/comment.svg";
import { ReactComponent as Airplane } from "../../../assets/img/insta/airplane.svg";
import { ReactComponent as Flage } from "../../../assets/img/insta/flage.svg";

const PostCarousel = ({ imageList }) => {
  const [showImg, setShowimg] = useState(0);
  const maxImg = imageList.length - 1;
  const onClickimg = (number) => {
    setShowimg(number + showImg);
    console.log(maxImg);
  };

  return (
    <>
      <ImgBox>
        {showImg > 0 && (
          <Priv onClick={() => onClickimg(-1)}>
            <Arrow />
          </Priv>
        )}

        {imageList.map(({ image }, index) => {
          return <Img isShow={showImg === index} src={image} key={index} />;
        })}
        {showImg < maxImg && (
          <Next onClick={() => onClickimg(+1)}>
            <Arrow />
          </Next>
        )}
      </ImgBox>
      <Box>
        <Icons>
          <IconWrapper>
            <Heart />
          </IconWrapper>
          <IconWrapper>
            <Comment />
          </IconWrapper>
          <IconWrapper>
            <Airplane />
          </IconWrapper>
        </Icons>
        {maxImg > 1 && (
          <Quickviews>
            {imageList.map(({}, index) => (
              <Quickview key={index} isShow={index === showImg} />
            ))}
          </Quickviews>
        )}

        <IconWrapper>
          <Flage />
        </IconWrapper>
      </Box>
    </>
  );
};

const ImgBox = styled.div`
  max-width: 614px;
  min-height: 614px;
  position: relative;
  width: -614px;
  overflow: hidden;
`;
const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  display: none;
  transform: ${({ translate }) => translate};
  ${({ isShow }) =>
    isShow &&
    css`
      display: block;
    `};
`;
const Next = styled.div`
  position: absolute;
  border: none;
  height: 24px;
  width: 24px;
  border: none;
  padding: 0;
  right: 10px;
  transform: translateY(-50%) rotate(180deg);
  top: 50%;
  z-index: 1;
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  border-radius: 100%;
  background-color: rgb(239, 239, 239);
`;
const Priv = styled.div`
  position: absolute;
  border: none;
  height: 24px;
  width: 24px;
  border: none;
  padding: 0;
  top: 50%;
  left: 10px;
  z-index: 1;
  transform: translateY(-50%) rotate(360deg);
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  border-radius: 100%;
  background-color: rgb(239, 239, 239);
`;
const IconWrapper = styled.div`
  padding: 8px;
`;
const Icons = styled.div`
  display: flex;
`;
const Box = styled.div`
  color: #262626;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  padding: 6px 8px;
  align-items: center;
  position: relative;
`;
const Quickviews = styled.div`
  top: 15px;
  right: 50%;
  transform: translateX(50%);
  position: absolute;
  display: flex;
  justify-content: center;
`;
const Quickview = styled.div`
  border-radius: 100%;
  width: 6px;
  height: 6px;
  background-color: #cdcdcd;
  margin-right: 4px;
  ${({ isShow }) =>
    isShow &&
    css`
      background-color: skyblue;
    `}
`;
export default PostCarousel;
