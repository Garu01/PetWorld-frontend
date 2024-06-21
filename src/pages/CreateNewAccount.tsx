import { FunctionComponent } from "react";
import CreateAccount from "../components/CreateAccount";
import MainHeader from "../components/MainHeader";
import Header1 from "../components/Header1";
import "./CreateNewAccount.css";

const CreateNewAccount: FunctionComponent = () => {
  return (
    <div className="create-new-account">
      <CreateAccount />
      <b className="create-account">Create Account</b>
      <MainHeader />
      <Header1 />
    </div>
  );
};

export default CreateNewAccount;
