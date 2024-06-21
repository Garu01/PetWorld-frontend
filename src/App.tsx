import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ManagingPets from "./pages/ManagingPets";
import HomePage from "./pages/HomePage";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import CreateNewAccount from "./pages/CreateNewAccount";
import UserMainPage from "./pages/UserMainPage";
import StaffUIForConfirmSellerPe from "./pages/StaffUIForConfirmSellerPe";
import UIForStaff from "./pages/UIForStaff";
import DogPage from "./pages/DogPage";
import AboutUsPage from "./pages/AboutUsPage";
import UploadPets from "./pages/UploadPets";
import PaymentMethod from "./pages/PaymentMethod";
import MyProfilePage from "./pages/MyProfilePage";
import PetsDetails from "./pages/PetsDetails";
import CartView from "./pages/CartView";
import CheckOut from "./pages/CheckOut";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/login-register-page":
        title = "";
        metaDescription = "";
        break;
      case "/create-new-account":
        title = "";
        metaDescription = "";
        break;
      case "/user-main-page":
        title = "";
        metaDescription = "";
        break;
      case "/staff-ui-for-confirm-seller-pets":
        title = "";
        metaDescription = "";
        break;
      case "/ui-for-staff":
        title = "";
        metaDescription = "";
        break;
      case "/dog-page":
        title = "";
        metaDescription = "";
        break;
      case "/about-us-page":
        title = "";
        metaDescription = "";
        break;
      case "/upload-pets":
        title = "";
        metaDescription = "";
        break;
      case "/payment-method":
        title = "";
        metaDescription = "";
        break;
      case "/my-profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/pets-details":
        title = "";
        metaDescription = "";
        break;
      case "/cart-view":
        title = "";
        metaDescription = "";
        break;
      case "/check-out":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/login-register-page" element={<LoginRegisterPage />} />
      <Route path="/create-new-account" element={<CreateNewAccount />} />
      <Route path="/user-main-page" element={<UserMainPage />} />
      <Route
        path="/staff-ui-for-confirm-seller-pets"
        element={<StaffUIForConfirmSellerPe />}
      />
      <Route path="/ui-for-staff" element={<UIForStaff />} />
      <Route path="/dog-page" element={<DogPage />} />
      <Route path="/about-us-page" element={<AboutUsPage />} />
      <Route path="/upload-pets" element={<UploadPets />} />
      <Route path="/payment-method" element={<PaymentMethod />} />
      <Route path="/my-profile-page" element={<MyProfilePage />} />
      <Route path="/pets-details" element={<PetsDetails />} />
      <Route path="/cart-view" element={<CartView />} />
      <Route path="/check-out" element={<CheckOut />} />
    </Routes>
  );
}
export default App;
