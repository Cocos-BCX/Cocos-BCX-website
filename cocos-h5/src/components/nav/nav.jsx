import React, { Component } from 'react';
import { getLang } from '../../utils/chooselang'
import FastClick from 'react-fastclick-alt'
import { NavLink } from "react-router-dom";
import { explorer } from '../../api/api'
import clogo from '../../images/clogo.png'
import close from '../../images/bclose.png'
import './nav.css'

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devListSwitch: false,
            aboutListSwitch: false,
        }
    }
    //选择中文
    chooseCH = () => {
        localStorage.setItem('lang_type', 'zh');
        window.history.go(0);

    }
    chooseEN = () => {
        localStorage.setItem('lang_type', 'en');
        window.history.go(0);
    }
    //显示导航
    showNav = () => {
        this.navBox.style.display = 'block'
    }
    hideNav = (e) => {
        this.stopImmediate(e)
        this.navBox.style.display = 'none'
    }

    //给DOM绑定事件
    handleDom() {
        document.addEventListener('click', (e) => {
        }, false);
    }
    //阻止冒泡
    stopImmediate(e) {
        e = e || window.event;
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }

    closeLang = () => {
        document.addEventListener('click', () => {
            if (this.langBox) {
                this.langBox.style.display = 'none';
            }
        }, false)
    }
    componentDidMount() {
        this.handleDom()
        this.closeLang()
    }
    render() {
        let lang = localStorage.getItem('lang_type');
        let t = getLang();
        return (
            <FastClick>
                <div className='nav_box'>
                    <div className='lang_box lt'
                        onClick={(e) => { this.langBox.style.display = 'block'; this.stopImmediate(e) }}>
                        <div className='lang'>{lang === 'en' ? '中文' : 'English'}</div>
                        <div className='choose_lang_box' ref={(x) => { this.langBox = x }}>
                            <div className='chinese' onClick={this.chooseCH}>中文</div>
                            <div className='english' onClick={this.chooseEN}>English</div>
                        </div>
                    </div>
                    <div className="nav lt" onClick={this.showNav} >
                        <div className='nav_list_box' ref={(x) => { this.navBox = x }} onClick={(e) => { this.hideNav(e) }}>
                            <div className='nav_logo_box'>
                                <img className='logo' src={clogo} alt="" />
                                <img className='close' src={close} alt="" />
                            </div>
                            <NavLink to="/" exact={true} activeClassName="active"
                                className='nav_home_click navBox' >{t.homepage}
                            </NavLink>

                            <NavLink to="/develop" exact={true} activeClassName="active"
                                className='nav_develop_click navBox'  >
                                {t.develop}
                            </NavLink>

                            <div className='dev_a navBox'
                                onClick={(e) => { this.stopImmediate(e); window.open(lang === 'zh' ? "https://mp.weixin.qq.com/s/bbtYU76j26PTxri8ytrxsA" : 'https://medium.com/@CocosBCX/cocos-bcx-alpha-testing-now-open-to-developers-globally-908880f67de7', '_blank'); }}>
                                {t.developPlan}
                            </div>
                            <div className='dev_a navBox'
                                onClick={(e) => { this.stopImmediate(e); window.open(lang === 'zh' ? "https://cn-dev.cocosbcx.io" : 'https://dev.cocosbcx.io', '_blank'); }} >
                                {t.developApi}
                            </div>
                            <div className='dev_a navBox'
                                onClick={(e) => { this.stopImmediate(e); window.open('https://github.com/cocos-bcx', '_blank'); }} >
                                GitHub
                            </div>
                            <div className='dev_a navBox'
                                onClick={(e) => { this.stopImmediate(e); window.open(lang === 'zh' ? explorer : `${explorer}?language=en`, '_blank'); }} >
                                {t.browser}
                            </div>

                            <a href={lang === 'zh' ? " https://bounty.cocosbcx.io" : ' https://bounty.cocosbcx.io'} rel="noopener noreferrer" className='dev_a navBox' target='_blank'>{t.navxs}</a>
                            <a href={lang === 'zh' ? "https://mp.weixin.qq.com/s/2bw7_nbtzqvFVZikU6EWBQ" : 'https://medium.com/cocosbcx/cocos-bcx-bounty-program-kick-off-8f325ae01f0b'} rel="noopener noreferrer" className='dev_a navBox' target='_blank'>{t.jili}</a>

                            <NavLink to="/product" exact={true} activeClassName="active"
                                className='nav_st_click navBox' >{t.stproduct}
                            </NavLink>


                            {/* <a href={lang === 'zh' ? explorer : `${explorer}?language=en`} className='nav_browser_click navBox' >{t.browser}</a> */}

                            <NavLink to="/about" exact={true} activeClassName="active"
                                className='nav_about_click navBox' > <span ref={(x) => { this.abouttil = x }} >{t.about}  </span>
                            </NavLink>
                            <div className=' navBox'>
                                <a href={lang === 'zh' ? 'https://www.cocosbcx.io/static/Whitepaper_zh.pdf' : 'https://www.cocosbcx.io/static/Whitepaper_en.pdf'} style={{ color: '#585858' }}>{t.whiteBook}</a>

                            </div>
                            <NavLink to="/action/news" exact={true} activeClassName="active"
                                className='nav_action_click navBox' >{t.action}
                            </NavLink>
                            <NavLink to="/about" exact={true} activeClassName="active"
                                className='nav_about_click navBox' > <span ref={(x) => { this.abouttil = x }} >{t.team} </span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </FastClick >
        );
    }
}