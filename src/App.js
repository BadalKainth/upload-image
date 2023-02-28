import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    selectedFile: null,
  };
  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });

    setTimeout(function () {
      console.log(event.target.files[0]);
    }, 3000);
  };

  fileUploudHandler = (event) => {
    event.preventDefault();
    //------API link to uploud the files------//
    // ".post('www.uploudhere.com')
    // .then(res => {
    //  console.log(res) };
    console.log("Successful!");
  };
  render() {
    return (
      <form className="main">
        <div className="App">
          <p>Click below to uploud file.</p>
          <input type="file" onChange={this.fileSelectedHandler}></input>
          <button onClick={this.fileUploudHandler}>Uploud</button>
        </div>
      </form>
    );
  }
}
export default App;
