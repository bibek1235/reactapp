import React from 'react';

import { Link } from 'react-router-dom';


class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="logo">
                                <Link to="/"><img src="https://payload.cargocollective.com/1/18/596683/9495078/synergy_670.png" /></Link>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <nav class="navbar navbar-expand-lg navbar-light">
                                <a class="navbar-brand d-none" href="#">Navbar</a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item active">
                                            <Link to="/" className="nav-link">Home</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link className="nav-link" to="/about">About</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/services" className="nav-link">Services</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/contact" className="nav-link">Contact Us</Link>
                                        </li>

                                    </ul>


                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header >
        )
    }
}


export default Header;