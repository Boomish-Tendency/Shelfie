import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: 0,
      image_url: "",
    };
  }

  newImg = (e) => {
    this.setState({ image_url: e });
  };

  newName = (e) => {
    this.setState({ name: e });
  };

  newPrice = (e) => {
    this.setState({ price: e });
  };

  clear = () => {
    this.setState({ name: "" });
    this.setState({ price: 0 });
    this.setState({ image_url: "" });
  };

  render() {
    return (
      <div>
        <div>
          Image:
          <input
            onChange={(e) => this.newImg(e.target.value)}
            value={this.state.image_url}
          />
        </div>
        <div>
          {" "}
          Product:
          <input
            onChange={(e) => this.newName(e.target.value)}
            value={this.state.name}
          />
        </div>
        <div>
          Price:
          <input
            onChange={(e) => this.newPrice(e.target.value)}
            value={this.state.price}
          />
        </div>
        <div>
          <button onClick={() => this.clear()}>Cancel</button>
          </div>
      </div>
    );
  }
}

export default Form;
