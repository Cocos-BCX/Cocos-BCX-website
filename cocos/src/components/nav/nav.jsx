import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { explorer } from '../../api/api'
import { getLang } from '../../utils/chooselang'
import logo from '../../images/logow.png'
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
        let url = window.location.href;
        if (url.indexOf("?") != -1) {
            url = url.split("?")[0];
        }
        // window.chooseLocale()
        window.location.href = url
        // window.history.go(0);

    }
    chooseEN = () => {
        localStorage.setItem('lang_type', 'en');
        window.history.go(0);
    }
    showLang = (e) => {
        if (!this.langBox.style.display || this.langBox.style.display === 'none') {
            this.langBox.style.display = 'block'; this.stopImmediate(e)
        } else {
            this.langBox.style.display = 'none'; this.stopImmediate(e)
        }
    }
    //打开开发者菜单
    showDevList = (e) => {
        this.devListBox.style.display = 'block'
        this.setState({ devListSwitch: true })
        this.devtil.style.color = '#2AD9FE'
        setTimeout(() => {
            this.devList.style.transform = 'translateY(0)'
        })
    }
    //关闭开发者菜单
    closeDevList = (e) => {
        this.setState({ devListSwitch: false })
        this.devtil.style.color = ''
        this.devList.style.transform = 'translateY(-88px)'
        setTimeout(() => {
            this.devListBox.style.display = 'none'
        }, 300)

    }
    //打开关于我们菜单
    showAboutList = (e) => {
        this.aboutListBox.style.display = 'block'
        this.setState({ aboutListSwitch: true })
        this.abouttil.style.color = '#2AD9FE'
        setTimeout(() => {
            this.aboutList.style.transform = 'translateY(0)'
        })
    }
    //关闭关于我们菜单
    closeAboutList = (e) => {
        this.setState({ aboutListSwitch: false })
        this.abouttil.style.color = ''
        this.aboutList.style.transform = 'translateY(-88px)'
        setTimeout(() => {
            this.aboutListBox.style.display = 'none'
        }, 300)
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
    // toDev = () => {
    //     console.log(window.location);

    //     window.location.hash = '/develop'
    // }

    componentWillMount() {

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
            <div className='nav_box  bounceInLeft' >
                <div className='nav_logo_box'>
                    <NavLink to="/" exact={true} activeClassName="active">
                        <img src={logo} alt="" />
                    </NavLink>
                </div>
                <div className='nav_line'></div>
                <div className="nav lt" >
                    <div className={lang === 'zh' ? 'nav_list_box' : ' nav_list_en'}>
                        <div className='nav_home lt'  >
                            <NavLink to="/" exact={true} activeClassName="active"
                                className='nav_home_click' >{t.homepage}
                            </NavLink>
                        </div>
                        <div className='nav_develop lt' onMouseEnter={this.showDevList} onMouseLeave={this.closeDevList} >
                            <NavLink to="/develop" activeClassName="active"
                                className='nav_develop_click'  >
                                <span ref={(x) => { this.devtil = x }} >
                                    {t.develop}
                                </span>
                            </NavLink>
                            {this.state.devListSwitch ?
                                <div className='nav_develop_more_close' ></div> :
                                <div className='nav_develop_more' ></div>
                            }
                            <NavLink to="/develop" >
                                <div className='nav_develop_list' ref={(x) => { this.devListBox = x }}
                                >
                                    <div className='nav_develop_list_box' >
                                        <div className='nav_develop_list_trans' ref={(x) => { this.devList = x }}>
                                            <div className='dev_a'
                                                onClick={(e) => { this.stopImmediate(e); window.open(lang === 'zh' ? "https://mp.weixin.qq.com/s/n5FGEBOGYN4P-nknsa1l6g" : 'https://medium.com/@CocosBCX/cocos-bcx-alpha-testing-now-open-to-developers-globally-908880f67de7', '_blank'); }}>
                                                {t.developPlan}
                                            </div>
                                            <div className='dev_a'
                                                onClick={(e) => { this.stopImmediate(e); window.open(lang === 'zh' ? "https://cn-dev.cocosbcx.io" : 'https://dev.cocosbcx.io', '_blank'); }} >
                                                {t.developApi}
                                            </div>
                                            <div className='dev_a'
                                                onClick={(e) => { this.stopImmediate(e); window.open("https://forum.cocos.com/c/bcx", '_blank'); }} >
                                                {t.developsq}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className='nav_jl lt'>
                            <a href={lang === 'zh' ? "https://bcx.cocos.com" : 'https://bcx.cocos.com/en'} rel="noopener noreferrer" className='dev_a navBox' target='_blank'>{t.jili}</a>

                        </div>
                        <div className='nav_st lt' >
                            <NavLink to="/product" exact={true} activeClassName="active"
                                className='nav_st_click' >{t.stproduct}
                            </NavLink>
                        </div>
                        <div className='nav_action lt'>
                            <NavLink to="/action/" activeClassName="active"
                                className='nav_action_click' >{t.action}
                            </NavLink>
                        </div>
                        <div className='nav_browser lt'>
                            <a href={lang === 'zh' ? explorer : `${explorer}?language=en`} rel="noopener noreferrer" className='nav_browser_click' >{t.browser}</a>
                            {/* <NavLink to="/browser" exact={true} activeClassName="active"
                                className='nav_browser_click' ><FormattedMessage id='browser' />
                            </NavLink> */}
                        </div>
                        {/* <div className='nav_about lt' >
                            <NavLink to="/about" exact={true} activeClassName="active"
                                className='nav_about_click' > <span  ><FormattedMessage id='about' />  </span>
                            </NavLink>
                        </div> */}
                        <div className='nav_about lt' onMouseEnter={this.showAboutList} onMouseLeave={this.closeAboutList}>
                            <NavLink to="/about" activeClassName="active"
                                className='nav_about_click' > <span ref={(x) => { this.abouttil = x }} >{t.about}</span>
                            </NavLink>
                            {this.state.aboutListSwitch ?
                                <div className='nav_about_more_close' ></div> :
                                <div className='nav_about_more' ></div>
                            }
                            <NavLink to="/about" activeClassName="active">
                                <div className='nav_about_list' ref={(x) => { this.aboutListBox = x }}
                                    onClick={() => { }}>
                                    <div className='nav_about_list_box' >
                                        <div className='nav_about_list_trans' ref={(x) => { this.aboutList = x }}>
                                            <div className='dev_a' onClick={(e) => { this.stopImmediate(e); }}> <a href={lang === 'zh' ? 'https://www.cocosbcx.io/static/Whitepaper_zh.pdf' : 'https://www.cocosbcx.io/static/Whitepaper_en.pdf'} target="_blank" style={{ lineHeight: 'normal' }} className='w_book ' rel="noopener noreferrer">{t.whiteBook}</a></div>
                                            <NavLink to="/about" activeClassName="active">
                                                <div className='dev_a'  >{t.team}</div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>

                </div>
                <div className='lang_box lt' onClick={(e) => { this.showLang(e) }}>
                    <div className='lang' >
                        <div className='now'>{lang === 'en' ? '中文' : 'English'}</div>
                        <div className='now_jt'></div>
                    </div>
                    <div className='choose_lang_box' ref={(x) => { this.langBox = x }}>
                        <div className='chinese' onClick={this.chooseCH}>中文</div>
                        <div className='english' onClick={this.chooseEN}>English</div>
                    </div>
                </div>
            </div>
        );
    }
}