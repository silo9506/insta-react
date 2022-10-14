import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";
import { Fragment, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as UploadIcon } from "../../assets/icon.svg";
import { ReactComponent as Xbtn } from "../../assets/X.svg";
import { v4 as uuidv4 } from "uuid";
import { dbService } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";
const Modal = ({ setOnModal, userData, setImageUrl, imageUrl }) => {
  const [contentText, setContentText] = useState("");
  const storage = getStorage();

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

  const onClickClose = () => {
    setOnModal(false);
    setImageUrl(null);
  };

  const onChangeText = (e) => {
    const {
      target: { value },
    } = e;
    setContentText(value);
  };

  const onClickShare = async () => {
    let fileUrl = "";
    if (imageUrl === null) alert("사진을 첨부해주세요");
    if (imageUrl !== null) {
      const fileRef = ref(storage, `${userData.uid}/${uuidv4()}`);
      const response = await uploadString(fileRef, imageUrl, "data_url");
      fileUrl = await getDownloadURL(response.ref);
    }
    await addDoc(collection(dbService, "content"), {
      text: contentText,
      createdAt: new Date().toLocaleString(),
      creatorId: userData.uid,
      emailId: userData.email.split("@")[0],
      imageUrl: fileUrl,
    });
    setOnModal(false);
    setImageUrl(null);
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <Container>
      {imageUrl !== null ? (
        <ModalBody width={40}>
          <Header>
            <Xbtn onClick={onClickClose} />
            <h1>새 게시물 만들기</h1>
            <button onClick={onClickShare}>공유하기</button>
          </Header>
          <Box>
            <ImgWrapper height={50}>
              <img src={imageUrl} alt="file" />
            </ImgWrapper>
            <Formwrapper>
              <UserInfobox>{userData.displayName}</UserInfobox>
              <textarea
                onChange={onChangeText}
                placeholder="문구 입력..."
                autoComplete="off"
                autoCorrect="off"
                maxLength="200"
              ></textarea>
            </Formwrapper>
          </Box>
        </ModalBody>
      ) : (
        <ModalBody width={40}>
          <Header>
            <Xbtn onClick={onClickClose} />
            <h1>새 게시물 만들기</h1>
            <button onClick={onClickShare}>공유하기</button>
          </Header>
          <ImgWrapper height={100}>
            <UploadIcon />
            <h1>사진과 동영상을 업로드 해보세요</h1>
            <button onClick={() => fileRef.current.click()}>
              컴퓨터에서 선택
            </button>
            <InputFile ref={fileRef} type="file" onChange={onClickFile} />
          </ImgWrapper>
        </ModalBody>
      )}
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  z-index: 3;
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

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: ${(props) => props.width}%;
  max-height: 600px;
  height: 100%;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;

const Box = styled.div`
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  height: 100%;
`;

const Formwrapper = styled.div`
  width: 100%;
  height: 50%;
  padding: 0 10px;
  textarea {
    margin-top: 10px;
    width: 100%;
    min-height: 28px;
    max-height: 200px;
    height: 100%;
    border: none;
    resize: none;
    outline: none;
    padding: 0px;
  }
`;
const UserInfobox = styled.div`
  display: flex;
`;

const ImgWrapper = styled.div`
  height: ${(props) => props.height}%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
  align-items: center;
  img {
    /* max-height: 540px;
    height: 100%;
    width: 100%; */
    height: 100%;
    width: 100%;
  }

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
const Header = styled.div`
  padding: 10px;
  border-bottom: 1px solid var(--border-color);
  align-items: center;
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    cursor: pointer;
    background-color: #ffffff;
    border: none;
    color: #0095f6;
  }
  svg {
    cursor: pointer;
  }
  h1 {
    white-space: nowrap;
    position: absolute;
    margin: auto;
    width: fit-content;
    left: 50%;
    right: 50%;
    top: 50%;
    bottom: 50;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
  @media screen and (max-width: 350px) {
    font-size: 12px;
  }
  @media screen and (max-width: 300px) {
    h1 {
      display: none;
    }
  }
`;

const InputFile = styled.input`
  display: none;
`;
