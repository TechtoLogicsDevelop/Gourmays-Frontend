import React from "react";
import ReactDOM from "react-dom";
import ScrollSnap from "scroll-snap";
import fb from "./assets/1.svg";
import Tabs from "./Components/Tab";
import abtvid from "./assets/videos/about-video.mp4";
import insta from "./assets/2.svg";
import yt from "./assets/3.svg";
import "./styles.css";
import hum from "./assets/menu.png";
import first_icon from "./assets/icon-1.png";
import sec_icon from "./assets/icon-2.png";
import thrid_icon from "./assets/icon-3.png";
import TabV from "./Components/Tabs_video";
import logo from "./assets/Group1669.png";
import mobileSteps from "./assets/3 easy steps & function/step-1mobile.jpg";
import mobileapp from "./assets/app download and footer/405c.png";
import qrcode from "./assets/app download and footer/qr.png";
import playstorelgo from "./assets/app download and footer/g12.png";
import appleplaystore from "./assets/app download and footer/Group 2271.png";
import footerlogo from "./assets/app download and footer/Group 1669.svg";
import deliverybag from "./assets/subscription/Delivery_Bag_1.png";
import subscriptiondish from "./assets/Menu/pngaaa.png";
const snapConfig = {
  scrollSnapDestination: "0% 100%",
  scrollTimeout: 1,
  scrollTime: 300,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenuBar: false,
      showContactUsForm: false,
      showGourmeyVideo: false,
      showAboutUs: false,
    };
  }
  container = React.createRef();

  bindScrollSnap() {
    function callback() {
      // optional callback
    }

    const element = this.container.current;
    const snapObject = new ScrollSnap(element, snapConfig);
    snapObject.bind(callback);
  }

  componentDidMount() {
    this.bindScrollSnap();
  }

  render() {
    function changeText(text) {
      var display = document.getElementById("text-display");
      // display.innerHTML = "";
      display.innerHTML = "Fill in your <br> details";
      display.style.color = "#18a3b8";
      display.style.fontSize = "18px";
      display.style.textAlign = "center";
    }
    function changeback(text) {
      var display = document.getElementById("text-display");
      // display.innerHTML = "";
      display.innerHTML = "STEP-1";
      display.style.color = "#7d7d7d";
      display.style.fontSize = "30px";
    }
    function changeText1(text) {
      var display = document.getElementById("text-display1");
      // display.innerHTML = "";
      display.innerHTML = "2. Select Dishes of <br> your choice";
      display.style.color = "#18a3b8";
      display.style.fontSize = "18px";
      display.style.textAlign = "center";
    }
    function changeback1(text) {
      var display = document.getElementById("text-display1");
      // display.innerHTML = "";
      display.innerHTML = "STEP-2";
      display.style.color = "#7d7d7d";
      display.style.fontSize = "30px";
    }
    function changeText2(text) {
      var display = document.getElementById("text-display2");
      // display.innerHTML = "";
      display.innerHTML = "3. Order it";
      display.style.color = "#18a3b8";
      display.style.fontSize = "18px";
      display.style.textAlign = "center";
    }
    function changeback2(text) {
      var display = document.getElementById("text-display2");
      display.innerHTML = "";
      display.innerHTML = "STEP-3";
      display.style.color = "#7d7d7d";
      display.style.fontSize = "30px";
    }
    return (
      <div id="container" ref={this.container}>
        <div className="page first-page">
          <div className="container main_body1">
            <div className="humberger_menu">
              <img
                className="humberger_icon"
                src={hum}
                alt=""
                width="70%"
                onClick={() =>
                  this.setState({ showMenuBar: !this.state.showMenuBar })
                }
              />
            </div>
            {this.state.showMenuBar && (
              <div className="navbar_stripe">
                <div className="d-flex justify-content-center align-items-end">
                  <div className="" style={{ width: "100%" }}>
                    <div className="row text-black">
                      <div className="col-md-2 d-flex justify-content-center">
                        <span
                          className="menu_items"
                          onClick={() =>
                            this.setState({
                              showContactUsForm: false,
                              showMenuBar: false,
                              showGourmeyVideo: false,
                              showAboutUs: false,
                            })
                          }
                        >
                          Home
                        </span>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <span
                          className="menu_items"
                          onClick={() =>
                            this.setState({
                              showAboutUs: true,
                              showMenuBar: false,
                              showGourmeyVideo: false,
                              showContactUsForm: false,
                            })
                          }
                        >
                          About Us
                        </span>
                      </div>
                      <div className="col-md-3 d-flex justify-content-center">
                        <span className="menu_items">Support Pantry</span>
                      </div>
                      <div className="col-md-3 d-flex justify-content-center">
                        <span
                          className="menu_items"
                          onClick={() =>
                            this.setState({
                              // showGourmeyVideo: !this.state.showGourmeyVideo,
                              showGourmeyVideo: true,
                              showMenuBar: false,
                              showContactUsForm: false,
                              showAboutUs: false,
                            })
                          }
                        >
                          Plating Videos
                        </span>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <span
                          className="menu_items"
                          onClick={() =>
                            this.setState({
                              // showContactUsForm: !this.state.showContactUsForm,
                              showContactUsForm: true,
                              showMenuBar: false,
                              showGourmeyVideo: false,
                              showAboutUs: false,
                            })
                          }
                        >
                          Contact us
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {this.state.showAboutUs && (
              <div className="aboutus_overlay">
                <h2>about us</h2>
              </div>
            )}
            {this.state.showGourmeyVideo && (
              <div className="plating_video_overlay">
                <div className="text-center">
                  <h2 className="plating_gourmeys_head">Plating Gourmay's</h2>
                  <p className="plating_gourmeys_para">
                    is simply dummy text of the printing and typesetting
                    industry.
                    <br />
                    Lorem Ipsum has been the industry's standard dummy
                  </p>
                  {/* <span
                    onClick={() =>
                      this.setState({
                        showContactUsForm: false,
                        showMenuBar: false,
                        showGourmeyVideo: false,
                      })
                    }
                  >
                    X
                  </span> */}
                  <div className="row justify-content-center">
                    <div className="col-md-10">
                      <div>
                        <TabV />
                      </div>
                      <div>{/* <ProductList /> */}</div>
                      {/* <div className="row">
                        <div className="col-10 col-md-4 col-lg-4">
                          <div>
                            <img
                              src={videoth1}
                              alt=""
                              width="100%"
                              className="plating_g_video"
                            />
                            <span className="tag_strip">
                              Pasta with chicken
                            </span>
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
                            <span className="tag_strip">
                              Pasta with chicken
                            </span>
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
                        <div className="col-md-4">
                          <div>
                            <img
                              src={videoth1}
                              alt=""
                              width="100%"
                              className="plating_g_video"
                            />
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {this.state.showContactUsForm && (
              <div className="contact_overlay">
                <div className="d-flex justify-content-between"></div>
                <div
                  style={{
                    height: "90vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="contact_form_div">
                    <div className="contact_form_inner_div">
                      <div className="d-flex">
                        <p className="form_heading">Tell us about yourself</p>
                        <span
                          className="form_close_btn"
                          onClick={() =>
                            this.setState({
                              showContactUsForm: false,
                              showMenuBar: false,
                            })
                          }
                        >
                          X
                        </span>
                      </div>
                      <div className="text-center form_sub_line">
                        <span>Want to get in touch?</span>
                        <br />
                        <span>We would love to hear from you.</span>
                      </div>
                      <div>
                        <div className="row justify-content-center pt-5">
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="">
                                  <span className="field_name">NAME</span>
                                  <input
                                    type="text"
                                    name=""
                                    className="input_field_form"
                                    placeholder="Name,Surname"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="">
                                  <span className="field_name">
                                    YOUR EMAIL ADDRESS
                                  </span>
                                  <input
                                    className="input_field_form"
                                    type="text"
                                    name=""
                                    placeholder="Email"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row justify-content-center pt-3">
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="">
                                  <span className="field_name">SUBJECT</span>
                                  <input
                                    type="text"
                                    name=""
                                    className="input_field_form"
                                    placeholder="Foods"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div>
                                  <span className="field_name">
                                    YOUR PHONE NUMBER
                                  </span>
                                  <input
                                    className="input_field_form"
                                    type="text"
                                    name=""
                                    placeholder="Phone"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row justify-content-center pt-5">
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="">
                                  <span className="field_name">
                                    HOW CAN WE HELP YOU?
                                  </span>
                                  <textarea
                                    type="text"
                                    row="8"
                                    name=""
                                    className="input_field_textarea"
                                    placeholder="Your Message"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <button className="form_submit">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {this.state.showMenuBar && (
              <div
                className="navbar_overlay"
                onClick={() => this.setState({ showMenuBar: false })}
              ></div>
            )}
            <div className="social_med_divs">
              <div className="d-flex flex-column">
                <div class="vl"></div>
                <div>
                  <img src={fb} alt="" width="70%" className="social_icons" />
                </div>
                <div>
                  <img src={yt} alt="" width="70%" className="social_icons" />
                </div>
                <div>
                  <img
                    src={insta}
                    alt=""
                    width="70%"
                    className="social_icons"
                  />
                </div>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-7">
                <div className="left_side_sec">
                  <div className="logo_div">
                    <img src={logo} alt="" width="100%" />
                  </div>
                  <div className="">
                    <p className="heading">Why buy groceries</p>
                    <hr className="hr_style" />
                  </div>
                  <div>
                    <p className="tagline">
                      when fresh food available daily <br /> made with fresh and
                      clean ingredients
                    </p>
                  </div>
                  <p className="tagline_2 pt-5">
                    India's first family meal subscription
                  </p>
                  <div className="d-flex features_div">
                    <div className="features">
                      <span
                        tooltip="Get Down Gourmays project Get Down Gourmays project1."
                        flow="down"
                      >
                        <img
                          src={first_icon}
                          alt=""
                          className="features_icon"
                        />
                      </span>
                    </div>
                    <div className="features">
                      <span
                        tooltip1="Get Down Gourmays project2 Get Down Gourmays project2."
                        flow="donpm startwn"
                      >
                        <img src={sec_icon} alt="" className="features_icon1" />
                      </span>
                    </div>
                    <div className="features">
                      <span
                        tooltip2="Get Down Gourmays project3 Get Down Gourmays project3."
                        flow="down"
                      >
                        <img
                          src={thrid_icon}
                          alt=" "
                          className="features_icon"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 right_side_sec">
                <div className=" dish_divs text-center">
                  <div id="hero"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page second-page">
          <div className="d-flex about_us_section">
            <div className="about_us_left_part">
              {/* <img
                src={aboutVideo}
                alt=""
                width="100%"
                className="abt_video"
              ></img> */}
              <video
                className="abt_video"
                loop="true"
                autoPlay="autoplay"
                // style={{ pointerEvents: "none" }}
              >
                <source src={abtvid} type="video/mp4" autoPlay="autoplay" />
              </video>
            </div>
            <div className="about_us_right_part">
              <div>
                <span className="about_us_heading">
                  Welcome to world of
                  <span className="highlight"> gourmay's</span>
                </span>
                <div className="about_sec_desc">
                  <p>
                    Curated by a team culinary experts, nutritionist & food
                    technologist <br className="brrk" />
                    the base requirement to be a part of gourmay's team is love
                    for food
                    <br className="brrk" /> we are dedicated to plate your food
                    with fresh, clean & simple ingredients and of course not to
                    miss our love & care.
                    <br className="brrk" /> our team takes utmost care in
                    curating the menu so you don't be bored by eating the same
                    food again & again
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page third-page">
          <div className="container steps_div_outer_body">
            <div className="meal_steps">
              <span>Your meal problem solved in 3 easy steps</span>
            </div>
            <div className="steps_inner_body">
              <div className="d-flex p-5 steps_inner">
                <div className="steps">
                  <div
                    className="_1div"
                    onMouseOver={changeText}
                    onMouseOut={changeback}
                  >
                    <img src={mobileSteps} alt="" className="mobile_card" />
                    <div className="steps_div">
                      <span id="text-display">STEP-1</span>
                    </div>
                  </div>
                </div>
                <div className="steps">
                  <div
                    className="_1div"
                    onMouseOver={changeText1}
                    onMouseOut={changeback1}
                  >
                    <img src={mobileSteps} alt="" className="mobile_card" />
                    <div className="steps_div">
                      <span id="text-display1">STEP-2</span>
                    </div>
                  </div>
                </div>
                <div className="steps">
                  <div
                    className="_1div"
                    onMouseOver={changeText2}
                    onMouseOut={changeback2}
                  >
                    <img src={mobileSteps} alt="" className="mobile_card" />
                    <div className="steps_div">
                      <span id="text-display2">STEP-3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page fourth-page">
          <div className="meal_types ml-5">
            <span>Menu that changes every week</span>
          </div>
          <div className="d-flex justify-content-center">
            <Tabs />
          </div>
        </div>
        <div className="page fourth-page p-3">
          <div className="main_body">
            <div className="meal_steps">
              <span>
                We dont confuse we want to be as simple as possible our
                <br />
                Meal plan starts from as low as 9000 pm for an individual
              </span>
            </div>
            <div>
              <div className="subscription_inner_body">
                <div className="d-flex p-5">
                  <div className="d-flex align-items-center">
                    <label>
                      <input type="checkbox" />
                      <div className="card">
                        <div className="front">
                          <div className="sub_ia d-flex align-items-center">
                            <div className="p-3 text-center sub_card">
                              <p className="plan_name">Single Plan</p>
                              <div>
                                <img
                                  src={deliverybag}
                                  alt=""
                                  className="del_bag"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="back">
                          <div className="plan_des">
                            <div className="">
                              <div className="text-center pt-5">
                                <h3 className="back_heading">Single Plan</h3>
                              </div>
                              <div className="sub_pricing">
                                <span className="price">Rs 18000</span> <br />
                                <hr className="hr_des" />
                                <p className="mb-0"> PER MONTH</p>
                              </div>
                              <div className="d-flex p-1 justify-content-around align-items-center">
                                <img
                                  src={subscriptiondish}
                                  alt=""
                                  className="sub_dish"
                                />
                                <div
                                  className="p-3"
                                  style={{ lineHeight: "10px" }}
                                >
                                  <span className="sub_p">Brackfast </span>{" "}
                                  <br />
                                  <span className="portion">1-PORTION</span>
                                </div>
                              </div>
                              <div className="d-flex p-1 justify-content-around  align-items-center">
                                <div className="p-3">
                                  <span className="sub_p">Lunch </span> <br />
                                  <span className="portion">1-PORTION</span>
                                </div>
                                <img
                                  src={subscriptiondish}
                                  alt=""
                                  className="sub_dish"
                                />
                              </div>
                              <div className="d-flex p-1 justify-content-around align-items-center">
                                <img
                                  src={subscriptiondish}
                                  alt=""
                                  className="sub_dish"
                                />
                                <div className="p-3">
                                  <span className="sub_p">Dinner </span>
                                  <br />
                                  <span className="portion">1-PORTION</span>
                                </div>
                              </div>
                              <div className="sub_btn">SUBSCRIBE NOW</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <label>
                      <input type="checkbox" />
                      <div className="card">
                        <div className="front">
                          <div className="sub_ia d-flex align-items-center">
                            <div className="p-3 text-center sub_card">
                              <p className="plan_name">Couple Plan</p>
                              <div>
                                <img
                                  src={deliverybag}
                                  alt=""
                                  className="del_bag"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="back">
                          <div className="plan_des">
                            <div className="">
                              <div className="text-center pt-5">
                                <h3 className="back_heading">Couple Plan</h3>
                              </div>
                              <div className="sub_pricing">
                                <span className="price">Rs 18000</span> <br />
                                <hr className="hr_des" />
                                <p className="mb-0"> PER MONTH</p>
                              </div>
                              <div className="d-flex p-1 justify-content-around align-items-center">
                                <img
                                  src={subscriptiondish}
                                  alt=""
                                  className="sub_dish"
                                />
                                <div
                                  className="p-3"
                                  style={{ lineHeight: "10px" }}
                                >
                                  <span className="sub_p">Brackfast </span>{" "}
                                  <br />
                                  <span className="portion">1-PORTION</span>
                                </div>
                              </div>
                              <div className="d-flex p-1 justify-content-around  align-items-center">
                                <div className="p-3">
                                  <span className="sub_p">Lunch </span> <br />
                                  <span className="portion">1-PORTION</span>
                                </div>
                                <img
                                  src={subscriptiondish}
                                  alt=""
                                  className="sub_dish"
                                />
                              </div>
                              <div className="d-flex p-1 justify-content-around align-items-center">
                                <img
                                  src={subscriptiondish}
                                  alt=""
                                  className="sub_dish"
                                />
                                <div className="p-3">
                                  <span className="sub_p">Dinner </span>
                                  <br />
                                  <span className="portion">1-PORTION</span>
                                </div>
                              </div>
                              <div className="sub_btn">SUBSCRIBE NOW</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <label>
                      <input type="checkbox" />
                      <div className="card">
                        <div className="front">
                          <div className="sub_ia d-flex align-items-center">
                            <div className="p-3 text-center sub_card">
                              <p className="plan_name">Family 2+1</p>
                              <div>
                                <img
                                  src={deliverybag}
                                  alt=""
                                  className="del_bag"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="back">
                          <div className="plan_des">
                            <div className="">
                              <div className="text-center pt-5">
                                <h3 className="back_heading">
                                  Family 2+1 Plan
                                </h3>
                              </div>
                              <div className="sub_pricing">
                                <span className="price">Rs 18000</span> <br />
                                <hr className="hr_des" />
                                <p className="mb-0"> PER MONTH</p>
                              </div>
                              <div className="d-flex p-1 justify-content-around align-items-center">
                                <img
                                  src={subscriptiondish}
                                  alt=""
                                  className="sub_dish"
                                />
                                <div
                                  className="p-3"
                                  style={{ lineHeight: "10px" }}
                                >
                                  <span className="sub_p">Brackfast </span>{" "}
                                  <br />
                                  <span className="portion">1-PORTION</span>
                                </div>
                              </div>
                              <div className="d-flex p-1 justify-content-around  align-items-center">
                                <div className="p-3">
                                  <span className="sub_p">Lunch </span> <br />
                                  <span className="portion">1-PORTION</span>
                                </div>
                                <img
                                  src={subscriptiondish}
                                  alt=""
                                  className="sub_dish"
                                />
                              </div>
                              <div className="d-flex p-1 justify-content-around align-items-center">
                                <img
                                  src={subscriptiondish}
                                  alt=""
                                  className="sub_dish"
                                />
                                <div className="p-3">
                                  <span className="sub_p">Dinner </span>
                                  <br />
                                  <span className="portion">1-PORTION</span>
                                </div>
                              </div>
                              <div className="sub_btn">SUBSCRIBE NOW</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <label>
                      <input type="checkbox" />
                      <div className="card">
                        <div className="front">
                          <div className="sub_ia d-flex align-items-center">
                            <div className="p-3 text-center sub_card">
                              <p className="plan_name">Family 2+2</p>
                              <div>
                                <img
                                  src={deliverybag}
                                  alt=""
                                  className="del_bag"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="back">
                          <div className="plan_des">
                            <div className="">
                              <div className="text-center pt-5">
                                <h3 className="back_heading">
                                  Family 2+2 Plan
                                </h3>
                              </div>
                              <div className="sub_pricing">
                                <span className="price">Rs 18000</span> <br />
                                <hr className="hr_des" />
                                <p className="mb-0"> PER MONTH</p>
                              </div>
                              <div className="d-flex p-1 justify-content-around align-items-center">
                                <img
                                  src={subscriptiondish}
                                  alt=""
                                  className="sub_dish"
                                />
                                <div
                                  className="p-3"
                                  style={{ lineHeight: "10px" }}
                                >
                                  <span className="sub_p">Brackfast </span>{" "}
                                  <br />
                                  <span className="portion">1-PORTION</span>
                                </div>
                              </div>
                              <div className="d-flex p-1 justify-content-around  align-items-center">
                                <div className="p-3">
                                  <span className="sub_p">Lunch </span> <br />
                                  <span className="portion">1-PORTION</span>
                                </div>
                                <img
                                  src={subscriptiondish}
                                  alt=""
                                  className="sub_dish"
                                />
                              </div>
                              <div className="d-flex p-1 justify-content-around align-items-center">
                                <img
                                  src={subscriptiondish}
                                  alt=""
                                  className="sub_dish"
                                />
                                <div className="p-3">
                                  <span className="sub_p">Dinner </span>
                                  <br />
                                  <span className="portion">1-PORTION</span>
                                </div>
                              </div>
                              <div className="sub_btn">SUBSCRIBE NOW</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page second-page">
          <div className="main_body footer_main_div">
            {/* <div className="humberger_menu">
              <img src={hum} alt="" width="70%" />
            </div> */}
            <div className="meal_steps">
              <span>Solve your meal problem by downloading our app</span>
            </div>
            <div className="footer_inner_body">
              <div className="d-flex">
                <img src={mobileapp} alt="" className="mobile_app_img" />
                <div className="d-flex align-items-center">
                  <div className="download_app_section">
                    <span>
                      Download the gourmey's app today!
                      <br />
                      Bring your meal fast and easy with our free app
                    </span>{" "}
                    <div className="pt-3">
                      <img src={qrcode} alt="" className="qr_img" />
                      <img src={appleplaystore} alt="" className="qr_img2" />
                      <img src={playstorelgo} alt="" className="qr_img2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_sec">
            <div className="p-4 text-center">
              <img src={footerlogo} alt="" className="footerlogo" />
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="hashtag_sec">
                      <span className="hashtag_txt">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing to go.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 footer_last_sec">
                  <p className="mb-0">
                    &copy; 2021 gourmay's.All rights reserved
                  </p>
                  <div className="text-center">
                    <div className="hr_sty">
                      <hr width="50%" />
                    </div>
                  </div>
                  <p>Privacy | Terms | Help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
