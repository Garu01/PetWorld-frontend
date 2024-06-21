import { FunctionComponent } from "react";
import UserRow from "../components/UserRow";
import UserActions from "../components/UserActions";
import FirstName from "../components/FirstName";
import "./MyProfilePage.css";

const MyProfilePage: FunctionComponent = () => {
  return (
    <div className="my-profile-page">
      <header className="header5">
        <div className="pawprint-1-wrapper2">
          <img
            className="pawprint-1-icon5"
            loading="lazy"
            alt=""
            src="/pawprint-1@2x.png"
          />
        </div>
        <div className="home-navigation">
          <div className="home-buttons">
            <div className="site-links">
              <h1 className="petworld5">PetWorld</h1>
            </div>
            <h3 className="home5">Home</h3>
          </div>
        </div>
        <div className="about-us-wrapper2">
          <h3 className="about-us5">About us</h3>
        </div>
        <div className="service-wrapper2">
          <h3 className="service5">Service</h3>
        </div>
        <div className="search-bar-container">
          <div className="search-bar1">
            <input
              className="search-box5"
              placeholder="Im searching for?"
              type="text"
            />
            <div className="search5">
              <img className="icon-search5" alt="" src="/icon-search@2x.png" />
            </div>
          </div>
        </div>
        <div className="account-info-container">
          <div className="account-info3">
            <div className="account-details2">
              <img
                className="image-1-icon5"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
            <b className="my-account5">My Account</b>
          </div>
        </div>
        <div className="shopping-cart-1-parent2">
          <img
            className="shopping-cart-1-icon5"
            loading="lazy"
            alt=""
            src="/shoppingcart-1@2x.png"
          />
          <div className="cart-wrapper1">
            <b className="cart5">Cart</b>
          </div>
        </div>
      </header>
      <div className="profile-info-parent">
        <div className="profile-info">
          <UserRow userRowPadding="0px var(--padding-base) 0px var(--padding-lg)" />
          <div className="user-settings">
            <div className="user-profile">
              <div className="placeholder" />
              <div className="image-container-parent">
                <div className="image-container">
                  <img
                    className="profile-1-icon1"
                    loading="lazy"
                    alt=""
                    src="/profile-1@2x.png"
                  />
                </div>
                <div className="my-profile3">My Profile</div>
              </div>
            </div>
            <div className="user-actions">
              <UserActions propAlignSelf="unset" propFlex="1" />
            </div>
          </div>
        </div>
        <div className="frame-wrapper2">
          <div className="frame-parent9">
            <div className="hello-jack-wrapper">
              <h1 className="hello-jack1">Hello Jack,</h1>
            </div>
            <div className="information1">
              <FirstName firstName="First Name" firstNamePlaceholder="JACK" />
              <FirstName
                firstName="Last Name"
                firstNamePlaceholder="WHITE"
                propMarginTop="-6px"
                propPadding="var(--padding-3xs) var(--padding-base) var(--padding-sm)"
                propWidth="104px"
              />
              <FirstName
                firstName="Email Address"
                firstNamePlaceholder="jackwhite6969@gmail.com"
                propMarginTop="-6px"
                propPadding="var(--padding-3xs) var(--padding-lg) var(--padding-sm)"
                propWidth="274px"
              />
              <FirstName
                firstName="Phone Number"
                firstNamePlaceholder="+84948389321"
                propMarginTop="-6px"
                propPadding="var(--padding-3xs) var(--padding-sm) var(--padding-sm)"
                propWidth="274px"
              />
              <FirstName
                firstName="Password"
                firstNamePlaceholder="***********"
                propMarginTop="-6px"
                propPadding="var(--padding-3xs) var(--padding-lg) var(--padding-sm)"
                propWidth="150px"
              />
              <div className="address">
                <div className="address1">Address</div>
                <div className="frame-parent10">
                  <div className="address-wrapper">
                    <div className="address2">
                      <div className="address3">
                        Huizener Str.60, Bad Vilbel, Germany
                      </div>
                    </div>
                  </div>
                  <b className="change">CHANGE</b>
                </div>
              </div>
              <FirstName
                firstName="Postcode"
                firstNamePlaceholder="61118"
                propMarginTop="-6px"
                propPadding="var(--padding-3xs) var(--padding-smi) var(--padding-sm)"
                propWidth="88px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
