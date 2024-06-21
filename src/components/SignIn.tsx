import { FunctionComponent, useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

export type SignInType = {
  className?: string;
};

const SignIn: FunctionComponent<SignInType> = ({ className = "" }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onLoginButtonClick = useCallback(() => {
    navigate("/user-main-page");
  }, [navigate]);

  return (
    <div className={`sign-in1 ${className}`}>
      <TextField
        className="username-frame"
        color="primary"
        size="medium"
        placeholder="Email"
        variant="outlined"
        type="email"
        sx={{ "& .MuiInputBase-root": { height: "49px" }, width: "406px" }}
      />
      <TextField
        className="password-frame"
        color="primary"
        placeholder="Password"
        variant="filled"
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
      <div className="email-address">Email address:</div>
      <div className="password">Password:</div>
      <button className="login-button1" onClick={onLoginButtonClick}>
        <div className="login-frame10" />
        <b className="sign-in2">SIGN IN</b>
      </button>
      <div className="forgotpass">
        <div className="forgot-your-password">FORGOT YOUR PASSWORD?</div>
      </div>
    </div>
  );
};

export default SignIn;
