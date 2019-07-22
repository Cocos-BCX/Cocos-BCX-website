import React, { Component } from 'react';
import Nav from '../nav/nav'
import { getLang } from '../../utils/chooselang'
import bgimg from './images/banner.png'
import col2bg1 from './images/col-2-bg1.png'
import col2bg2 from './images/col-2-bg2.png'


import nodeecology1 from './images/node-ecology/1.png'
import nodeecology2 from './images/node-ecology/2.png'
import nodeecology3 from './images/node-ecology/3.png'

import horizontalBarLeft from './images/horizontal-bar-left.png'
import horizontalBarRight from './images/horizontal-bar-right.png'

import ecologicalnodesIconInfomation from './config/index.js'

import './ecologicalnodes.css'

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconInfomation: ecologicalnodesIconInfomation.iconInfomation
        }
    }
    componentDidMount() {
        this.choose()
    }
    choose() {
        let agent = navigator.userAgent;
        console.log(agent);

        let isMac = /macintosh|mac os x/i.test(agent);
        if (isMac) {
            this.setState({ downLoad: 'https://cocosbcx.oss-cn-beijing.aliyuncs.com/CocosDesktop.dmg' })
        }
        if (agent.indexOf("Win") >= 0 || agent.indexOf("wow") >= 0) {
            this.setState({ downLoad: 'https://cocosbcx.oss-cn-beijing.aliyuncs.com/CocosDesktop.exe' })
        }

    }
    render() {
        let lang = localStorage.getItem('lang_type');
        let t = getLang(); 
        return (
            <div className='product'>
                <div className="banner_s_box" style={{ background: "url("+bgimg+") no-repeat center" }}>
                    <Nav></Nav>
                </div>
                <div className='dev_list_box'>


                    <div className='dev_game'>
                        <div className="news_til_box">
                            <div className="news_til">
                                <h3>{t.incentiveTitle1}</h3>
                                <div className='news_line'></div>
                            </div>
                        </div>
                        
                        <div className='container'>
                            <div className='main-col-2'>
                                <div className='main-col-2-img'>
                                    <img src={col2bg1} alt=""/>
                                    <div className='main-col-2-left-img-text'>
                                        <div className='main-col-2-img-text-title text-align-right'>{t.gtil}</div>
                                        <div className='main-col-2-img-text-horizontal text-align-right'>
                                            <img className='horizontal-bar-left' src={horizontalBarLeft} alt=""/>
                                        </div>
                                        <div className='main-col-2-img-text-title text-align-right'>{t.gdh}</div>
                                        <div className='main-col-2-img-text-date text-align-right'>{t.gdate}</div>
                                    </div>
                                </div>
                                <div className='main-col-2-describe'>
                                Cocos-BCX 百万美金激励计划出炉：开放泛节点生态计划与 COCOS Bounty
                                </div>
                                <a href="http://cocosbcxio.mikecrm.com/jVBsJdD" className='main-col-2-btn'>立即申请</a>
                            </div>
                            <div className='main-col-2'>
                                <div className='main-col-2-img'>
                                    <img src={col2bg2} alt=""/>
                                    <div className='main-col-2-left-img-text'>
                                        <p className='main-col-2-img-text-title'>210,000,000<span>COCOS</span></p>
                                        <p className='main-col-2-img-text-title'>{t.banner3}</p>
                                        <p className='main-col-2-img-text-right-horizontal'>
                                            <img className='horizontal-bar-right' src={horizontalBarRight} alt=""/>
                                        </p>
                                    </div>
                                </div>
                                <div className='main-col-2-describe'>2.1亿枚 COCOS 生态节点激励计划出炉</div>
                                <a href="/excitationConsultation" className='main-col-2-btn'>我要咨询</a>
                            </div>
                        </div>
                    </div>

                    
                    <div className='dev_game'>
                        <div className="news_til_box">
                            <div className="news_til">
                                <h3>节点生态</h3>
                                <div className='news_line'></div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='main-col-3'>
                                <div className='main-col-3-img'>
                                    <img src={nodeecology1} alt=""/>
                                </div>
                                <div className='main-col-3-describe'>
                                Cocos-BCX 百万美金激励计划出炉：开放泛节点生态计划与 COCOS Bounty
                                </div>
                            </div>
                            <div className='main-col-3'>
                                <div className='main-col-3-img'>
                                    <img src={nodeecology2} alt=""/>
                                </div>
                                <div className='main-col-3-describe'>
                                Cocos-BCX 百万美金激励计划出炉：开放泛节点生态计划与 COCOS Bounty
                                </div>
                            </div>
                            <div className='main-col-3'>
                                <div className='main-col-3-img'>
                                    <img src={nodeecology3} alt=""/>
                                </div>
                                <div className='main-col-3-describe'>
                                Cocos-BCX 百万美金激励计划出炉：开放泛节点生态计划与 COCOS Bounty
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='dev_game'>
                        <div className="news_til_box">
                            <div className="news_til">
                                <h3>节点介绍</h3>
                                <div className='news_line'></div>
                            </div>
                        </div>
                        <div className='container'>
                                {
                                    this.state.iconInfomation.map((item) => {
                                        return <div className='main-col-3'>
                                            <a href={item.link?item.link:'javascript:;'}>
                                                <div className='main-col-3-icon-content'>
                                                    <div className='main-col-3-icon'>
                                                        <img src={item.icon} alt=""/>
                                                    </div>
                                                    <div className='main-col-3-icon-infomation'>
                                                        <div className='title'>{item.title}</div>
                                                        <div className='describe'>{item.describe}</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    })
                                }
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}