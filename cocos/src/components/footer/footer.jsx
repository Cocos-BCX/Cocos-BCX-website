import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import email from '../../images/email.png'
import file from '../../images/file.png'
import medium from '../../images/medium.png'
import twitter from '../../images/Twitter.png'
import wechet from '../../images/wechat.png'
import weibo from '../../images/weibo.png'
import tele from '../../images/telegram.png'
import git from '../../images/github.png'
import zs from  '../../images/zs.png'
import reddit from '../../images/reddit.png'
import discord from '../../images/discord.png'

import mediumb from '../../images/mediumb.png'
import twitterb from '../../images/Twitterb.png'
import wechetb from '../../images/wechatb.png'
import weibob from '../../images/weibob.png'
import teleb from '../../images/telegramb.png'
import gitb from '../../images/githubb.png'
import zsb from  '../../images/zsb.png'
import redditb from '../../images/redditb.png'
import discordb from '../../images/discordb.png'
import zsma from '../../images/zsma.jpg'
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
    changeimg(){
        this.mediuma.onmouseenter=(()=>{
            this.mediuma.src = mediumb
        });
        this.mediuma.onmouseleave=(()=>{
            this.mediuma.src = medium
        });

        this.twittera.onmouseenter=(()=>{
            this.twittera.src = twitterb
        });
        this.twittera.onmouseleave=(()=>{
            this.twittera.src =  twitter
        });

        this.wecheta.onmouseenter=(()=>{
            this.wecheta.src = wechetb
        });
        this.wecheta.onmouseleave=(()=>{
            this.wecheta.src = wechet
        });

        this.zsa.onmouseenter=(()=>{
            this.zsa.src = zsb
        });
        this.zsa.onmouseleave=(()=>{
            this.zsa.src = zs
        });

        this.weiboa.onmouseenter=(()=>{
            this.weiboa.src = weibob
        });
        this.weiboa.onmouseleave=(()=>{
            this.weiboa.src = weibo
        });

        this.telea.onmouseenter=(()=>{
            this.telea.src = teleb
        });
        this.telea.onmouseleave=(()=>{
            this.telea.src = tele
        });

        this.gita.onmouseenter=(()=>{
            this.gita.src = gitb
        });
        this.gita.onmouseleave=(()=>{
            this.gita.src = git
        });

        this.reddita.onmouseenter=(()=>{
            this.reddita.src = redditb
        });
        this.reddita.onmouseleave=(()=>{
            this.reddita.src = reddit
        });

        this.discorda.onmouseenter=(()=>{
            this.discorda.src = discordb
        });
        this.discorda.onmouseleave=(()=>{
            this.discorda.src = discord
        });
    }
    componentDidMount() {
        this.goTopEx();
        this.changeimg()
    }
    render() {
        let lang = localStorage.getItem('lang_type');
        return (
            <div className='footer'>
                <div className='footer_box'>
                    <div className='totop' ref={(x) => { this.toTomDom = x }} onClick={this.toTop}>
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
                                <p><a href="mailto:Support@cocosbcx.io">Email: Support@cocosbcx.io</a></p>
                            </div>
                            <div className='file' >
                                <img src={file} alt="" />
                                <p><a href={terms} target='_blank' rel="noopener noreferrer">Terms of Service</a> | <a href={privacy} target='_blank' rel="noopener noreferrer">Privacy Policy</a>  </p>
                            </div>
                        </div>
                        <div className="footer_con_r lt">
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
                            <img src={medium} alt="" ref={(x)=>{this.mediuma = x}} />
                        </a>
                        <a href="https://twitter.com/CocosBCX"  target='_blank' rel="noopener noreferrer">
                            <img src={twitter} ref={(x)=>{this.twittera = x}} alt="" />
                        </a>
                        <div className='wechet_box' onMouseEnter={() => { this.wxma.style.display = 'block' }}
                            onMouseLeave={() => { this.wxma.style.display = 'none' }}>
                            <img className='biao' src={wechet} ref={(x)=>{this.wecheta = x}} alt="" />
                            <img className='ma' src={wx} ref={(x) => { this.wxma = x }} alt="" />
                        </div>
                        <div className='zs_box' onMouseEnter={() => { this.zsma.style.display = 'block' }}
                            onMouseLeave={() => { this.zsma.style.display = 'none' }}>
                            <img className='biao' ref={(x)=>{this.zsa = x}} src={zs} alt="" />
                            <img className='ma' src={zsma} ref={(x) => { this.zsma = x }} alt="" />
                        </div>
                        <a href="https://www.weibo.com/p/1006062183715773" target='_blank' rel="noopener noreferrer">
                            <img src={weibo} ref={(x)=>{this.weiboa = x}} alt="" />
                        </a>
                        <a href={lang === 'zh' ? "https://t.me/CocosBCX" : 'https://t.me/cocosblockchainexpedition'} target='_blank' rel="noopener noreferrer">
                            <img src={tele} ref={(x)=>{this.telea = x}} alt="" />
                        </a>
                        <a href="https://github.com/cocos-bcx" target='_blank' rel="noopener noreferrer">
                            <img src={git} ref={(x)=>{this.gita = x}} alt="" />
                        </a>
                        <a href="https://www.reddit.com/user/cocos-bcx/" target='_blank' rel="noopener noreferrer">
                            <img src={reddit} ref={(x)=>{this.reddita = x}} alt="" />
                        </a>
                        <a href="https://discord.gg/jdJMNtC" target='_blank' rel="noopener noreferrer">
                            <img src={discord} ref={(x)=>{this.discorda = x}}  alt="" />
                        </a>
                    </div>
                    <div className='footer_bottom'>2018 Cocos-BCX All rights reserved.</div>
                </div>
            </div>
        );
    }
}

