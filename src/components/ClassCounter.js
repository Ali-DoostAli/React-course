import React, { Component } from 'react';

class ClassCounter  extends Component {
    state = { 
        count:0
     } 
      
    addOneHandler = () => {
        this.setState((prevState) => {
          return  {count : prevState.count + 1};
        });
      };
    
    addTwoHandler = () => {
        this.setState((prevState) => {
          return  {count : prevState.count + 2};
        });
      };
    
    addFiveHandler = () => {
        this.setState((prevState) => {
          return  {count : prevState.count + 5};
        });
      };

    render() { 
        return (
            <div>
      <h2>count = {this.state.count}</h2>
      <button onClick={this.addOneHandler}>Add One</button>
      <button onClick={this.addTwoHandler}>Add Two</button>
      <button onClick={this.addFiveHandler}>Add Five</button>
    </div>
        );
    }
}
 
export default ClassCounter ;