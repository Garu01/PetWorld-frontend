import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

// send email and password to server, if ok sv response accessToken and store user data in local storage
class AuthService {
  login(email: string, password: string) {
    return axios
      .post(API_URL + "signin", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
  // remove user data from local storage
  logout() {
    localStorage.removeItem("user");
  }

  // send information for register to sever to save in database
  register(
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    phone_number: string,
    address_line1: string,
    address_line2: string,
    city: string,
    state_province: string,
    country: string,
    postcode: string
  ) {
    return axios.post(API_URL + "signup", {
      email,
      password,
      first_name,
      last_name,
      phone_number,
      address_line1,
      address_line2,
      city,
      state_province,
      country,
      postcode,
    });
  }

  // get user information from local storage
  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }

  getCurrentShoppingCart() {
    const userStr = localStorage.getItem("shopping_cart");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();
