import React, { Component } from 'react';
import Tab from './tab/tab';
import wolf from '../images/wolf/wolf.svg';
import './form.css';

export class Form extends Component {
    
    render() {
        
        return (
            <div className='form'>
                <div className="two_third">
                    <Tab />
                </div>
                <div className="one_third">
                    <img src={wolf} alt="Drinking wolf" />
                </div>
            </div>
        )
    }
}

export default Form
