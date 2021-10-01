import { useState } from "react";
import React from "react";
// import ReactSimpleCarousel from "react-plain-carousel";
// import dish from "../assets/shrimp-pad-thai-white-background.png";
// import flavour1 from "../assets/flavour-1.png";
import indiandish from "../assets/Menu/pngaaa.png";
// import maindish from "../assets/Menu/Group 2273.png";
import "../styles.css";
import DishsliderComponent from "./Dishslider";

function Tab() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="" style={{ width: "80%" }}>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <DishsliderComponent />
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          {/* <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p> */}
          <DishsliderComponent />
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <DishsliderComponent />
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <DishsliderComponent />
        </div>
      </div>
      <div className="bloc-tabs">
        <div className="dish_description_leftpart">
          <span>
            An option to choose from various
            <br />
            cuisine across the globe
          </span>
        </div>
        <div className="d-flex dish_variety_tabs_section">
          <button
            className={
              toggleState === 1
                ? "tabs active-tabs d-flex flex-column text-center"
                : "tabs d-flex flex-column text-center"
            }
            onClick={() => toggleTab(1)}
          >
            <img
              src={indiandish}
              alt=""
              width="100%"
              className="dishes_variety"
            />
            <div className="w-100 pt-2 mb-4">
              <span className="variety_heading">INDIAN</span>
            </div>
          </button>
          <button
            className={
              toggleState === 2
                ? "tabs active-tabs d-flex flex-column text-center"
                : "tabs d-flex flex-column text-center"
            }
            onClick={() => toggleTab(2)}
          >
            <img
              src={indiandish}
              alt=""
              width="100%"
              className="dishes_variety"
            />
            <div className="w-100 pt-2 mb-4">
              <span className="variety_heading">PANASIAN</span>
            </div>
          </button>
          <button
            className={
              toggleState === 3
                ? "tabs active-tabs d-flex flex-column text-center"
                : "tabs d-flex flex-column text-center"
            }
            onClick={() => toggleTab(3)}
          >
            <img
              src={indiandish}
              alt=""
              width="100%"
              className="dishes_variety"
            />
            <div className="w-100 pt-2 mb-4">
              <span className="variety_heading">CONTINENTAL</span>
            </div>
          </button>
          <button
            className={
              toggleState === 4
                ? "tabs active-tabs d-flex flex-column text-center"
                : "tabs d-flex flex-column text-center"
            }
            onClick={() => toggleTab(4)}
          >
            <img
              src={indiandish}
              alt=""
              width="100%"
              className="dishes_variety"
            />
            <div className="w-100 pt-2 mb-4">
              <span className="variety_heading">DESSERTS</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Tab;
