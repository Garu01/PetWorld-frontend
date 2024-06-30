import { FunctionComponent, useState, useCallback, Component } from "react";
import UserRow from "../components/UserRow";
import FrameComponent from "../components/FrameComponent";
import CreateAccount1 from "../components/CreateAccount1";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, Navigate } from "react-router-dom";
import PetService from "../services/pet.service";
import AuthService from "../services/auth.service";
import "./UploadPets.css";
import Header2 from "../components/Header2";
import HeaderTop from "../components/HeaderTop";
import { MenuItem, Select } from "@mui/material";
import FiletoBase64 from "../util/common/toBase64";

const UploadPets: FunctionComponent = () => {
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [checkVaccinated, setCheckVaccinated] = useState("false");

  const [image, setImage] = useState("");

  const storedUserData = localStorage.getItem("user");

  const userInfo = AuthService.getCurrentUser();

  // initialize value
  const initialValues = {
    user_id: userInfo.id,
    pet_type: "",
    pet_breed: "",
    pet_title: "",
    pet_color: "",
    location: "",
    price: 0.0,
    advertisement_type: "",
    contact_preference: "",
    date_of_birth: new Date("2000-01-01"),
    weight: "",
    sex: "",
    image: "",
    microchiped: "",
    vaccinated: "",
    wormed_flead: "",
    health_checked: "",
    seller_name: "",
    admin_check: false,
    available: false,
  };

  // function for post pet data to server
  const handleUpload = (formValue: {
    user_id: number;
    pet_type: string;
    pet_breed: string;
    pet_title: string;
    pet_color: string;
    location: string;
    price: number;
    advertisement_type: string;
    contact_preference: string;
    date_of_birth: Date;
    weight: string;
    sex: string;
    image: string;
    microchiped: string;
    vaccinated: string;
    wormed_flead: string;
    health_checked: string;
    seller_name: string;
    admin_check: boolean;
    available: boolean;
  }) => {
    const {
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
    } = formValue;

    // for (const key in formValue) {
    //   if (key === "image" && formValue[key]) {
    //     formData.append(key, formValue[key] as File);
    //   } else {
    //     formData.append(key, (formValue as any)[key]);
    //   }
    // }

    setMessage("");
    setSuccessful(false);

    PetService.upload(
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
      available
    ).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setSuccessful(false);
        setMessage(resMessage);
      }
    );
  };

  const [preview, setPreview] = useState("");
  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  ) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setFieldValue("image", file);
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () => setFieldValue('imageUrl', reader.result as string);
  //   }
  // };

  // const handleImageChange = async (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ): Promise<void> => {
  //   if (event.target.files && event.target.files[0]) {
  //     const imageBase64 = await FiletoBase64(event.target.files[0]);
  //     setImage(imageBase64);
  //   }
  //   console.log(image);
  // };

  const [newImage, setNewImage] = useState<string | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);

  // const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     const base64String = reader.result?.toString().split(",")[1];
  //     if (base64String) {
  //       setBase64Image(base64String);
  //       setNewImage(reader.result?.toString() || null);
  //       setFieldValue("image", base64String);
  //     }
  //   };

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <div className="upload-pets">
      <HeaderTop />
      <main className="user-dropdown-group">
        <div className="user-dropdown">
          <div className="dropdown-items">
            <UserRow />
            <FrameComponent />
          </div>
        </div>
        {/* <CreateAccount1 /> */}

        <Formik
          initialValues={initialValues}
          //validationSchema={validationSchema}
          onSubmit={handleUpload}
          enableReinitialize
        >
          {({ setFieldValue, handleChange }) => (
            <Form className="needs-validation" noValidate>
              {!successful && (
                <div className="form-row">
                  <div
                    className="form-group col-md-6"
                    style={{
                      marginLeft: "200px",
                      fontSize: "30px",
                      marginTop: "100px",
                    }}
                  >
                    <label htmlFor="pet_type">Pet type </label>
                    <Field name="pet_type" as="select">
                      <option value=""></option>
                      <option value="bird">Bird</option>
                      <option value="cat">Cat</option>
                      <option value="dog">Dog</option>
                      <option value="fish">Fish</option>
                    </Field>

                    {/* <ErrorMessage
                  name="email"
                  component="div"
                  className="alert alert-danger"
                /> */}
                  </div>

                  <div
                    className="col-md-4 mb-3"
                    style={{ marginLeft: "200px", marginTop: "20px" }}
                  >
                    <label htmlFor="pet_breed">Pet Breed</label>
                    <Field
                      name="pet_breed"
                      type="text"
                      className="form-control"
                      placeholder="Pet Breed"
                    />
                  </div>

                  <div
                    className="col-md-4 mb-3"
                    style={{ marginLeft: "200px", marginBottom: "20px" }}
                  >
                    <label htmlFor="pet_title">Pet title </label>
                    <Field
                      name="pet_title"
                      type="pet_title"
                      className="form-control"
                      placeholder="Pet title"
                    />
                    {/* <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                /> */}
                  </div>

                  <div
                    className="form-group col-md-6"
                    style={{ marginLeft: "200px" }}
                  >
                    <label htmlFor="pet_color">Pet Color</label>
                    <Field
                      name="pet_color"
                      type="text"
                      className="form-control"
                      placeholder="Pet color"
                    />
                    {/* <ErrorMessage
                  name="confirmPassWord"
                  component="div"
                  className="alert alert-danger"
                /> */}
                  </div>

                  <div
                    className="form-group col-md-6"
                    style={{ marginLeft: "200px" }}
                  >
                    <label htmlFor="location">Location </label>
                    <Field
                      name="location"
                      type="text"
                      className="form-control"
                      placeholder="Location"
                    />
                  </div>

                  <div
                    className="form-group col-md-6"
                    style={{ marginLeft: "200px" }}
                  >
                    <label htmlFor="price">Price </label>
                    <Field
                      name="price"
                      type="text"
                      className="form-control"
                      placeholder="Price"
                    />
                  </div>

                  <div
                    className="form-group col-md-6"
                    style={{ marginLeft: "200px" }}
                  >
                    <label htmlFor="seller_name">Seller Name </label>
                    <Field
                      name="seller_name"
                      type="text"
                      className="form-control"
                      placeholder="Seller Name"
                    />
                  </div>

                  <div
                    className="form-group col-md-6"
                    style={{ marginLeft: "200px" }}
                  >
                    <label htmlFor="advertisement_type">
                      Advertisement Type{" "}
                    </label>
                    <Field
                      name="advertisement_type"
                      type="text"
                      className="form-control"
                      placeholder="Advertisement type"
                    />
                  </div>

                  <div
                    className="form-group col-md-6"
                    style={{ marginLeft: "200px" }}
                  >
                    <label htmlFor="date_of_birth">Date of Birth </label>
                    <Field
                      name="date_of_birth"
                      type="text"
                      className="form-control"
                      placeholder="Date of birth"
                    />
                  </div>

                  <div
                    className="form-group col-md-6"
                    style={{ marginLeft: "200px" }}
                  >
                    <label htmlFor="contact_preference">
                      Contact Preference{" "}
                    </label>
                    <Field
                      name="contact_preference"
                      type="text"
                      className="form-control"
                      placeholder="Contact Preference"
                    />
                  </div>

                  <div
                    className="form-group col-md-6"
                    style={{ marginLeft: "200px" }}
                  >
                    <label htmlFor="weight">Weight </label>
                    <Field
                      name="weight"
                      type="number"
                      className="form-control"
                      placeholder=" weight"
                    />
                  </div>

                  <div
                    className="form-group col-md-6"
                    style={{ marginLeft: "200px" }}
                  >
                    <label htmlFor="sex">Sex </label>
                    <div role="group" aria-labelledby="my-radio-group"></div>
                    <label>
                      <Field type="radio" name="sex" value="male" />
                      Male
                    </label>
                    <label>
                      <Field type="radio" name="sex" value="female" />
                      Female
                    </label>
                  </div>

                  <div
                    className="form-group col-md-6"
                    style={{ marginLeft: "200px" }}
                  >
                    <label htmlFor="image">Image </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      // onChange={(event) => {
                      //   let reader = new FileReader();
                      //   reader.onloadend = () =>{
                      //     if(reader.readyState ===2){
                      //       setFieldValue("image", reader.result);
                      //     }
                      //   }
                      //   reader.readAsDataURL(event.target.files?.[0]);
                      // }}

                      // when upload function, this function will change image value to base64
                      onChange={async (event) => {
                        if (
                          event.currentTarget.files &&
                          event.currentTarget.files[0]
                        ) {
                          // FiletoBase64 : read in src/util/commom/toBase64
                          const base64 = await FiletoBase64(
                            event.currentTarget.files[0]
                          );
                          setFieldValue("image", base64);
                        }
                      }}
                      // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      //   const file = e.target.files?.[0];
                      //   const reader = new FileReader();

                      //   reader.onloadend = () => {
                      //     const base64String = reader.result
                      //       ?.toString()
                      //       .split(",")[1];
                      //     if (base64String) {
                      //       setBase64Image(base64String);
                      //       setNewImage(reader.result?.toString() || null);
                      //       setFieldValue("image", base64String);
                      //     }
                      //   };

                      //   if (file) {
                      //     reader.readAsDataURL(file);
                      //   }
                      // }}
                    />
                    {preview && <img src={preview} alt="Preview" width="100" />}
                  </div>

                  <div
                    className="form-group col-md-6"
                    style={{ marginLeft: "200px", marginTop: "15px" }}
                  >
                    <div id="my-radio-group">Microchiped</div>
                    <div role="group" aria-labelledby="my-radio-group">
                      <label>
                        <Field type="radio" name="microchiped" value="true" />
                        Yes
                      </label>
                      <label>
                        <Field type="radio" name="microchiped" value="false" />
                        No
                      </label>
                    </div>
                  </div>

                  <div
                    className="form-group col-md-6"
                    style={{ marginLeft: "200px", marginTop: "15px" }}
                  >
                    <div id="my-radio-group">Vaccinated</div>
                    <div role="group" aria-labelledby="my-radio-group">
                      <label>
                        <input type="radio" value="true" />
                        Yes
                      </label>
                      <label>
                        <input type="radio" name="vaccinated" value="false" />
                        No
                      </label>
                      <Field
                        type="input"
                        name="vaccinated"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFieldValue("vaccinated", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div
                    className="form-group col-md-6"
                    style={{ marginLeft: "200px", marginTop: "15px" }}
                  >
                    <div id="my-radio-group">Wormed flead</div>
                    <div role="group" aria-labelledby="my-radio-group">
                      <label>
                        <input type="radio" name="wormed_flead" value="true" />
                        Yes
                      </label>
                      <label>
                        <input type="radio" name="wormed_flead" value="false" />
                        No
                      </label>
                    </div>
                  </div>

                  <div
                    className="form-group col-md-6"
                    style={{ marginLeft: "200px", marginTop: "15px" }}
                  >
                    <div id="my-radio-group">Health Check</div>
                    <div role="group" aria-labelledby="my-radio-group">
                      <label>
                        <input type="radio" value="true" />
                        Yes
                      </label>
                      <label>
                        <input type="radio" value="false" />
                        No
                      </label>
                      <Field
                        type="input"
                        name="health_checked"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFieldValue("health_checked", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark btn-block"
                    style={{ marginLeft: "200px", marginTop: "15px" }}
                  >
                    UPLOAD PET
                  </button>
                </div>
              )}
              {message && (
                <div
                  className="form-group"
                  style={{ marginLeft: "200px", marginTop: "15px" }}
                >
                  <div
                    className={
                      successful ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};

export default UploadPets;
