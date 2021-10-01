import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import dish from "../assets/shrimp-pad-thai-white-background.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";
import maindish from "../assets/Menu/Group 2273.png";

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "20px",
      slidesToShow: 1,
      speed: 500,
    };
    return (
      <div className="container_s">
        <Slider {...settings}>
          <div>
            <button
              type="button"
              class="image-gallery-icon image-gallery-left-nav"
              aria-label="Previous Slide"
            >
              <svg
                class="image-gallery-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="6 0 12 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div className="d-flex">
              <div className="col-lg-6">
                <img src={maindish} alt="" width="90%" />
              </div>
              <div className="col-lg-6 d-flex pt-5">
                <div className="dish_description_right">
                  <span className="dish_name">
                    SMOKED FISH SERVED WITH <br />
                    ITALIAN SALAD
                  </span>
                  <div
                    className="d-flex justify-content-between mt-4"
                    style={{ width: "75%" }}
                  >
                    {/* <div className="dish_features">
                      <span className="nutri_value"> 80gm </span>
                      <span
                        style={{
                          borderBottom: "1px solid #55575A",
                          color: "#18a3b8",
                        }}
                      >
                        CARBS
                      </span>
                    </div> */}
                    <div className="dish_features_1">
                      <span className="nutri_value"> 80gm </span>
                      <span
                        style={{
                          borderBottom: "1px solid #55575A",
                          color: "#18a3b8",
                          fontSize: "8px",
                        }}
                      >
                        CARBS
                      </span>
                    </div>
                    <div className="dish_features_1">
                      <span className="nutri_value"> 17gm </span> <br />
                      <span
                        style={{
                          borderBottom: "1px solid #55575A",
                          color: "#18a3b8",
                          fontSize: "8px",
                        }}
                      >
                        PROTEIN
                      </span>
                    </div>
                    <div className="dish_features_1">
                      <span className="nutri_value"> 300 </span> <br />
                      <span
                        style={{
                          borderBottom: "1px solid #55575A",
                          color: "#18a3b8",
                          fontSize: "8px",
                        }}
                      >
                        CALORIES
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <div className="col-lg-6">
                <img src={dish} alt="" width="90%" />
              </div>
              <div className="col-lg-6 d-flex pt-5">
                <div className="dish_description_right">
                  <span className="dish_name">
                    SMOKED FISH SERVED WITH <br />
                    ITALIAN SALAD
                  </span>
                  <div
                    className="d-flex justify-content-between mt-4"
                    style={{ width: "75%" }}
                  >
                    <div className="dish_features">
                      <span className="nutri_value">80gms</span>
                      <br />
                      <span
                        style={{
                          borderBottom: "1px solid #55575A",
                          color: "#18a3b8",
                        }}
                      >
                        CARBS
                      </span>
                    </div>
                    <div className="dish_features">
                      <span className="nutri_value">17gms</span> <br />
                      <span
                        style={{
                          borderBottom: "1px solid ##55575A",
                          color: "#18a3b8",
                        }}
                      >
                        PROTEIN
                      </span>
                    </div>
                    <div className="dish_features">
                      <span className="nutri_value">300</span>
                      <br />
                      <span
                        style={{
                          borderBottom: "1px solid #55575A",
                          color: "#18a3ba",
                        }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <div className="col-lg-6">
                <img src={maindish} alt="" width="90%" />
              </div>
              <div className="col-lg-6 d-flex pt-5">
                <div className="dish_description_right">
                  <span className="dish_name">
                    SMOKED FISH SERVED WITH <br />
                    ITALIAN SALAD
                  </span>
                  <div
                    className="d-flex justify-content-between mt-4"
                    style={{ width: "75%" }}
                  >
                    <div className="dish_features">
                      <span className="nutri_value">80gm</span>
                      <br />
                      <span
                        style={{
                          borderBottom: "1px solid #55575A",
                          color: "#18a3b8",
                        }}
                      >
                        CARBS
                      </span>
                    </div>
                    <div className="dish_features">
                      <span className="nutri_value"> 17gms </span> <br />
                      <span
                        style={{
                          borderBottom: "1px solid #55575A",
                          color: "#18a3b8",
                        }}
                      >
                        PROTEIN
                      </span>
                    </div>
                    <div className="dish_features">
                      <span className="nutri_value"> 300 </span> <br />
                      <span
                        style={{
                          borderBottom: "1px solid #55575A",
                          color: "#18a3b8",
                        }}
                      >
                        CALORIES
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <div className="col-lg-6">
                <img src={dish} alt="" width="90%" />
              </div>
              <div className="col-lg-6 d-flex pt-5">
                <div className="dish_description_right">
                  <span className="dish_name">
                    SMOKED FISH SERVED WITH <br />
                    ITALIAN SALAD
                  </span>
                  <div
                    className="d-flex justify-content-between mt-4"
                    style={{ width: "75%" }}
                  >
                    <div className="dish_features">
                      <span className="nutri_value">80gm </span>
                      <br />
                      <span
                        style={{
                          borderBottom: "1px solid #55575A",
                          color: "#18a3b8",
                        }}
                      >
                        CARBS
                      </span>
                    </div>
                    <div className="dish_features">
                      <span className="nutri_value"> 17gms </span> <br />
                      <span
                        style={{
                          borderBottom: "1px solid #55575A",
                          color: "#18a3b8",
                        }}
                      >
                        PROTEIN
                      </span>
                    </div>
                    <div className="dish_features">
                      <span className="nutri_value"> 300 </span> <br />
                      <span
                        style={{
                          borderBottom: "1px solid #55575A",
                          color: "#18a3b8",
                        }}
                      >
                        CALORIES
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="https://placehold.jp/3d4070/ffffff/300x150.png?text=5" />
          </div>
        </Slider>
      </div>
    );
  }
}
export default SimpleSlider;
