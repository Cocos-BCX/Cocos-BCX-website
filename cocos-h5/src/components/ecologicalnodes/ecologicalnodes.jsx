import React, { Component } from 'react';
import { getLang } from '../../utils/chooselang'
import Nav from '../nav/nav'
import FastClick from 'react-fastclick-alt'
import logow from '../../images/logow.png'
import ly from '../../images/lingying.png'
import hezuo from '../../images/hezuopic.png'

import horizontalBarLeft from './images/horizontal-bar-left.png'
import horizontalBarRight from './images/horizontal-bar-right.png'


import nodeecology1 from './images/node-ecology/1.png'
// import nodeecology2 from './images/node-ecology/2.png'
// import nodeecology3 from './images/node-ecology/3.png'

import bg1 from './images/bg1.png'
import bg2 from './images/bg2.png'
import ecosystemCn from './images/ecosystem/cn'
import ecosystemEn from './images/ecosystem/en'

import ecologicalnodesIcon from './images/icon'

import './ecologicalnodes.css'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamList: [
            ],
            adviser: [

            ]
        }
    }
    showPeople = (e) => {
        this.hidePeople(e)
        for (let index = 0; index < document.getElementsByClassName('people_ex_box').length; index++) {
            document.getElementsByClassName('people_ex_box')[index].style.display = 'none'
        }
        (document.getElementsByClassName('people_ex_box')[e]).style.display = 'block'
    }
    showPeopleTwo = (e) => {
        this.hidePeopleTwo(e)
        for (let index = 0; index < document.getElementsByClassName('people_ex_two').length; index++) {
            document.getElementsByClassName('people_ex_two')[index].style.display = 'none'
        }
        (document.getElementsByClassName('people_ex_two')[e]).style.display = 'block'
    }
    hidePeople = (e) => {
        for (let index = 0; index < document.getElementsByClassName('people_ex_two').length; index++) {
            document.getElementsByClassName('people_ex_two')[index].style.display = 'none'
        }
    }
    hidePeopleTwo = (e) => {
        for (let index = 0; index < document.getElementsByClassName('people_ex_box').length; index++) {
            document.getElementsByClassName('people_ex_box')[index].style.display = 'none'
        }
    }

    //给DOM绑定事件
    // handleDom() {
    //     document.addEventListener('click', (e) => {
    //     }, false);
    // }
    //阻止冒泡

    //关闭介绍
    closeLang = () => {
        document.addEventListener('click', () => {
            this.hidePeople()
            this.hidePeopleTwo()
        }, false)
    }
    componentDidMount() {
        this.closeLang()
    }
    stopImmediate(e) {
        e = e || window.event;
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    render() {
        let lang = localStorage.getItem('lang_type');
        let t = getLang();
        return (
            <FastClick>
                <div className='about'>
                    <div className="banner_a_box">
                        <Nav></Nav>
                        {/* <div className='white_book'>
                            <a href={lang === 'zh' ? 'https://www.cocosbcx.io/static/Whitepaper_zh.pdf' : 'https://www.cocosbcx.io/static/Whitepaper_en.pdf'} target="_blank" className='w_book rt' rel="noopener noreferrer">
                                {t.lookBook}
                            </a>
                        </div> */}
                    </div>
                    <div className='team_box'>
                        
                        <div className="news_til_box">
                            <div className="news_til">
                                {lang === 'zh' ?<h3 className="cn">{t.ecologicalnodesTitle1}</h3>:<h3 className="en">{t.ecologicalnodesTitle1}</h3>}
                                <div className='news_line'></div>
                            </div>
                            <div className="news_til_mask"></div>
                        </div>
                        <div className="center-container">
                            <div className="incentive-container">
                                <a href={t.incentive1Uri}>
                                    <img src={bg1} alt=""/>
                                    <div className='main-col-2-left-img-text'>
                                        <div className='main-col-2-img-text-title text-align-right'>{t.gtil}</div>
                                        <div className='main-col-2-img-text-horizontal text-align-right'>
                                            <img className='horizontal-bar-left' src={horizontalBarLeft} alt=""/>
                                        </div>
                                        <div className='main-col-2-img-text-title text-align-right'>{t.gdh}</div>
                                        <div className='main-col-2-img-text-date text-align-right'>{t.gdate}</div>
                                    </div>
                                </a>
                                <a href={t.incentive1Uri} className='main-col-2-describe'>
                                {t.incentiveContent1}
                                </a>
                                <a href="http://cocosbcxio.mikecrm.com/jVBsJdD" className='main-col-2-btn'>{t.applyBtn}</a>

                            </div>
                            
                            <div className="incentive-container">
                                <a href={t.incentive2Uri}>
                                <img src={bg2} alt=""/>
                                <div className='main-col-2-left-img-text'>
                                    <p className='main-col-2-img-text-title'>
                                        <span className="personNum">210,000,000  </span>COCOS</p>
                                    <p className='main-col-2-img-text-title'>{t.banner3}</p>
                                    <p className='main-col-2-img-text-right-horizontal'>
                                        <img className='horizontal-bar-right' src={horizontalBarRight} alt=""/>
                                    </p>
                                </div>
                                </a>
                                <a href={t.incentive2Uri} className='main-col-2-describe'>
                                {/* 2.1亿枚 COCOS 生态节点激励计划出炉 */}
                                {t.incentiveContent2}
                                </a>
                                <a href="/excitationConsultation" className='main-col-2-btn'>{t.QABtn}</a>
                            </div>
                        </div>
                        
                        
                    </div>

                    
                    <div className='team_box'>
                        
                        
                        
                        <div className="news_til_box">
                            <div className="news_til">
                                {lang === 'zh' ?<h3 className="cn">{t.ecologicalnodesTitle2}</h3>:<h3 className="en">{t.ecologicalnodesTitle2}</h3>}
                                <div className='news_line'></div>
                            </div>
                            <div className="news_til_mask"></div>
                        </div>

                        <div className="container">
                            {
                                t.ecosystemContent.map((item, index) => {
                                    return <div className="col-2-container bor1">
                                    <a href={item.linkUri}>
                                    {lang === 'zh' ?<img src={ecosystemCn[index]} alt=""/>:<img src={ecosystemEn[index]} alt=""/>}
                                        
                                        <div className="infomation">
                                            <p>{item.introduce}</p>
                                        </div>
                                    </a>
                                </div>
                                })
                            }
                            
                            {/* <div className="col-2-container bor1">
                                <a href={t.ecosystemLink2}>
                                    <img src={nodeecology1} alt=""/>
                                    <div className="infomation">
                                        <p>{t.ecosystemContent2}</p>
                                    </div>
                                </a>
                            </div> */}
                        </div>

                    </div>

                                        
                    <div className='team_box'>
                            
                        
                        <div className="news_til_box">
                            <div className="news_til">
                                {lang === 'zh' ?<h3 className="cn">{t.ecologicalnodesTitle3}</h3>:<h3 className="en">{t.ecologicalnodesTitle3}</h3>}
                                <div className='news_line'></div>
                            </div>
                            <div className="news_til_mask"></div>
                        </div>
                        <div className="blank20"></div>
                        {
                            t.ecologicalnodes.iconInfomation.map((item, index) => {
                                return <div className='icon-main'>
                                    <a href={item.link?item.link:'javascript:;'}>
                                        <img src={ecologicalnodesIcon[index]} alt=""/>
                                        <div className='icon-infomation'>
                                            <div className='title'>{item.title}</div>
                                            <div className='describe'>{item.describe}</div>
                                        </div>
                                    </a>
                                </div>
                            })
                        }
                        
                    </div>
                    <div className="blank70"></div>

                </div>
            </FastClick>
        );
    }
}