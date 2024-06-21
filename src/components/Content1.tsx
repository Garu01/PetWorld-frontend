import { FunctionComponent } from "react";
import "./Content1.css";

export type Content1Type = {
  className?: string;
};

const Content1: FunctionComponent<Content1Type> = ({ className = "" }) => {
  return (
    <section className={`content3 ${className}`}>
      <div className="pet-details-header-parent">
        <div className="pet-details-header">
          <h1 className="pets-details1">Pets Details</h1>
        </div>
        <div className="pet-info">
          <div className="create-account4">
            <div className="pet-overview">
              <div className="pug-parent">
                <h1 className="pug">Pug</h1>
                <div className="listing-id-peptdyztjt">
                  Listing ID: PEPTDYZTJT
                </div>
              </div>
            </div>
            <div className="separator">
              <div className="separator-child" />
            </div>
            <div className="pet-details1">
              <div className="frame-parent23">
                <div className="pet-image-wrapper">
                  <img
                    className="pet-image-icon"
                    loading="lazy"
                    alt=""
                    src="/202301231036531832546-1@2x.png"
                  />
                </div>
                <div className="more-info-parent">
                  <div className="more-info">More Info</div>
                  <div className="frame-parent24">
                    <div className="pet-color-mix-colours-adverti-wrapper">
                      <div className="pet-color-mix-container">
                        <p className="pet-color-mix">Pet color: Mix Colours</p>
                        <p className="advertiser-individual">
                          Advertiser: Individual
                        </p>
                        <p className="seller-id-at13">Seller ID: #AT13</p>
                        <p className="pets-in-litter">
                          Pets in Litter: 3 Male / 3 Female
                        </p>
                        <p className="age-01-year">
                          Age: 01 Year 04 Month(s) 27 Day(s)
                        </p>
                        <p className="dob-07-01-2023">DOB: 07-01-2023</p>
                        <p className="ready-to-leave">
                          Ready To Leave: 07-07-2024
                        </p>
                      </div>
                    </div>
                    <div className="description">Description</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owner-info">
            <div className="owner-details">
              <div className="jack-w-parent">
                <div className="jack-w">JACK W.</div>
                <b className="owner-location">$500.00</b>
              </div>
              <div className="add-to-cart-button-wrapper">
                <button className="add-to-cart-button">
                  <img
                    className="shopping-cart-2-icon"
                    alt=""
                    src="/shoppingcart-2@2x.png"
                  />
                  <b className="add-to-cart">Add to Cart</b>
                </button>
              </div>
            </div>
            <div className="additional-info">
              <div className="separator1" />
              <div className="description1">Description</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content1;
