import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
        	<h1>Hello, [<span class="highlight">{this.props.name}</span>]!</h1>
        );
    }
}

export default HelloWorld;