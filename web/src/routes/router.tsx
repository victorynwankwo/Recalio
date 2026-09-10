import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Signup from "../Pages/Auth/Signup.tsx";
import Login from "../Pages/Auth/Login.tsx";
import Notfound from "./Notfound.tsx";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Notfound />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
