import React, { Component } from 'react';
import good_boy from '../images/logo/good_boy.svg';
import logo_text from '../images/logo/logo_text.svg';

export class Logo extends Component {
    render() {
        return (
            <div className="one_third">
                <div className="logo_icon">
                    <img src={good_boy} alt="Good boy logo" />
                </div>
                <div className="logo_text">
                    <img src={logo_text} alt="Good boy logo" />
                </div>
            </div>
        )
    }
}

export default Logo
