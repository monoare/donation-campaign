import Home from "../Pages/Home/Home";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
