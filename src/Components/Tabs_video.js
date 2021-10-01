import React from "react";
import { useState } from "react";
// import "./App.css";
import videoth2 from "../assets/video thumbnail/2.jpg";
import videoth1 from "../assets/video thumbnail/Image Place Holder.jpg";
import videoth3 from "../assets/video thumbnail/3.jpg";
import videoth4 from "../assets/video thumbnail/4.jpg";
import videoth5 from "../assets/video thumbnail/5.jpg";
import ProductList from "./ProductList";
// import VPlayer from "react-vplayer";
function Tabs_video() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="" style={{ width: "100%" }}>
      <div className="bloc-tabs_video">
        <div
          style={{
            position: "absolute",
            right: "4.5em",
            textAlign: "left",
            fontSize: "10px",
            color: "#5A5B5E",
          }}
        >
          <span>SEARCH</span>
          <div className="d-flex">
            <input
              type="text"
              name=""
              id=""
              className="plating_videos_search_box"
            />
            <i
              className="fa fa-search plating_gourmey_search_icon"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <button
          className={
            toggleState === 1 ? "tabs_video active-tabss" : "tabs_video"
          }
          onClick={() => toggleTab(1)}
        >
          All
        </button>
        <button
          className={
            toggleState === 2 ? "tabs_video active-tabss" : "tabs_video"
          }
          onClick={() => toggleTab(2)}
        >
          Indian
        </button>
        <button
          className={
            toggleState === 3 ? "tabs_video active-tabss" : "tabs_video"
          }
          onClick={() => toggleTab(3)}
        >
          Panasian
        </button>
        <button
          className={
            toggleState === 4 ? "tabs_video active-tabss" : "tabs_video"
          }
          onClick={() => toggleTab(4)}
        >
          Continental
        </button>
        <button
          className={
            toggleState === 5 ? "tabs_video active-tabss" : "tabs_video"
          }
          onClick={() => toggleTab(5)}
        >
          Desserts
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {/* <div className="row">
            <div className="col-10 col-md-4 col-lg-4">
              <div>
                <img
                  src={videoth1}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
                <span className="tag_strip">Pasta with chicken</span>
              </div>
            </div>
            <div className="col-10 col-md-4 col-lg-4">
              <div>
                <img
                  src={videoth2}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
                <span className="tag_strip">Pasta with chicken</span>
              </div>
            </div>
            <div className="col-10 col-md-4 col-lg-4">
              <div>
                <img
                  src={videoth3}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
                <span className="tag_strip">Pasta with chicken</span>
              </div>
            </div>
            <div className="col-10 col-md-4 col-lg-4">
              <div>
                <img
                  src={videoth4}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
                <span className="tag_strip">Pasta with chicken</span>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img
                  src={videoth5}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
                <span className="tag_strip">Pasta with chicken</span>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img
                  src={videoth1}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
                <span className="tag_strip">Pasta with chicken</span>
              </div>
            </div>
          </div> */}
          <ProductList />

          {/* <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p> */}
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {/* <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p> */}
          {/* <div className="row">
            <div className="col-10 col-md-4 col-lg-4">
              <div>
                <img
                  src={videoth1}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
                <span className="tag_strip">Pasta with chicken</span>
              </div>
            </div>
            <div className="col-10 col-md-4 col-lg-4">
              <div style={{ position: "relative" }}>
                <img
                  src={videoth2}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
                <span className="tag_strip">Pasta with chicken</span>
              </div>
            </div>
            <div className="col-10 col-md-4 col-lg-4">
              <div>
                <img
                  src={videoth3}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
              </div>
            </div>
            <div className="col-10 col-md-4 col-lg-4">
              <div>
                <img
                  src={videoth4}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
              </div>
            </div>
          </div> */}
          <ProductList />
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="row">
            <div className="col-10 col-md-4 col-lg-4">
              <div>
                <img
                  src={videoth1}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
                <span className="tag_strip">Pasta with chicken</span>
              </div>
            </div>
            <div className="col-10 col-md-4 col-lg-4">
              <div style={{ position: "relative" }}>
                <img
                  src={videoth2}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
                <span className="tag_strip">Pasta with chicken</span>
              </div>
            </div>
            <div className="col-10 col-md-4 col-lg-4">
              <div>
                <img
                  src={videoth3}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
              </div>
            </div>
            <div className="col-10 col-md-4 col-lg-4">
              <div>
                <img
                  src={videoth4}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img
                  src={videoth5}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
              </div>
            </div>
          </div>
          {/* <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p> */}
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          {/* <h2>Content 4</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p> */}
          <div className="row">
            <div className="col-10 col-md-4 col-lg-4">
              <div>
                <img
                  src={videoth1}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
                <span className="tag_strip">Pasta with chicken</span>
              </div>
            </div>
            <div className="col-10 col-md-4 col-lg-4">
              <div style={{ position: "relative" }}>
                <img
                  src={videoth2}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
                <span className="tag_strip">Pasta with chicken</span>
              </div>
            </div>
            <div className="col-10 col-md-4 col-lg-4">
              <div>
                <img
                  src={videoth3}
                  alt=""
                  width="100%"
                  className="plating_g_video"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          {/* <h2>Content 5</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Tabs_video;
