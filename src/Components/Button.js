import React from 'react';

class Button extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.onClick}>{this.props.btnName}</button>
            </div>    
        )
    }
}

export default Button;