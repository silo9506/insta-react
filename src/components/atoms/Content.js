import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { Fragment, useState } from "react";
import styled from "styled-components";
import { dbService, storageService } from "../../firebase";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as Comment } from "../../assets/comment.svg";
import { ReactComponent as Airplane } from "../../assets/airplane.svg";
import { ReactComponent as Flage } from "../../assets/flage.svg";
import { ReactComponent as Admin } from "../../assets/profile.svg";

const Content = ({ contents, isOwner, userData }) => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(contents.text);

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };
  const onClickDelete = async () => {
    const ok = window.confirm(`해당 게시물을 삭제하시겠습니까?`);
    console.log(ok);
    if (ok) {
      // 삭제
      await deleteDoc(doc(dbService, `content/${contents.id}`));
      await deleteObject(ref(storageService, contents.imageUrl));
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    updateDoc(doc(dbService, `content/${contents.id}`), { text: newText });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewText(value);
  };

  let Data = new Date();
  console.log(Data);
  return (
    <Container>
      <Fragment>
        <Header>
          <div>
            <Admin />
            {userData.displayName}
          </div>
          {isOwner && (
            <Btnbox>
              {!editing ? (
                <button onClick={toggleEditing}>수정</button>
              ) : (
                <button onClick={toggleEditing}>취소</button>
              )}
              <button onClick={onClickDelete}>삭제</button>
            </Btnbox>
          )}
        </Header>
        {contents.imageUrl && (
          <Imgbox>
            <img src={contents.imageUrl} alt="img" />
          </Imgbox>
        )}

        <form onSubmit={onSubmit}>
          <Textbox>
            <Icons>
              <Heart />
              <Comment />
              <Airplane />
              <Flage />
            </Icons>
            {editing ? (
              <div>
                <textarea
                  type="text"
                  value={newText}
                  required
                  onChange={onChange}
                  autoComplete="off"
                  autoCorrect="off"
                  maxLength="200"
                />
                <input type="submit" value="수정 완료" />
              </div>
            ) : (
              <div>
                <p>
                  <strong>{contents.emailId}:</strong>
                  {contents.text}
                </p>
              </div>
            )}
          </Textbox>
          <CreatedAt>{contents.createdAt}</CreatedAt>
        </form>
      </Fragment>
    </Container>
  );
};
export default Content;

const Container = styled.div`
  background-color: #ffffff;

  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  margin-top: 20px;
`;
const Header = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  background-color: #ffffff;
  border-radius: 12px;
  > div {
    display: flex;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }
`;
const Imgbox = styled.div`
  img {
    width: 600px;
    height: 350px;
  }
`;

const Btnbox = styled.div``;

const Textbox = styled.div`
  min-height: 150px;
  div {
    display: flex;
    padding: 0 10px;
  }
  p {
    display: flex;
    align-items: center;
  }
  textarea {
    margin: 0 10px;
    width: 100%;
    min-height: 100px;
    max-height: 200px;
    height: 100%;
    border: none;
    resize: none;
    outline: none;
    padding: 0px;
  }
`;

const Icons = styled.div`
  display: flex;
  svg {
    width: 24px;
    height: 24px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  svg + svg {
    margin-left: 12px;
  }
  svg:last-child {
    margin-left: auto;
  }
`;

const CreatedAt = styled.div`
  border: none;
  margin: 10px 10px;
  width: fit-content;
  font-size: 11px;
`;
