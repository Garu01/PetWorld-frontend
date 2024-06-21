import { FunctionComponent } from "react";
import UserRow from "../components/UserRow";
import FrameComponent from "../components/FrameComponent";
import CreateAccount1 from "../components/CreateAccount1";
import "./UploadPets.css";

const UploadPets: FunctionComponent = () => {
  return (
    <div className="upload-pets">
      <header className="header3">
        <div className="pawprint-1-frame">
          <img
            className="pawprint-1-icon3"
            loading="lazy"
            alt=""
            src="/pawprint-1@2x.png"
          />
        </div>
        <div className="header-inner">
          <div className="home-links-group">
            <div className="home-links2">
              <h1 className="petworld3">PetWorld</h1>
            </div>
            <h3 className="home3">Home</h3>
          </div>
        </div>
        <div className="about-us-frame">
          <h3 className="about-us3">About us</h3>
        </div>
        <div className="service-frame">
          <h3 className="service3">Service</h3>
        </div>
        <div className="header-child">
          <div className="search-box-parent">
            <input
              className="search-box3"
              placeholder="Im searching for?"
              type="text"
            />
            <div className="search3">
              <img className="icon-search3" alt="" src="/icon-search@2x.png" />
            </div>
          </div>
        </div>
        <div className="header-inner1">
          <div className="account-elements-parent">
            <div className="account-elements">
              <img
                className="image-1-icon3"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
            <b className="my-account3">My Account</b>
          </div>
        </div>
        <div className="shopping-cart-1-container">
          <img
            className="shopping-cart-1-icon3"
            loading="lazy"
            alt=""
            src="/shoppingcart-1@2x.png"
          />
          <div className="cart-container">
            <b className="cart3">Cart</b>
          </div>
        </div>
      </header>
      <main className="user-dropdown-group">
        <div className="user-dropdown">
          <div className="dropdown-items">
            <UserRow />
            <FrameComponent />
          </div>
        </div>
        <CreateAccount1 />
      </main>
    </div>
  );
};

export default UploadPets;
