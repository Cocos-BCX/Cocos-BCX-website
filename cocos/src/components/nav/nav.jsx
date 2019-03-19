import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from "react-router-dom";
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
        window.chooseLocale()
        window.history.go(0);

    }
    chooseEN = () => {
        localStorage.setItem('lang_type', 'en');
        window.chooseLocale()
        window.history.go(0);
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
    toDev = () => {
        window.location.hash = '#/develop'
    }
    toAbout = () => {
        window.location.hash = '#/about'
    }
    componentWillMount() {

    }
    closeLang = () => {
        document.addEventListener('click', () => {
            if( this.langBox){
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
        return (
            <div className='nav_box'>
                <div className="nav lt" >
                    <div className='nav_list_box'>
                        <div className='nav_home lt'  >
                            <NavLink to="/home" exact={true} activeClassName="active"
                                className='nav_home_click' ><FormattedMessage id='homepage' />
                            </NavLink>
                        </div>
                        <div className='nav_develop lt' onMouseEnter={this.showDevList} onMouseLeave={this.closeDevList} >
                            <NavLink to="/develop" exact={true} activeClassName="active"
                                className='nav_develop_click'  >
                                <span ref={(x) => { this.devtil = x }} >
                                    <FormattedMessage id='develop' />
                                </span>
                            </NavLink>
                            {this.state.devListSwitch ?
                                <div className='nav_develop_more_close' ></div> :
                                <div className='nav_develop_more' ></div>
                            }
                            <div className='nav_develop_list' ref={(x) => { this.devListBox = x }}
                                onClick={() => { this.toDev() }}>
                                <div className='nav_develop_list_box' >
                                    <div className='nav_develop_list_trans' ref={(x) => { this.devList = x }}>
                                        <div className='dev_a' onClick={(e) => { this.stopImmediate(e); window.open("https://mp.weixin.qq.com/s/EuM8mGfXh3QpwKLN7i9ITA", '_blank'); }}><FormattedMessage id='developPlan' /></div>
                                        <div className='dev_a' onClick={(e) => { this.stopImmediate(e); window.open("https://www.cocosbcx.io/", '_blank'); }} ><FormattedMessage id='developApi' /></div>
                                        <div className='dev_a' onClick={(e) => { this.stopImmediate(e); window.open("https://discuss.cocos2d-x.org/c/cocos-bcx", '_blank'); }} ><FormattedMessage id='developsq' /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='nav_jl lt'>
                            <NavLink to="/jl" exact={true} activeClassName="active"
                                className='nav_jl_click' ><FormattedMessage id='jili' />
                            </NavLink>
                        </div>
                        <div className='nav_st lt' >
                            <NavLink to="/product" exact={true} activeClassName="active"
                                className='nav_st_click' ><FormattedMessage id='stproduct' />
                            </NavLink>
                        </div>
                        <div className='nav_action lt'>
                            <NavLink to="/action/news" exact={true} activeClassName="active"
                                className='nav_action_click' ><FormattedMessage id='action' />
                            </NavLink>
                        </div>
                        <div className='nav_browser lt'>
                            <a href={lang === 'zh' ? "https://explorer.cocosbcx.io/" : 'https://explorer.cocosbcx.io?language=en'} rel="noopener noreferrer" className='nav_browser_click' target='_blank'><FormattedMessage id='browser' /></a>
                            {/* <NavLink to="/browser" exact={true} activeClassName="active"
                                className='nav_browser_click' ><FormattedMessage id='browser' />
                            </NavLink> */}
                        </div>
                        <div className='nav_about lt' onMouseEnter={this.showAboutList} onMouseLeave={this.closeAboutList}>
                            <NavLink to="/about" exact={true} activeClassName="active"
                                className='nav_about_click' > <span ref={(x) => { this.abouttil = x }} ><FormattedMessage id='about' />  </span>
                            </NavLink>
                            {this.state.aboutListSwitch ?
                                <div className='nav_about_more_close' ></div> :
                                <div className='nav_about_more' ></div>
                            }
                            <div className='nav_about_list' ref={(x) => { this.aboutListBox = x }}
                                onClick={() => { this.toAbout() }}>
                                <div className='nav_about_list_box' >
                                    <div className='nav_about_list_trans' ref={(x) => { this.aboutList = x }}>
                                        <div className='dev_a' onClick={(e) => { this.stopImmediate(e); window.open("https://www.cocosbcx.io/wp-content/themes/cocosBlog/source/white_paper.pdf", '_blank'); }}><FormattedMessage id='whiteBook' /></div>
                                        <div className='dev_a'  ><FormattedMessage id='team' /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lang_box lt' onClick={(e) => { this.langBox.style.display = 'block'; this.stopImmediate(e) }}>
                    <div className='lang'>
                        <div className='now'>中文</div>
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