import React, { PureComponent } from 'react';


class PureComp extends PureComponent {
    render() { 
        console.log('PureComp.jsx')
        return (
            <div>
                Pure comp - {this.props.name}
            </div>
        );
    }
}
 
export default PureComp;