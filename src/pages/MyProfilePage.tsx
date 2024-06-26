import { Component, FunctionComponent, useEffect, useState } from "react";
import UserRow from "../components/UserRow";
import UserActions from "../components/UserActions";
import FirstName from "../components/FirstName";
import "./MyProfilePage.css";
import Header1 from "../components/Header1";
import HeaderTop from "../components/HeaderTop";
import axios from "axios";
import IUser from "../types/user.type";
import AuthService from "../services/auth.service";
import { Navigate } from "react-router-dom";
import Header2 from "../components/Header2";
import FrameComponent from "../components/FrameComponent";

type Props = {};

type State = {
  redirect: string | null;
  userReady: boolean;
  currentUser: IUser & { accessToken: string };
};
interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  address_line1: string;
  address_line2: string;
  postcode: string;
  phone_number: string;
  city: string;
  state_province: string;
  country: string;
}
const MyProfilePage: FunctionComponent = () => {
  const [users, setUsers] = useState<User>();
  const [error, setError] = useState("");

  const updateUserField = (field: keyof User, value: any) => {
    if (users) {
      setUsers({
        ...users,
        [field]: value,
      });
    }
  };

  const logOut = () => {
    AuthService.logout();
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Retrieve the stored user data from local storage
        const storedUserData = localStorage.getItem("user");
        if (!storedUserData) {
          setError("No user data found in local storage");
          return;
        }

        const parsedUserData = JSON.parse(storedUserData);
        if (!parsedUserData || !parsedUserData.email) {
          setError("Stored user data is invalid");
          return;
        }

        const storedEmail = parsedUserData.email;

        // Fetch users from the database
        const response = await axios.get("http://localhost:8080/users"); // Replace with your actual API endpoint
        const response_users = response.data;

        // Find the user with the matching email
        const matchedUser = response_users.find(
          (user: any) => user.email === storedEmail
        );

        if (matchedUser) {
          setUsers(matchedUser);
        } else {
          setError("No matching user found in the database");
        }
      } catch (error) {
        setError("Error fetching user data");
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <Header2 />
      <main className="user-dropdown-group">
        <div className="user-dropdown">
          <div className="dropdown-items">
            <UserRow />
            <FrameComponent />
          </div>
        </div>
        <form>
          <div className="form-row" style={{ marginTop: "100px" }}>
            <div
              className="form-group col-md-6"
              style={{ marginLeft: "200px" }}
            >
              <label htmlFor="email">Email </label>
              <input
                name="email"
                type="email"
                className="form-control"
                value={users?.email}
              />
              {/* <ErrorMessage
          name="email"
          component="div"
          className="alert alert-danger"
        /> */}
            </div>

            <div
              className="form-group col-md-6"
              style={{ marginLeft: "200px" }}
            >
              <label htmlFor="address_line1">Address Line 1</label>
              <input
                name="address_line1"
                type="text"
                className="form-control"
                value={users?.address_line1}
              />
            </div>

            <div
              className="form-group col-md-6"
              style={{ marginLeft: "200px" }}
            >
              <label htmlFor="address_line2">Address Line 2 </label>
              <input
                name="address_line2"
                type="text"
                className="form-control"
                value={users?.address_line2}
              />
            </div>

            <div
              className="form-group col-md-6"
              style={{ marginLeft: "200px" }}
            >
              <label htmlFor="first_name">First Name</label>
              <input
                name="first_name"
                type="text"
                className="form-control"
                value={users?.first_name}
              />
            </div>

            <div
              className="form-group col-md-6"
              style={{ marginLeft: "200px" }}
            >
              <label htmlFor="last_name">Last Name </label>
              <input
                name="last_name"
                type="text"
                className="form-control"
                value={users?.last_name}
              />
            </div>

            <div
              className="form-group col-md-6"
              style={{ marginLeft: "200px" }}
            >
              <label htmlFor="phone_number">Phone Number </label>
              <input
                name="phone_number"
                type="text"
                className="form-control"
                value={users?.phone_number}
              />
            </div>

            <div
              className="form-group col-md-6"
              style={{ marginLeft: "200px" }}
            >
              <label htmlFor="city">City </label>
              <input
                name="city"
                type="text"
                className="form-control"
                value={users?.city}
              />
            </div>

            <div
              className="form-group col-md-6"
              style={{ marginLeft: "200px" }}
            >
              <label htmlFor="state_province">State / Province </label>
              <input
                name="state_province"
                type="text"
                className="form-control"
                value={users?.state_province}
              />
            </div>

            <div
              className="form-group col-md-6"
              style={{ marginLeft: "200px" }}
            >
              <label htmlFor="country">Country </label>
              <input
                name="country"
                type="text"
                className="form-control"
                value={users?.country}
              />
            </div>

            <div
              className="form-group col-md-6"
              style={{ marginLeft: "200px" }}
            >
              <label htmlFor="postcode">Postcode </label>
              <input
                name="postcode"
                type="text"
                className="form-control"
                value={users?.postcode}
              />
            </div>
          </div>
        </form>
      </main>

      <div
        className="hello-jack-wrapper"
        style={{ marginLeft: "650px", marginTop: "200px", fontSize: "200%" }}
      >
        <strong className="hello-jack1">Hello ,{users?.first_name}</strong>
      </div>

      {/* <div className="user-profile">
        <div className="user-profile-child" />
        <div className="user-profile-item" />
        <div className="my-profile">My Profile</div>
        <img className="profile-1-icon" alt="" src="/profile-1@2x.png" />
      </div>
      <img className="user-1-icon" alt="" src="/user-1@2x.png" />
      <b className="user-name">{users?.first_name}</b>
      <div className="your-orders">
        <div className="your-orders1">Your orders</div>
        <img className="package-1-icon" alt="" src="/package-1@2x.png" />
      </div>
      <div className="address4">
        <div className="addresses">Addresses</div>
        <img className="location-1-icon" alt="" src="/location-1@2x.png" />
      </div>
      <div className="payment">
        <div className="payment-methods">Payment Methods</div>
        <img className="credit-card-1-icon" alt="" src="/creditcard-1@2x.png" />
      </div>
      <div className="logout">
        <a href="/login-register-page" className="nav-link" onClick={logOut}>
          {" "}
          Log out
        </a>
        <img className="logout-1-icon" alt="" src="/logout-1@2x.png" />
      </div>
      <div className="payment1">
        <div className="manage-pets">Manage Pets</div>
        <img className="pawprint-2-icon" alt="" src="/pawprint-2@2x.png" />
      </div> */}
    </div>
  );
};
export default MyProfilePage;
