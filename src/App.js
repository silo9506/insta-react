import { Fragment, useEffect, useState } from "react";
import { authService } from "./firebase";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [userLoding, setUserLoding] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        if (user.displayName === null) {
          const name = user.email.split("@")[0];
          user.displayName = name;
        }
        setUserData(user);
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setUserLoding(true);
    });
  }, []);
  console.log(userData);
  return (
    <Fragment>
      <GlobalStyles />
      {userLoding ? (
        <Router isAuth={isAuth} userData={userData} />
      ) : (
        <div>로딩</div>
      )}
    </Fragment>
  );
}

export default App;
