import React, { Component } from 'react';
import Nav from '../nav/nav'
import { getLang } from '../../utils/chooselang'
import luck from '../../images/luck.png'
import shotting from '../../images/shooting.png'
import dice from '../../images/dice.png'
import snake from '../../images/snake.png'
import tool1 from '../../images/tool1.png'
import tool2 from '../../images/tool2.png'
import tool3 from '../../images/tool3.png'
import bgimg from './images/banner.png'
import col2bg1 from './images/col-2-bg1.png'
import col2bg2 from './images/col-2-bg2.png'

import icon1 from './images/icon/1.png'
import icon2 from './images/icon/2.png'
import icon3 from './images/icon/3.png'
import icon4 from './images/icon/4.png'
import icon5 from './images/icon/5.png'
import icon6 from './images/icon/6.png'
import icon7 from './images/icon/7.png'
import icon8 from './images/icon/8.png'
import icon9 from './images/icon/9.png'
import icon10 from './images/icon/10.png'
import icon11 from './images/icon/11.png'
import icon12 from './images/icon/12.png'
import icon13 from './images/icon/13.png'
import icon14 from './images/icon/14.png'
import icon15 from './images/icon/15.png'
import icon16 from './images/icon/16.png'
import icon17 from './images/icon/17.png'
import icon18 from './images/icon/18.png'
import icon19 from './images/icon/19.png'
import icon20 from './images/icon/20.png'
import icon21 from './images/icon/21.png'
import icon22 from './images/icon/22.png'
import icon23 from './images/icon/23.png'

import nodeecology1 from './images/node-ecology/1.png'
import nodeecology2 from './images/node-ecology/2.png'
import nodeecology3 from './images/node-ecology/3.png'

import horizontalBarLeft from './images/horizontal-bar-left.png'
import horizontalBarRight from './images/horizontal-bar-right.png'

import ecologicalnodesIconInfomation from './config'

import './ecologicalnodes.css'

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameList: [
                { img: luck, url: 'http://tyche.yezi.one/', til: 'gname2', auther: 'gauther2', gex: 'gex2' },
                { img: shotting, url: 'http://shooter.cocosbcx.net/', til: 'gname3', auther: 'gauther3', gex: 'gex3' },
                { img: dice, url: 'http://dice.yezi.one/', til: 'gname4', auther: 'gauther4', gex: 'gex4' },
                { img: snake, url: 'http://snake-cocosbcx.cjfan.net/', til: 'gname5', auther: 'gauther5', gex: 'gex5' },
            ],
            toolList: [
                { img: tool1, url: 'https://explorer.cocosbcx.io/', til: 'tname1', auther: 'tauther1', gex: 'tex1' },
                { img: tool2, url: 'http://cocos-terminal.com/', til: 'tname2', auther: 'tauther2', gex: 'tex2' },
                { img: tool3, url: 'https://chrome.google.com/webstore/detail/cocospay/ffbhaeoepdfapfjhcihbbhlaigejfack', til: 'tname4', auther: 'tauther4', gex: 'tex4' },
            ],
            downLoad: '',
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
                        {/* <div className="news_til_box">
                            <div className="news_til">
                                <h3>{t.incentiveTitle1}</h3>
                                <div className='news_line'></div>
                            </div>
                        </div> */}
                        
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
                                    {/* horizontalBarRight */}
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
                                    this.state.iconInfomation.map((item, index) => {
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