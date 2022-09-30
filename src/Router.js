import { BrowserRouter, Routes, Route } from "react-router-dom";

import InstaLogin from "./components/pages/insta/Login";
import InstaSigup from "./components/pages/insta/Sigup";
import Index from "./components/pages/insta/Index";
import InstMain from "./components/pages/insta/Main";
const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/login" element={<InstaLogin />} />
        <Route path="/signup" element={<InstaSigup />} />
        <Route path="/main" element={<InstMain />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
