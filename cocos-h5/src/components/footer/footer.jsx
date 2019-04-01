import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import email from '../../images/email.png'
import file from '../../images/file.png'
import face from '../../images/medium.png'
import twitter from '../../images/Twitter.png'
import wechet from '../../images/wechat.png'
import weibo from '../../images/weibo.png'
import tele from '../../images/telegram.png'
import git from '../../images/github.png'
import zs from  '../../images/zs.png'
import reddit from '../../images/reddit.png'
import discord from '../../images/discord.png'
import zsma from '../../images/zsma.jpg'
import totop from '../../images/totop.png'
import wx from '../../images/wxma.jpg'
import terms from '../../file/terms.pdf'
import privacy from '../../file/privacy.pdf'
import './footer.css'

export default class Footer extends Component {
    toTop = () => {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(this.toTop);
            window.scrollTo(0, currentScroll - (currentScroll / 5));
        }
    }
    goTopEx() {
        let getScrollTop = () => {
            return document.documentElement.scrollTop;
        }
        let setScrollTop = (value) => {
            document.documentElement.scrollTop = value;
        }
        window.onscroll = () => { getScrollTop() - 400 > 0 ? this.toTomDom.style.display = "block" : this.toTomDom.style.display = "none"; }
    }
    wxshow = (e) => {
        e = e || window.event;
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.wxma.style.display = 'block';
        this.wxma.style.display = 'flex';
    }
    zsshow = (e) => {
        e = e || window.event;
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.wxma.style.display = 'block';
        this.wxma.style.display = 'flex';
    }
    //微信二维码
    mahide = (e) => {
        e = e || window.event;
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        this.wxma.style.display = 'none';
    }
    componentDidMount() {
        this.goTopEx()
    }
    render() {
        let lang = localStorage.getItem('lang_type');
        return (
            <div className='footer'>
                <div className='footer_box'>
                    <div className='totop' ref={(x) => { this.toTomDom = x }} onClick={this.toTop}>
                        <div className='tojt'>
                           <img src={totop} alt=""/>
                        </div>
                    </div>
                    <div className='footer_con'>
                        <div className="footer_con_l ">
                            <div className='f_til'><FormattedMessage id='tel' /></div>
                            <div className='f_line'></div>
                            <div className='email lt' >
                                <img src={email} alt="" />
                                <p><a href="mailto:Support@cocosbcx.io">Email: Support@cocosbcx.io</a></p>
                            </div>
                            <div className='file lt' >
                                <img src={file} alt="" />
                                <p><a href={terms} target='_blank' rel="noopener noreferrer">Terms of Service</a> | <a href={privacy} target='_blank' rel="noopener noreferrer">Privacy Policy</a>  </p>
                            </div>
                        </div>
                        <div className="footer_con_r ">
                            <div className='r_til'><FormattedMessage id='footUpdate' /></div>
                            <div className='r_line'></div>
                            <div className='footer_dy' id="mc_embed_signup">
                                <form action="https://cocosbcx.us20.list-manage.com/subscribe/post?u=9907dfea800bf6f37eccb2e9c&amp;id=5d769877f3"
                                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank"
                                    noValidate>
                                    <div id="mc_embed_signup_scroll">
                                        <div className='input_box' >
                                            <input type="email" name="EMAIL" className="email" id="mce-EMAIL"
                                                required ref={(x) => { this.int = x }} />
                                            <p onClick={(e) => {
                                                e.target.style.display = 'none';
                                                this.int.focus()
                                            }}><FormattedMessage id='int_email' /></p>

                                        </div>
                                        <div className='input_l_box'></div>
                                        <div className='input_r_box'>
                                            <input type="submit" value={lang === 'en' ? "Subscribe" : '订阅'} name="subscribe" id="mc-embedded-subscribe"
                                                className="button"></input>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='footer_img'>
                        <a href="https://medium.com/cocosbcx" target='_blank' rel="noopener noreferrer">
                            <img src={face} alt="" />
                        </a>
                        <a href="https://twitter.com/CocosBCX" target='_blank' rel="noopener noreferrer">
                            <img src={twitter} alt="" />
                        </a>
                        <div className='wechet_box lt' onClick={(e) => { this.wxshow(e) }}
                            onMouseLeave={() => { this.wxma.style.display = 'none' }}>
                            <img className='biao' src={wechet} alt="" />
                            <div className='ma' onClick={(e)=>{this.mahide(e)}} ref={(x) => { this.wxma = x }} style={{ width: '7.5rem', height: document.body.clientHeight || document.documentElement.clientHeight  }}>
                                <img src={wx} alt="" onClick={this.stop} />
                            </div>
                        </div>
                        <div className='zs_box lt' onClick={(e) => { this.zsshow(e) }}
                            onMouseLeave={() => { this.zsma.style.display = 'none' }}>
                            <img className='biao' src={zs} alt="" />
                            <div className='ma' onClick={(e)=>{this.mahide(e)}} ref={(x) => { this.zsma = x }} style={{ width: '7.5rem', height: document.documentElement.clientHeight || document.body.clientHeight }}>
                                <img src={zsma} alt="" onClick={this.stop} />
                            </div>
                        </div>
                        <a href="https://www.weibo.com/p/1006062183715773" target='_blank' rel="noopener noreferrer">
                            <img src={weibo} alt="" />
                        </a>
                        <a href={lang === 'zh' ? "https://t.me/CocosBCX" : 'https://t.me/cocosblockchainexpedition'} target='_blank' rel="noopener noreferrer">
                            <img src={tele} alt="" />
                        </a>
                        <a href="https://github.com/cocosbcx" target='_blank' rel="noopener noreferrer">
                            <img src={git} alt="" />
                        </a>
                        <a href="https://www.reddit.com/user/cocos-bcx/" target='_blank' rel="noopener noreferrer">
                            <img src={reddit} alt="" />
                        </a>
                        <a href="https://discord.gg/jdJMNtC" target='_blank' rel="noopener noreferrer">
                            <img src={discord} alt="" />
                        </a>
                    </div>
                    <div className='footer_bottom'>2018 Cocos-BCX All rights reserved.</div>
                </div>
            </div>
        );
    }
}

