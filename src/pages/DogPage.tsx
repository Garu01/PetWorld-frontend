import { FunctionComponent } from "react";
import Header2 from "../components/Header2";
import FrameComponent1 from "../components/FrameComponent1";
import Dog from "../components/Dog";
import EndPage1 from "../components/EndPage1";
import "./DogPage.css";

const DogPage: FunctionComponent = () => {
  return (
    <div className="dog-page">
      <Header2 />
      <section className="dog-page-inner">
        <div className="frame-parent">
          <FrameComponent1 />
          <div className="dog-parent">
            <Dog propWidth="380px" propMinWidth="361px" />
            <Dog propWidth="380px" propMinWidth="361px" />
            <Dog propWidth="380px" propMinWidth="361px" />
            <Dog propWidth="380px" propMinWidth="361px" />
            <Dog propWidth="380px" propMinWidth="361px" />
            <Dog propWidth="380px" propMinWidth="361px" />
            <Dog propWidth="380px" propMinWidth="361px" />
            <Dog propWidth="380px" propMinWidth="361px" />
          </div>
        </div>
      </section>
      <EndPage1 />
    </div>
  );
};

export default DogPage;
