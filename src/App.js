import React from "react";
import logo from "./logo.svg";
import "../src/components/css/bootstrap.css";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: "",
      result: 0
    };
  }

  inputHandler = input => {
    this.setState(
      {
        inputs: [...this.state.inputs].join("").concat(input)
      },
      this.setState({
        result: [...this.state.inputs].join("").concat(input)
      })
    );
  };

  reset = () => {
    this.setState({
      inputs: "",
      result: 0
    });
  };

  resultHandler = () => {
    try {
      this.setState(
        {
          result: eval(this.state.inputs)
        },
        this.setState({
          inputs: ""
        })
      );
    } catch (e) {
      this.reset();
      this.setState({
        result: "Please enter valid inputs"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Screen result={this.state.result} />
        <Buttons
          reset={this.reset}
          inputHandler={this.inputHandler}
          resultHandler={this.resultHandler}
        />
      </div>
    );
  }
}

export default App;
