import React, { Component } from 'react';


class ClassTimer extends Component {
    state = { 
         count : 0 ,
     } 
     componentDidMount() {
        this.myTimer = setInterval(()=>{
             console.log('hi ali');
             this.setState({count : this.state.count+1});
         } , 1000);
     }
     componentWillUnmount() {
         console.log('CWUN');
         clearInterval(this.myTimer);
     } 
    render() { 
        return (
            <div>
                <p>class interval</p>
            </div>
        );
    }
}
 
export default ClassTimer;