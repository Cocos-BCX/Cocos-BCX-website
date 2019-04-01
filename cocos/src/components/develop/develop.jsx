import React, { Component } from 'react';
import Nav from '../nav/nav'
import { FormattedMessage } from 'react-intl';
import dev1 from '../../images/dev1.png'
import dev2 from '../../images/dev2.png'
import dev3 from '../../images/dev3.png'
import './develop.css'

export default class Develop extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let lang = localStorage.getItem('lang_type');
        return (
            <div className='develop'>
                <div className="banner_box">
                    <Nav></Nav>
                </div>
                <div className='dev_box'>
                    <a href={lang === 'zh' ? "https://mp.weixin.qq.com/s/EuM8mGfXh3QpwKLN7i9ITA" : 'https://medium.com/@CocosBCX/cocos-bcx-alpha-testing-now-open-to-developers-globally-908880f67de7'} target="_blank" rel="noopener noreferrer" className='dev_m'>
                        <div className='dev_img lt'>
                            <img src={dev1} alt="" />
                        </div>
                        <div className='dev_main lt'>
                            <div className='dev_main_til'>
                                <h4><FormattedMessage id='developPlan' /></h4>
                            </div>
                            <p className={lang==='en'?'dev_en':null}><FormattedMessage id='devjh'  /></p>
                            <div className='dev_go'>
                                <div>GO</div>
                            </div>
                        </div>
                    </a>
                    <a href={lang === 'zh' ? "https://cn-dev.cocosbcx.io" : 'https://dev.cocosbcx.io'} target="_blank" rel="noopener noreferrer" className='dev_m'>
                        <div className='dev_img lt'>
                            <img src={dev2} alt="" />
                        </div>
                        <div className='dev_main lt'>
                            <div className='dev_main_til'>
                                <h4><FormattedMessage id='developApi' /></h4>
                            </div>
                            <p><FormattedMessage id='devwd' /></p>
                            <div className='dev_go'>
                                <div>GO</div>
                            </div>
                        </div>
                    </a>
                    <a href="https://forum.cocos.com/c/bcx" target="_blank" rel="noopener noreferrer" className='dev_m'>
                        <div className='dev_img lt'>
                            <img src={dev3} alt="" />
                        </div>
                        <div className='dev_main lt'>
                            <div className='dev_main_til'>
                                <h4><FormattedMessage id='developsq' /></h4>
                            </div>
                            <p><FormattedMessage id='devsq' /></p>
                            <div className='dev_go'>
                                <div>GO</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}