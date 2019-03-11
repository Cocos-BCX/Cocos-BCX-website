import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Nav from '../nav/nav'
import './action.css'

export default class Footer extends Component {

    render() {
        return (
            <div className='action'>
                <div className='banne_n_box'>
                    <Nav></Nav>
                </div>
            </div>
        );
    }
}