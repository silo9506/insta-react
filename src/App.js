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
      {userLoding ? <Router isAuth={isAuth} /> : <div>로딩</div>}
    </Fragment>
  );
}

export default App;
