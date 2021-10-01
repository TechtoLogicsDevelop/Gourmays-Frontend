import React from "react";
import { _IMAGES } from "../Data/data";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class ReactImageGalleryTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <div>
        <ImageGallery showThumbnails="true" items={_IMAGES} />
      </div>
    );
  }
}
export default ReactImageGalleryTest;
