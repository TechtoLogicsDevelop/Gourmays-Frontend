import React from "react";
import { productList } from "./ProductListJson";
// import Rating from "./Rating";
import Pagination from "./Pagination";
import "./style1.css";
// import VPlayer from "react-vplayer";
import ReactPlayer from "react-player";
import vid from "../assets/videos/Plating-Video-11113 X 625-1.m4v";
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      showmodal: false,
    };
  }
  onChangePage = (pageOfItems) => {
    this.setState({
      productData: pageOfItems,
    });
  };
  render() {
    const { productData } = this.state;
    return (
      <div>
        <div className="row">
          {productData.map((item, index) => {
            return (
              //   <tr key={index} className="pro-list-info">
              //     <td>
              //       <img
              //         src={item.productTitle}
              //         alt=""
              //         width="100%"
              //         style={{ height: "200px" }}
              //       />
              //     </td>
              //     <td>${item.salePrice}</td>
              //     <td><Rating ratingStars={item.rating} /></td>
              //   </tr>
              <div className="col-10 col-md-4 col-lg-4" key={index}>
                <div>
                  <img
                    src={item.productTitle}
                    alt=""
                    width="100%"
                    className="plating_g_video"
                    onClick={() =>
                      this.setState({
                        showmodal: !this.state.showmodal,
                      })
                    }
                  />
                  <span className="tag_strip">Pasta with chicken</span>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination
          pageSize={6}
          items={productList}
          onChangePage={this.onChangePage}
        />
        {this.state.showmodal && (
          <div
            className="video_overlay"
            onClick={() =>
              this.setState({
                showmodal: false,
              })
            }
          >
            <div>
              <span>X</span>
            </div>
            {/* <VPlayer
              className="video_player"
              source={[
                {
                  url:
                    "https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/360p.mp4",
                  type: "video/mp4",
                  quality: 360,
                },
              ]}
              loadSrt="https://www.jplayer.net/asset/userdata/223028/caption/mzvk-pmk1oq/28752.srt"
              loadAds="https://www.movcpm.com/watch.xml?key=1ab5f853805ad39477e714e75ac6862b&custom=%7B%27width%27%3A%27[WIDTH]%27%2C%27height%27%3A%27[HEIGHT]%27%7D&cb=[CACHE_BUSTERS]&vastref=[PAGE_URL]"
            /> */}
            <div width="100%" style={{ objectFit: "fill" }}>
              <ReactPlayer
                controls={true}
                url={vid}
                style={{ height: "453px", objectFit: "fill" }}
                height="590px"
                width="100%"
              />
            </div>
            {/* <video width="100%" height="340" controls>
              <source
                src="https://raw.githubusercontent.com/juanpablocs/react-vplayer/master/demo/video/720p.mp4"
                type="video/mp4"
                width="100%"
              />
              <source src="movie.ogg" type="video/ogg" />
            </video> */}
          </div>
        )}
      </div>
    );
  }
}

export default ProductList;
