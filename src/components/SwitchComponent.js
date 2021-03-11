import React, { Component } from 'react';


export default class SwitchComponent extends Component {

    state = {
        show : 2
    }
    switchM = (e) => {
        this.setState({ show: e.target.id })
    }

    render() {
        return (
            <div>
                <div>{this.props.components[this.state.show || 0 ].data}</div>
                {this.props.test}
                {this.props.components.map((item, id) => (
                    <button onClick={this.switchM}key={id} id={id}>{item.name}</button>
                ))}
                
            </div>
        );
    }
}