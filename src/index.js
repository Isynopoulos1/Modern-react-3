import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    //THIS IS THE ONLY TIME WE DO DIRECT AN ASSIGMENT: to this.state
    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //we called setState
        this.setState({ lat: position.coords.latitude });

        //WE DID NOT, NEVER!!!!! : this.state.lat = position.coords.latitude
      },
      err => console.log(err)
    );
  }

  //REACT SAYS WE HAVE TO REACT RENDER
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
