import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./UserRow.css";

export type UserRowType = {
  className?: string;

  /** Style props */
  userRowPadding?: CSSProperties["padding"];
};

const UserRow: FunctionComponent<UserRowType> = ({
  className = "",
  userRowPadding,
}) => {
  const userRowStyle: CSSProperties = useMemo(() => {
    return {
      padding: userRowPadding,
    };
  }, [userRowPadding]);

  return (
    <div className={`user-row ${className}`} style={userRowStyle}>
      <div className="user-icon-row-parent">
        <div className="user-icon-row">
          <img
            className="user-1-icon2"
            loading="lazy"
            alt=""
            src="/user-1@2x.png"
          />
        </div>
        <h3 className="user-name2">Jack</h3>
      </div>
    </div>
  );
};

export default UserRow;
