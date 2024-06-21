import { FunctionComponent } from "react";
import "./Header1.css";

export type Header1Type = {
  className?: string;
};

const Header1: FunctionComponent<Header1Type> = ({ className = "" }) => {
  return (
    <div className={`header10 ${className}`}>
      <div className="sale">
        <b className="sale1">SALE</b>
        <img
          className="downward-arrow-1-icon"
          alt=""
          src="/downwardarrow-1@2x.png"
        />
      </div>
      <div className="dog">
        <b className="dog1">DOG</b>
        <img
          className="downward-arrow-1-icon1"
          alt=""
          src="/downwardarrow-1@2x.png"
        />
      </div>
      <div className="cat">
        <b className="cat1">CAT</b>
        <img
          className="downward-arrow-2-icon"
          alt=""
          src="/downwardarrow-2@2x.png"
        />
      </div>
      <div className="fish">
        <b className="fish1">FISH</b>
        <img
          className="downward-arrow-3-icon"
          alt=""
          src="/downwardarrow-2@2x.png"
        />
      </div>
      <div className="bird">
        <b className="bird1">BIRD</b>
        <img
          className="downward-arrow-4-icon"
          alt=""
          src="/downwardarrow-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Header1;
