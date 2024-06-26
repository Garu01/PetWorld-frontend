import axios from "axios";

const API_URL = "http://localhost:8080/api/";

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
    image: File | null,
    microchiped: boolean,
    vaccinated: boolean,
    wormed_flead: boolean,
    health_checked: boolean,
    seller_name: string
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
    });
  }
}

export default new PetService();
