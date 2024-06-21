import { FunctionComponent } from "react";
import Content1 from "../components/Content1";
import "./PetsDetails.css";

const PetsDetails: FunctionComponent = () => {
  return (
    <div className="pets-details">
      <header className="header6">
        <div className="pawprint-1-wrapper3">
          <img
            className="pawprint-1-icon6"
            loading="lazy"
            alt=""
            src="/pawprint-1@2x.png"
          />
        </div>
        <div className="navigation1">
          <div className="home-menu">
            <div className="home-link1">
              <h1 className="petworld6">PetWorld</h1>
            </div>
            <h2 className="home6">Home</h2>
          </div>
        </div>
        <div className="about-menu">
          <h2 className="about-us6">About us</h2>
        </div>
        <div className="service-menu">
          <h2 className="service6">Service</h2>
        </div>
        <div className="search6">
          <div className="search-box6">
            <input
              className="im-searching-for3"
              placeholder="Im searching for?"
              type="text"
            />
          </div>
        </div>
        <div className="search-button1">
          <div className="search7">
            <img
              className="icon-search6"
              loading="lazy"
              alt=""
              src="/icon-search@2x.png"
            />
          </div>
        </div>
        <div className="account-menu-wrapper">
          <div className="account-menu">
            <div className="account-link1">
              <img
                className="image-1-icon6"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
            <b className="my-account6">My Account</b>
          </div>
        </div>
        <div className="cart-menu">
          <img
            className="shopping-cart-1-icon6"
            loading="lazy"
            alt=""
            src="/shoppingcart-1@2x.png"
          />
          <div className="cart-wrapper2">
            <b className="cart6">Cart</b>
          </div>
        </div>
      </header>
      <Content1 />
    </div>
  );
};

export default PetsDetails;
