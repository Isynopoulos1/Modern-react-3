import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    //THIS IS THE ONLY TIME WE DO DIRECT AN ASSIGMENT: to this.state
    this.state = { lat: null, errorMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //we called setState
        this.setState({ lat: position.coords.latitude });

        //WE DID NOT, NEVER!!!!! : this.state.lat = position.coords.latitude
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //REACT SAYS WE HAVE TO REACT RENDER
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div> Latitude: {this.state.lat} </div>;
    }

    return <div> Loading! </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
