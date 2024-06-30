import { FunctionComponent } from "react";
import "./EndPage.css";

export type EndPageType = {
  className?: string;
};

const EndPage: FunctionComponent<EndPageType> = ({ className = "" }) => {
  return (
    <div className={`end-page ${className}`}>
      <div className="intro">
        <b className="petworld11">PetWorld</b>
        <div className="petworld-is-one">
          PetWorld is one of Vietnam’s leading online pet shops. Pet owners can
          browse and buy from a vast range of competitively priced pet food and
          supplies and have them shipped right to your door anywhere in Vietnam.
        </div>
      </div>
      <div className="quick-links">
        <b className="quick-links1">Quick Links</b>
        <div className="dogs">Dogs</div>
        <div className="cats">Cats</div>
        <div className="birds">Birds</div>
        <div className="fish3">Fish</div>
      </div>
      <div className="helpspt">
        <b className="help-support">{`Help & Support`}</b>
        <div className="track-your-order">Track your order</div>
        <div className="delivery-return">{`Delivery & Return`}</div>
        <div className="contact-us">Contact Us</div>
        <div className="faqs">FAQs</div>
      </div>
      <div className="get-in-touch">
        <b className="get-in-touch1">Get In Touch</b>
        <div className="div9">012-788-9999</div>
        <img className="image-2-icon" alt="" src="/image-2@2x.png" />
        <img className="image-3-icon" alt="" src="/image-3@2x.png" />
        <div className="servicepetworldcom">service@petworld.com</div>
      </div>
    </div>
  );
};

export default EndPage;
