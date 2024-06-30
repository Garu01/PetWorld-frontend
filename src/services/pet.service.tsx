import axios from "axios";

const API_URL = "http://localhost:8080/api/";
// send all pet information to server
type available = {
  id: number;
  available: string;
};
class PetService {
  upload(
    user_id: number,
    pet_type: string,
    pet_breed: string,
    pet_title: string,
    pet_color: string,
    location: string,
    price: number,
    advertisement_type: string,
    contact_preference: string,
    date_of_birth: Date,
    weight: string,
    sex: string,
    image: string,
    microchiped: string,
    vaccinated: string,
    wormed_flead: string,
    health_checked: string,
    seller_name: string,
    admin_check: boolean,
    available: boolean
  ) {
    return axios.post(API_URL + "pets", {
      user_id,
      pet_type,
      pet_breed,
      pet_title,
      pet_color,
      location,
      price,
      advertisement_type,
      contact_preference,
      date_of_birth,
      weight,
      sex,
      image,
      microchiped,
      vaccinated,
      wormed_flead,
      health_checked,
      seller_name,
      admin_check,
      available,
    });
  }

  // available(available: any) {
  //   return axios.post(API_URL + "adminCheck", {
  //     available,
  //   });
  // }

  remove(id: number) {
    return axios.post(API_URL + "adminRemove", {
      id,
    });
  }
}

export default new PetService();
