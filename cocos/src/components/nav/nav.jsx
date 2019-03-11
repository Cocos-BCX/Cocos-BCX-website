import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from "react-router-dom";
import './nav.css'

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devListSwitch: false
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

    //给DOM绑定事件
    handleDom() {
        document.addEventListener('click', (e) => {
            console.log(e.target);

        }, false);
    }
    //阻止冒泡
    // stopImmediate(e) {
    //     e = e || window.event;
    //     e.nativeEvent.stopImmediatePropagation();
    // }
    toDev = () => {
        window.location.hash = '#/develop'
    }
    componentDidMount() {
        this.handleDom()
    }
    render() {
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
                            <div className='nav_develop_list' ref={(x) => { this.devListBox = x }} onClick={() => { this.toDev() }}>
                                <div className='nav_develop_list_box'>
                                    <div className='nav_develop_list_trans' ref={(x) => { this.devList = x }}>
                                        <a href="https://mp.weixin.qq.com/s/EuM8mGfXh3QpwKLN7i9ITA" target='_blank' rel="noopener noreferrer"><FormattedMessage id='developPlan' /></a>
                                        <a href="https://www.cocosbcx.io/" target='_blank' rel="noopener noreferrer"><FormattedMessage id='developApi' /></a>
                                        <a href="https://discuss.cocos2d-x.org/c/cocos-bcx
" target='_blank' rel="noopener noreferrer"><FormattedMessage id='developsq' /></a>
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
                            <NavLink to="/action" exact={true} activeClassName="active"
                                className='nav_action_click' ><FormattedMessage id='action' />
                            </NavLink>
                        </div>
                        <div className='nav_browser lt'>
                        <a href="https://jdex.one/"  className='nav_browser_click' target='_blank'><FormattedMessage id='browser' /></a>
                            {/* <NavLink to="/browser" exact={true} activeClassName="active"
                                className='nav_browser_click' ><FormattedMessage id='browser' />
                            </NavLink> */}
                        </div>
                        <div className='nav_about lt'>
                            <NavLink to="/about" exact={true} activeClassName="active"
                                className='nav_about_click' ><FormattedMessage id='about' />
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='lang_box lt'></div>
            </div>
        );
    }
}