import React, { Component } from 'react';
import Logo from '../logo';
import './footer.css';
import InfoText from './info_text';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="separator"></div>
                <div className="info">
                    <Logo />
                    <InfoText />
                </div>
            </div>
        )
    }
}

export default Footer
