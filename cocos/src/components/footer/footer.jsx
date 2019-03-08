import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import email from '../../images/email.png'
import file from '../../images/file.png'
import face from '../../images/facebook.png'
import twitter from '../../images/Twitter.png'
import wechet from '../../images/wechat.png'
import weibo from '../../images/weibo.png'
import tele from '../../images/telegram.png'
import git from '../../images/github.png'
import './footer.css'

export default class Footer extends Component {
    toTop = () => {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(this.toTop);
            window.scrollTo(0, currentScroll - (currentScroll / 5));
        }
    }
    render() {
        return (
            <div className='footer'>
                <div className='footer_box'>
                    <div className='totop' onClick={this.toTop}>
                        <div className='tojt'>
                            <div></div>
                        </div>
                    </div>
                    <div className='footer_con'>
                        <div className="footer_con_l lt">
                            <div className='f_til'><FormattedMessage id='tel' /></div>
                            <div className='f_line'></div>
                            <div className='email'>
                                <img src={email} alt="" />
                                <p>Email:Support@cocosbcx.io</p>
                            </div>
                            <div className='file'>
                                <img src={file} alt="" />
                                <p>Terms of Service|Privacy Policy</p>
                            </div>
                        </div>
                        <div className="footer_con_r lt">
                            <div className='r_til'><FormattedMessage id='footUpdate' /></div>
                            <div className='r_line'></div>
                            <div className='footer_dy'>
                                <div className='input_box'>
                                    <input type="text" ref={(x) => { this.int = x }} />
                                    <p onClick={(e) => {
                                        e.target.style.display = 'none';
                                        this.int.focus()
                                    }}><FormattedMessage id='int_email' /></p>
                                </div>
                                <div className='input_l_box'></div>
                                <div className='input_r_box'>
                                    <p><FormattedMessage id='subscribe' /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer_img'>
                        <a href="http://www.baidu.com">
                            <img src={face} alt="" />
                        </a>
                        <a href="http://www.baidu.com">
                            <img src={twitter} alt="" />
                        </a>
                        <a href="http://www.baidu.com">
                            <img src={wechet} alt="" />
                        </a>
                        <a href="http://www.baidu.com">
                            <img src={weibo} alt="" />
                        </a>
                        <a href="http://www.baidu.com">
                            <img src={tele} alt="" />
                        </a>
                        <a href="http://www.baidu.com">
                            <img src={git} alt="" />
                        </a>
                    </div>
                    <div className='footer_bottom'>
                        2018 Cocos-BCX All rights reserved.
                        </div>
                </div>
            </div>
        );
    }
}