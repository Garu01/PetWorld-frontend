import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Dog.css";

export type DogType = {
  className?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Dog: FunctionComponent<DogType> = ({
  className = "",
  propWidth,
  propMinWidth,
}) => {
  const dogStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  return (
    <div className={`dog2 ${className}`} style={dogStyle}>
      <img
        className="image-icon"
        loading="lazy"
        alt=""
        src="/image-12@2x.png"
      />
      <div className="dog-inner">
        <div className="frame-parent17">
          <div className="mix-colour-pug-parent">
            <b className="mix-colour-pug">Mix Colour Pug</b>
            <div className="reference-id-peptdyztjt">
              Reference ID: PEPTDYZTJT
            </div>
          </div>
          <div className="div10">$500</div>
        </div>
      </div>
    </div>
  );
};

export default Dog;
