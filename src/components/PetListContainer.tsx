import { FunctionComponent } from "react";
import RowItems1 from "./RowItems1";
import RowItems from "./RowItems";
import ActionItems from "./ActionItems";
import "./PetListContainer.css";

export type PetListContainerType = {
  className?: string;
};

const PetListContainer: FunctionComponent<PetListContainerType> = ({
  className = "",
}) => {
  return (
    <div className={`pet-list-container ${className}`}>
      <div className="pet-list-header">
        <div className="pet-list-title">
          <h1 className="list-of-my">List of my Pets</h1>
        </div>
        <div className="upload-pet">
          <div className="upload-container">
            <b className="upload-pet1">UPLOAD PET</b>
          </div>
        </div>
      </div>
      <div className="pet-table">
        <div className="lop-frame">
          <div className="table-header1">
            <div className="number">
              <div className="header-values">#</div>
            </div>
            <div className="table-header-items">
              <div className="div2">1</div>
            </div>
            <div className="table-header-items1">
              <div className="div3">2</div>
            </div>
            <div className="table-header-items2">
              <div className="div4">3</div>
            </div>
            <div className="table-header-items3">
              <div className="div5">4</div>
            </div>
            <div className="table-header-items4">
              <div className="div6">5</div>
            </div>
            <div className="table-header-items5">
              <div className="div7">6</div>
            </div>
            <div className="table-header-items6">
              <div className="div8">7</div>
            </div>
          </div>
          <div className="table-row">
            <div className="pet-details">
              <div className="image2">
                <div className="image3">Image</div>
              </div>
              <div className="title2">
                <div className="title3">Title</div>
              </div>
              <div className="refid">
                <div className="reference-id2">Reference ID</div>
              </div>
              <div className="price2">
                <div className="price3">Price</div>
              </div>
              <div className="pageview">
                <div className="page-views">Page Views</div>
              </div>
            </div>
            <RowItems1
              alaskanMalamuteSledDog1="/alaskanmalamutesleddog-1@2x.png"
              petOriginPlaceholder="Alaska"
              pETSMOJ3B="PETSMOJ3B"
              rowItemPlaceholder="700$"
              rowItemTwoPlaceholder="20"
            />
            <RowItems1
              alaskanMalamuteSledDog1="/britishshorthair1-1@2x.png"
              petOriginPlaceholder="British Shorthair Cat"
              pETSMOJ3B="PETSCAY7A"
              rowItemPlaceholder="500$"
              rowItemTwoPlaceholder="140"
              propWidth="calc(100% - 13px)"
              propFlex="0.8935"
              propPadding="var(--padding-40xl) var(--padding-4xs)"
            />
            <RowItems />
            <RowItems />
            <RowItems />
            <RowItems />
            <RowItems />
          </div>
          <div className="pet-actions">
            <div className="timestamp">
              <div className="sold">
                <div className="sold1">Sold</div>
              </div>
              <div className="createdon">
                <div className="created-on2">Created On</div>
              </div>
              <input className="timestamp-child" type="text" />
            </div>
            <div className="action-items1">
              <div className="action-icons">
                <input className="square-1" type="checkbox" />
              </div>
              <div className="time">
                <div className="pm">
                  <p className="p3">03-06-2024</p>
                  <p className="pm1">05:12 PM</p>
                </div>
              </div>
              <div className="edit1">
                <div className="editbutton1">
                  <div className="login-frame8">
                    <div className="edit2">EDIT</div>
                  </div>
                </div>
                <div className="removebutton1">
                  <div className="login-frame9">
                    <div className="remove2">REMOVE</div>
                  </div>
                </div>
              </div>
            </div>
            <ActionItems prop="15-04-2024" />
            <ActionItems prop="02-02-2023" />
            <ActionItems prop="02-02-2023" />
            <ActionItems prop="02-02-2023" />
            <ActionItems prop="02-02-2023" />
            <ActionItems prop="02-02-2023" />
          </div>
        </div>
        <div className="bottom">
          <div className="footer">
            <div className="blank">
              <div className="footer-space">1</div>
              <div className="footer-space1">2</div>
              <div className="footer-space2">...</div>
            </div>
          </div>
          <div className="next-page1">
            <div className="next2">Next</div>
            <div className="nextarrow-frame">
              <img
                className="nextarrow-icon2"
                loading="lazy"
                alt=""
                src="/nextarrow@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetListContainer;
