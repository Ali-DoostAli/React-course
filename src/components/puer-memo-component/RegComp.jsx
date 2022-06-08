import React, { Component } from 'react'

class RegComp extends Component {
    render() { 
        console.log('RegCopm.jsx')
        return (
            <div>
                Reg copm - {this.props.name}
            </div>
        );
    }
}
 
export default RegComp;