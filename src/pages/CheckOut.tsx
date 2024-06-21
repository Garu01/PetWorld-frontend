import { FunctionComponent } from "react";
import CustomerDetails from "../components/CustomerDetails";
import OrderItems from "../components/OrderItems";
import "./CheckOut.css";

const CheckOut: FunctionComponent = () => {
  return (
    <div className="check-out">
      <header className="header8">
        <div className="pawprint-1-wrapper5">
          <img
            className="pawprint-1-icon8"
            loading="lazy"
            alt=""
            src="/pawprint-1@2x.png"
          />
        </div>
        <div className="navigation2">
          <div className="home-menu1">
            <div className="home-link2">
              <h1 className="petworld8">PetWorld</h1>
            </div>
            <h3 className="home8">Home</h3>
          </div>
        </div>
        <div className="about-menu1">
          <h3 className="about-us8">About us</h3>
        </div>
        <div className="service-menu1">
          <h3 className="service8">Service</h3>
        </div>
        <div className="search9">
          <div className="search-bar2">
            <input
              className="search-box8"
              placeholder="Im searching for?"
              type="text"
            />
            <div className="search10">
              <img className="icon-search8" alt="" src="/icon-search@2x.png" />
            </div>
          </div>
        </div>
        <div className="account1">
          <div className="account-info4">
            <div className="account-image1">
              <img
                className="image-1-icon8"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
            <b className="my-account8">My Account</b>
          </div>
        </div>
        <div className="cart8">
          <img
            className="shopping-cart-1-icon8"
            loading="lazy"
            alt=""
            src="/shoppingcart-1@2x.png"
          />
          <div className="cart-label2">
            <b className="cart9">Cart</b>
          </div>
        </div>
      </header>
      <div className="checkout-menu">
        <h1 className="check-out1">Check Out</h1>
      </div>
      <section className="checkout-content">
        <div className="checkout-form">
          <CustomerDetails />
        </div>
        <div className="order">
          <div className="order-details">
            <b className="order-summary">Order Summary</b>
            <div className="edit-cart">Edit Cart</div>
          </div>
          <OrderItems />
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
