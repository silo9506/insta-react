import { BrowserRouter, Routes, Route } from "react-router-dom";
import OutletComponent from "./components/templates/OutletComponent";
import Auth from "./components/templates/Auth";
import Home from "./components/templates/Home";

const Router = ({ isAuth, userData }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {!isAuth ? (
          <Route path="/" element={<Auth />} />
        ) : (
          <Route path="/" element={<OutletComponent userData={userData} />}>
            <Route index element={<Home />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
