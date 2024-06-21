import { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderTop.css";
import path from "path";

export type HeaderTopType = {
  className?: string;
};

const HeaderTop: FunctionComponent<HeaderTopType> = ({ className = "" }) => {
  const navigate = useNavigate();
  const onButtonClick = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <div className={`header11 ${className}`}>
      <div className="logo">
        <div className="petworld10">PetWorld</div>
        <img
          className="pawprint-1-icon12"
          loading="lazy"
          alt=""
          src="/pawprint-12@2x.png"
        />
      </div>
      <div className="cart-button1">
        <b className="cart11">Cart</b>
        <img
          className="shopping-cart-1-icon11"
          loading="lazy"
          alt=""
          src="/shoppingcart-1@2x.png"
        />
      </div>

      <div
        className="login-button"
        onClick={() => onButtonClick("/login-register-page")}
      >
        <img
          className="image-1-icon11"
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
        <b className="login-register">Login / Register</b>
      </div>

      <div className="home-page-button" onClick={() => onButtonClick("/")}>
        <b className="home10">Home</b>
      </div>

      <div
        className="about-us-button"
        onClick={() => onButtonClick("/about-us-page")}
      >
        <b className="about-us10">About us</b>
      </div>
      <b className="service10">Service</b>
      <div className="search-bar3">
        <div className="search-box10" />
        <div className="search12">
          <img className="icon-search10" alt="" src="/icon-search@2x.png" />
        </div>
        <div className="im-searching-for4">Im searching for?</div>
      </div>
    </div>
  );
};

export default HeaderTop;
