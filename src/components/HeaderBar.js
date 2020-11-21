import React, { Component } from 'react';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

export default class HeadBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <span className="navbar-brand">
                    <img src={logo} style={{width:"60px", height:"60px"}} className="border rounded-circle"/>Computershop</span>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>

                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item text-primary mr-auto">
                        <Link className="nav-link active" to="/SlideShow"><span className="fa fa-home fa-md">Home </span></Link>
                        </li>
                        <li className="nav-item text-primary mr-auto">
                        <Link className="nav-link" to="/LowCarousel"><span className="fa fa-info fa-md">About </span></Link>
                        </li>
                        <li className="nav-item text-primary mr-auto">
                        <Link className="nav-link" to="/LowCarousel"><span className="fa fa-address-card fa-md">Contact </span></Link>
                        </li>
                    </ul>

                    <div className="mr-auto">
                        <span className="navbar-text" role="button">
                            <a data-toggle="modal" data-target="#loginmodal">
                            <span className="fa fa-sign-in active"> Login</span></a>
                        </span>
                    </div>

                    </div>

                    

                </nav>

                <div id="loginmodal" className="modal fade" role="dialog">
                    <div className="modal-dialog modal-lg" role="content">
                        <div className="modal-content bg-light">
                            <div className="modal-header bg-dark text-light">
                                <h4 className="modal-title">Login</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-row">
                                    <div className="form-group col-sm-4">
                                        <label className="sr-only" >Email address</label>
                                        <input type="email" className="form-control form-control-sm mr-1" id="exampleInputEmail3" placeholder="Enter email"/>
                                </div>
                                <div className="form-group col-sm-4">
                                    <label className="sr-only">Password</label>
                                    <input type="password" className="form-control form-control-sm mr-1" id="exampleInputPassword3" placeholder="Password"/>
                                </div>
                                <div className="col-sm-auto">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"/>
                                        <label className="form-check-label"> Remember me
                                        </label>
                                    </div>
                                </div>
                                    </div>
                                    <div className="form-row">
                                    <button type="button" className="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary btn-sm ml-1">Sign in</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
