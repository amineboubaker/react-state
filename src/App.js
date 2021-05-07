import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export class App extends Component {
  state = {
    FullName: "Amine Boubaker",
    Bio: "24 years old , from Tunisia Sfax",
    imageSrc: "/amine.jpg",
    Profession: "Web Devlopper",
    show: false,
    counter: 0,
  };

  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  };

  render() {
    return (
      <div className="div">
        <Button
          className="btn"
          variant="outline-secondary"
          onClick={this.handleShow}
        >
          {this.state.show ? "Hide" : "Show"}
        </Button>
        {this.state.show ? (
          <div>
            <h3>{this.state.counter}</h3>
            <h1>{this.state.FullName}</h1>
            <img
              src={this.state.imageSrc}
              alt={this.state.FullName}
              className="pic"
            />
            <p>{this.state.Bio}</p>
            <p>{this.state.Profession}</p>
          </div>
        ) : (
          <h5>"Click on the button to show profile"</h5>
        )}
      </div>
    );
  }
}

export default App;
