import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import PetListContainer from "../components/PetListContainer";
import "./ManagingPets.css";

const ManagingPets: FunctionComponent = () => {
  return (
    <div className="managing-pets">
      <Header />
      <main className="user-container-parent">
        <div className="user-container">
          <div className="user-info">
            <div className="user-name-container">
              <div className="user-1-wrapper">
                <img
                  className="user-1-icon"
                  loading="lazy"
                  alt=""
                  src="/user-1@2x.png"
                />
              </div>
              <h2 className="user-name">Jack</h2>
            </div>
          </div>
          <FrameComponent />
        </div>
        <section className="pet-list-container-wrapper">
          <PetListContainer />
        </section>
      </main>
    </div>
  );
};

export default ManagingPets;
