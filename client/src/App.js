import React, {Component} from "react";
import "./App.scss";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World!</h1>
        <h2>This is a basic react tool chain setup</h2>
        <p>
          Babel, webpack with webpack dev server, react fast refresh, sass.
        </p>
        <p>Primarily in need of node server setup with some basic authenticaion</p>
      </div>
    );
  }
}

export default App;