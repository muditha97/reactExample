import React, { Component } from 'react';

export default class LowContentBox extends Component {
    render() {
        return (
            <div>
                <div className="border rounded lowBox text-light">
                    <img src={this.props.image} className="ml-3" style={{width:"200px",height:"200px"}} />
                    <br/>
                    <h5 align="center" className="mt-2"> {this.props.brand} </h5>
                    <hr className="horRule"/>
                    <p align="center" className="mt-4"> RAM : {this.props.ram}GB <br/>
                    VGA : {this.props.vga}GB <br/>
                    CPU : {this.props.cpu}Ghz <br/>
                    GEN : {this.props.gen}<sup>th</sup> <br/> </p>
                    <hr className="horRule"/>
                    <h5 align="center" style={{color:"yellow"}} > - {this.props.type} - </h5>
                    <h3 align="center">  {this.props.price} LKR </h3>
                </div>
            </div>
        )
    }
}
