import styled, { css } from "styled-components";
import { ReactComponent as Icon } from "../../../assets/img/insta/icon.svg";
import { ReactComponent as Close } from "../../../assets/img/insta/close.svg";
import { useRef } from "react";
import { useState } from "react";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: black;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  opacity: 0.9;
  svg {
    ${({ Btnclose }) =>
      Btnclose &&
      css`
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
      `}
  }
`;
const Box = styled.div`
  width: 750px;
  max-width: 855px;
  min-width: 348px;
  min-height: 391px;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  min-height: 82vh;
`;
const Header = styled.div`
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 16px;
  color: #262626;
  font-weight: 600;
`;
const Main = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.button`
  background-color: #0095f6;
  border: 1px solid transparent;
  border-radius: 4px;
  color: white;
  padding: 5px 9px;
  font-weight: 600;
  margin-top: 24px;
`;
const Text = styled.div`
  font-size: 22px;
  margin-top: 16px;
`;
const InputFile = styled.input`
  display: none;
`;

const Modal = ({ isShow, setisShow }) => {
  const [previewSrc, setPreviewSrc] = useState();
  const fileEl = useRef(null);
  const handleChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewSrc(reader.result);
      console.log(previewSrc);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      {isShow === "modal" && (
        <Container>
          <Close onClick={() => setisShow("")} />
          <Box>
            <Header>
              <Title>새 게시물 만들기</Title>
            </Header>
            <Main>
              <Contents>
                {previewSrc ? (
                  <PreviewWrapper>
                    <PreviewImage src={previewSrc} />
                  </PreviewWrapper>
                ) : (
                  <>
                    <Icon />
                    <Text>사진과 동영상을 여기에 끌어다 놓으세요</Text>
                    <Button onClick={() => fileEl.current.click()}>
                      컴퓨터에서 선택
                    </Button>
                    <InputFile
                      ref={fileEl}
                      type="file"
                      onChange={handleChange}
                    />
                  </>
                )}
              </Contents>
            </Main>
          </Box>
        </Container>
      )}
    </>
  );
};
const PreviewWrapper = styled.div`
  flex: 1;
`;
const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default Modal;
