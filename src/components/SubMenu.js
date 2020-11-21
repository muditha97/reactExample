import React, { Component } from 'react';
import '../App.css';

export default class SubMenu extends Component {
    render() {
        return (

            <div>

                <div id="menubar" className="box mt-2 rounded-sm d-flex justify-content-center align-middle">
                    <span className="mt-4">
                    <span className={this.props.icon}> {this.props.title}</span>
                    </span>
                </div>
                </div>
        );
    }
}
