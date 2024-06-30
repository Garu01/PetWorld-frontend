import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import "./FrameComponent.css";
import { useNavigate } from "react-router-dom";
export type FrameComponentType = {
  className?: string;

  /** Style props */
  headerNavigationMargin?: CSSProperties["margin"];

  /** Action props */
  onNavigationLinksContainerClick?: () => void;
  onNavigationLinksContainerClick1?: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  headerNavigationMargin,
  onNavigationLinksContainerClick,
  onNavigationLinksContainerClick1,
}) => {
  const petWorldStyle: CSSProperties = useMemo(() => {
    return {
      margin: headerNavigationMargin,
    };
  }, [headerNavigationMargin]);

  const navigate = useNavigate();

  const onMyProfileClick = useCallback(() => {
    navigate("/my-profile-page");
  }, [navigate]);

  const onCartButtonContainerClick = useCallback(() => {
    navigate("/cart-view");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/about-us-page");
  }, [navigate]);

  return (
    <div className={`profile-link-container-parent ${className}`}>
      <div className="profile-link-container">
        <div className="profile-link">
          <div className="profile-1-wrapper">
            <img
              className="profile-1-icon2"
              loading="lazy"
              alt=""
              src="/profile-1@2x.png"
            />
          </div>
          <div className="my-profile4">My Profile</div>
        </div>
      </div>
      <div className="user-actions1">
        <div className="order-address">
          <div className="order-address-container">
            <div className="order-address-items">
              <img
                className="package-1-icon"
                loading="lazy"
                alt=""
                src="/package-1@2x.png"
              />
            </div>
            <div className="your-orders">Your orders</div>
          </div>
        </div>
        <div className="order-address1">
          <div className="frame-parent11">
            <div className="location-1-wrapper">
              <img
                className="location-1-icon"
                loading="lazy"
                alt=""
                src="/location-1@2x.png"
              />
            </div>
            <div className="addresses">Addresses</div>
          </div>
        </div>
        <div className="payment-pets">
          <div className="payment-container">
            <div className="payment-items">
              <div className="payment-method2">
                <div className="credit-card-1-wrapper">
                  <img
                    className="credit-card-1-icon"
                    loading="lazy"
                    alt=""
                    src="/creditcard-1@2x.png"
                  />
                </div>
                <div className="payment-methods">Payment Methods</div>
              </div>
            </div>
            <div className="manage-pets">
              <div className="manage-pets-container" />
              <div className="manage-pets-link">
                <div className="pawprint-2-wrapper">
                  <img
                    className="pawprint-2-icon"
                    loading="lazy"
                    alt=""
                    src="/pawprint-2@2x.png"
                  />
                </div>
                <div className="manage-pets1">Manage Pets</div>
              </div>
            </div>
          </div>
          <div className="logout-container-wrapper">
            <div className="logout-container">
              <div className="logout-link">
                <input className="logout-1" type="checkbox" />
              </div>
              <div className="logout">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
