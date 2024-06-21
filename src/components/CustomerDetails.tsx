import { FunctionComponent } from "react";
import "./CustomerDetails.css";

export type CustomerDetailsType = {
  className?: string;
};

const CustomerDetails: FunctionComponent<CustomerDetailsType> = ({
  className = "",
}) => {
  return (
    <div className={`customer-details ${className}`}>
      <div className="customer-info">
        <h2 className="shipping">Shipping</h2>
      </div>
      <div className="last-name-input3">
        <div className="last-name-fields">
          <div className="last-name75">
            <input
              className="last-name76"
              placeholder="First Name"
              type="text"
            />
          </div>
          <div className="last-name77">
            <input
              className="last-name78"
              placeholder="Last Name"
              type="text"
            />
          </div>
        </div>
        <div className="last-name-fields1">
          <div className="last-name79">
            <input
              className="last-name80"
              placeholder="Phone number"
              type="text"
            />
          </div>
          <div className="last-name81">
            <input className="last-name82" placeholder="Email" type="text" />
          </div>
        </div>
        <div className="last-name83">
          <input className="last-name84" placeholder="Address" type="text" />
        </div>
        <div className="last-name-fields2">
          <div className="last-name85">
            <input className="last-name86" placeholder="City" type="text" />
          </div>
          <div className="last-name87">
            <input className="last-name88" placeholder="Country" type="text" />
          </div>
        </div>
      </div>
      <div className="payment-input">
        <div className="payment-fields">
          <div className="last-name89">
            <input
              className="last-name90"
              placeholder="Postal code"
              type="text"
            />
          </div>
          <div className="create-account5">
            <h2 className="payment1">Payment</h2>
            <div className="first-name-input1">
              <div className="first-name13">
                <input
                  className="first-name14"
                  placeholder="Credit Card number"
                  type="text"
                />
              </div>
              <div className="first-name15">
                <input
                  className="first-name16"
                  placeholder="Name on Card"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="login">
          <div className="create-account-button6">
            <div className="login-frame19">
              <b className="continue">CONTINUE</b>
            </div>
          </div>
          <div className="payment-button">
            <div className="first-name17">
              <input
                className="first-name18"
                placeholder="Expiration"
                type="text"
              />
            </div>
            <div className="first-name19">
              <input className="first-name20" placeholder="CVV" type="text" />
            </div>
            <div className="create-account-button7">
              <div className="login-frame20">
                <b className="pay-and-continue">Pay and Continue</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
