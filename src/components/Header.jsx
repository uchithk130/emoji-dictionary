import React from "react";

function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav-class">
                <div className="container">
                    <a className="navbar-brand" href="#">Your Logo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active mr-2" id="home">
                                <a className="nav-link" href="" >Home</a>
                            </li>
                            <li className="nav-item mr-2" id="posts">
                                <a className="nav-link" href="">Posts</a>
                            </li>
                            <li className="nav-item mr-2" id="compose">
                            <a className="nav-link" href="">Compose</a>
                        </li>
                            <li className="nav-item mr-2" id="about">
                                <a className="nav-link" href="">About</a>
                            </li>
                            <li className="nav-item mr-2" id="contact">
                                <a className="nav-link" href="">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )

}

export default Header;