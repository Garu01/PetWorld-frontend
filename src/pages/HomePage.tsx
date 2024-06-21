import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import HeaderTop from "../components/HeaderTop";
import SHOPBYCATEGORY from "../components/SHOPBYCATEGORY";
import EndPage from "../components/EndPage";
import "./HomePage.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className="homepage">
      <Header1 />
      <HeaderTop />
      <div className="wallpaper">
        <img
          className="dcxc355vmaabb5d-1-icon"
          alt=""
          src="/dcxc355vmaabb5d-1@2x.png"
        />
      </div>
      <SHOPBYCATEGORY />
      <EndPage />
    </div>
  );
};

export default HomePage;
