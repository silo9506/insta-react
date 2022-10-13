import { useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as UploadIcon } from "../../assets/icon.svg";
const Modal = () => {
  const [imageUrl, setImageUrl] = useState("");

  const fileRef = useRef();
  const onClickFile = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishload) => {
      const {
        currentTarget: { result },
      } = finishload;
      setImageUrl(result);
    };
    reader.readAsDataURL(theFile);
  };
  return (
    <Container>
      <Body>
        {imageUrl !== "" ? (
          <>
            <h1>새 게시물 만들기</h1>
            <ImgWrapper>
              <div>
                <img src={imageUrl} />
              </div>
              <div>가나다라</div>
            </ImgWrapper>
          </>
        ) : (
          <>
            {" "}
            <h1>새 게시물 만들기</h1>
            <ImgWrapper>
              <UploadIcon />
              <h1>사진과 동영상을 업로드 해보세요</h1>
              <button onClick={() => fileRef.current.click()}>
                컴퓨터에서 선택
              </button>
              <InputFile ref={fileRef} type="file" onChange={onClickFile} />
            </ImgWrapper>
          </>
        )}
      </Body>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 50%;
  height: 500px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  > h1 {
    border-bottom: 1px solid var(--border-color);
    padding: 20px 0px;
    display: block;
  }
`;

const ImgWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  button {
    cursor: pointer;
    background-color: #0095f6;
    border: 1px solid transparent;
    border-radius: 4px;
    color: white;
    padding: 5px 9px;
    font-weight: 600;
    margin-top: 24px;
  }
  h1 {
    font-size: 22px;
  }
`;
const InputFile = styled.input`
  display: none;
`;
