import React, { PureComponent } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends PureComponent {
  state = {
    name: "ali",
  };
  componentDidMount() { 
      setInterval(() => {
          this.setState({name : 'ali'})
      }, 1000);
   }
  render() {
    console.log('ParentComp.jsx')
    return (
      <div>
        Parent component
        <RegComp name={this.state.name} />

        <PureComp name= {this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
