import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-3">PROJECT QUẢN LÝ BẰNG REACT JS</h1>
                    <p className="lead">VỚI DỮ LIỆU JSON</p>
                    <hr className="my-2" />
                </div>
            </div>
        );
    }
}

export default Header;