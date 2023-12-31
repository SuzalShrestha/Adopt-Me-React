import { Component } from "react";
class Carousel extends Component {
  state = {
    active: 0,
  };
  handleClickIndex = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              key={photo}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleClickIndex}
            ></img>
          ))}
        </div>
      </div>
    );
  }
}
export default Carousel;
