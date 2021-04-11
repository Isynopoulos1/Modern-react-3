import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };
  }

  //REACT SAYS WE HAVE TO REACT RENDER
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return <div>Latitude:</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
