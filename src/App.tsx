import { useEffect, Component, useState } from "react";
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
import AuthService from "./services/auth.service";
//import "bootstrap/dist/css/bootstrap.min.css";
import FirebaseImageUpload from "./util/config/FirebaseImageUpload";
import CatPage from "./pages/CatPage";
import FishPage from "./pages/FishPage";
import BirdPage from "./pages/BirdPage";
import { Switch } from "@mui/material";
import Header2 from "./components/Header2";
import IUser from "./types/user.type";
import ProtectedRoute from "./components/ProtectedRoutes";
import Header1 from "./components/Header1";
import ManagePetDetails from "./pages/ManagePetDetails";
type State = {
  isAdmin: boolean;
  User: IUser | undefined;
};
function App() {
  const [user, setUser] = useState<State>({ isAdmin: true, User: undefined });
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const currentUser = AuthService.getCurrentUser();
  // if (currentUser) {
  //   setUser({
  //     isAdmin: currentUser.roles.includes("ROLE_ADMIN"),
  //     User: currentUser,
  //   });
  // }
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
      {/* <Route
          path="/staff-ui-for-confirm-seller-pets"
          element={
            <ProtectedRoute
              isAdmin={
                (user.isAdmin = currentUser.roles.includes("ROLE_ADMIN"))
              }
            >
              <StaffUIForConfirmSellerPe />
            </ProtectedRoute>
          }
        /> */}
      <Route element={user.isAdmin}>
        <Route
          path="/staff-ui-for-confirm-seller-pets"
          element={<StaffUIForConfirmSellerPe />}
        />
      </Route>
      <Route path="/ui-for-staff" element={<UIForStaff />} />
      <Route path="/dog-page" element={<DogPage />} />
      <Route path="/cat-page" element={<CatPage />} />
      <Route path="/fish-page" element={<FishPage />} />
      <Route path="/bird-page" element={<BirdPage />} />
      <Route path="/about-us-page" element={<AboutUsPage />} />
      <Route path="/upload-pets" element={<UploadPets />} />
      <Route path="/payment-method" element={<PaymentMethod />} />
      <Route path="/my-profile-page" element={<MyProfilePage />} />
      <Route path="/pets-details" element={<PetsDetails />} />
      <Route path="/cart-view" element={<CartView />} />
      <Route path="/check-out" element={<CheckOut />} />
      <Route path="/test" element={<FirebaseImageUpload />} />
      <Route path="/products/:productId" element={<PetsDetails />} />
      <Route path="/manage-pet/:productId" element={<ManagePetDetails />} />
      <Route path="/manage-pets" element={<ManagingPets />} />
    </Routes>
  );
}

export default App;
