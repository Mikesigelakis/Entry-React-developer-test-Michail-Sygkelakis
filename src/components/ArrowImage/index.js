import React, { Component } from "react";
import "./style.css";

class ArrowImage extends Component {
  constructor() {
    super();
    this.state = {
      selectedImageIndex: 0,
    };

    this.onClickRight = this.onClickRight.bind(this);
    this.onClickLeft = this.onClickLeft.bind(this);
  }

  

  onClickLeft() {
    if (this.state.selectedImageIndex > 0) {
      this.setState((prevState) => ({
        selectedImageIndex: prevState.selectedImageIndex - 1,
      }));
    }
  }

  onClickRight() {
    if (this.state.selectedImageIndex < this.props.images.length - 1) {
      this.setState((prevState) => ({
        selectedImageIndex: prevState.selectedImageIndex + 1,
      }));
    }
  }

  returnArrows() {
    let arrows = [];
    if (this.state.selectedImageIndex > 0)
      arrows.push(
        <div key={0} className="click-right" onClick={this.onClickLeft}></div>
      );
    if (this.state.selectedImageIndex < this.props.images.length - 1) {
      arrows.push(
        <div key={1}  className="click-left" onClick={this.onClickRight}></div>
      );
    }
    return arrows;
  }

  render() {
    const arrows = this.returnArrows();
    return (
      <>
        <div className="item">
          {arrows}
          <img
            src={this.props.images[this.state.selectedImageIndex]}
            className="image_item"
            alt={this.props.images[this.state.selectedImageIndex]}
          ></img>
        </div>
      </>
    );
  }
}

export default ArrowImage;
