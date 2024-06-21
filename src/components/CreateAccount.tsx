import { FunctionComponent, useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import EmailAddress from "./EmailAddress";
import "./CreateAccount.css";

export type CreateAccountType = {
  className?: string;
};

const CreateAccount: FunctionComponent<CreateAccountType> = ({
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={`create-account1 ${className}`}>
      <div className="create-account-button4">
        <div className="login-frame11" />
        <b className="create-account2">CREATE ACCOUNT</b>
      </div>
      <EmailAddress emailAddress="Email address:" />
      <div className="password1">
        <TextField
          className="password-frame1"
          color="primary"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleShowPasswordClick}
                  aria-label="toggle password visibility"
                >
                  <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ "& .MuiInputBase-root": { height: "49px" }, width: "406px" }}
        />
        <div className="required12">REQUIRED</div>
        <div className="password2">Password:</div>
      </div>
      <div className="confirm-pass">
        <div className="required13">REQUIRED</div>
        <div className="confirm-password">Confirm Password:</div>
        <TextField
          className="confirmpass-frame"
          color="primary"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleShowPasswordClick}
                  aria-label="toggle password visibility"
                >
                  <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ "& .MuiInputBase-root": { height: "49px" }, width: "406px" }}
        />
      </div>
      <div className="first-name4">
        <div className="required14">REQUIRED</div>
        <div className="first-name5">First Name:</div>
        <TextField
          className="firstname-frame"
          color="primary"
          variant="outlined"
          type="text"
          sx={{ "& .MuiInputBase-root": { height: "49px" }, width: "406px" }}
        />
      </div>
      <div className="last-name36">
        <div className="required15">REQUIRED</div>
        <div className="last-name37">Last Name:</div>
        <TextField
          className="lastname-frame"
          color="primary"
          variant="outlined"
          type="text"
          sx={{ "& .MuiInputBase-root": { height: "49px" }, width: "406px" }}
        />
      </div>
      <div className="phone-number">
        <div className="required16">REQUIRED</div>
        <div className="phone-number1">Phone Number:</div>
        <TextField
          className="phone-frame"
          color="primary"
          variant="outlined"
          type="tel"
          sx={{ "& .MuiInputBase-root": { height: "49px" }, width: "406px" }}
        />
      </div>
      <EmailAddress
        emailAddress="Address Line 1:"
        propLeft="calc(50% + 56.5px)"
        propLeft1="calc(50% - 220.5px)"
      />
      <div className="address-line-2">
        <TextField
          className="password-frame2"
          color="primary"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "49px" }, width: "406px" }}
        />
        <div className="address-line-21">Address Line 2:</div>
      </div>
      <div className="city">
        <div className="required17">REQUIRED</div>
        <div className="city1">City:</div>
        <TextField
          className="city2"
          color="primary"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "49px" }, width: "406px" }}
        />
      </div>
      <div className="state-province">
        <div className="required18">REQUIRED</div>
        <div className="state-province1">State / Province:</div>
        <TextField
          className="stateprovince"
          color="primary"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "49px" }, width: "406px" }}
        />
      </div>
      <div className="postcode">
        <div className="required19">REQUIRED</div>
        <div className="postcode1">Postcode:</div>
        <TextField
          className="postcode-frame"
          color="primary"
          variant="outlined"
          type="number"
          sx={{ "& .MuiInputBase-root": { height: "49px" }, width: "406px" }}
        />
      </div>
      <div className="country">
        <div className="required20">REQUIRED</div>
        <div className="country1">Country:</div>
        <FormControl
          className="country-frame"
          variant="outlined"
          sx={{
            borderRadius: "0px 0px 0px 0px",
            width: "401px",
            height: "43px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "43px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "43px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "43px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "43px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary">Country</InputLabel>
          <Select
            color="primary"
            size="medium"
            label="Country"
            disableUnderline
            displayEmpty
          >
            <MenuItem value="Vietnam">Vietnam</MenuItem>
            <MenuItem value="China">China</MenuItem>
            <MenuItem value="Korea">Korea</MenuItem>
            <MenuItem value="Japan">Japan</MenuItem>
            <MenuItem value="Thailand">Thailand</MenuItem>
            <MenuItem value="Singapore">Singapore</MenuItem>
            <MenuItem value="Malaysia">Malaysia</MenuItem>
            <MenuItem value="Indonesia">Indonesia</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
    </div>
  );
};

export default CreateAccount;
