import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Nav from '../nav/nav'
import play from '../../images/play.png'
import fenge from '../../images/fenge.png'
import game from '../../images/icon_game.png'
import daohang from '../../images/icon_daohang.png'
import eye from '../../images/icon_eye.png'
import new1 from '../../images/new1.png'
import newl1 from '../../images/newl1.png'
import cocoslogo from '../../images/COCOS_logo.png'
import line from '../../images/line.png'
import cocos1 from '../../images/cocos1.png'
import cocos2 from '../../images/cocos2.png'
import cocos3 from '../../images/cocos3.png'
import cocos4 from '../../images/cocos4.png'
import cocos5 from '../../images/cocos5.png'
import logow from '../../images/logow.png'
import b from '../../images/gray.png'
import b1 from '../../images/gray(1).png'
import b2 from '../../images/gray(2).png'
import b3 from '../../images/gray(3).png'
import b4 from '../../images/gray(4).png'
import b5 from '../../images/gray(5).png'
import b6 from '../../images/gray(6).png'
import b7 from '../../images/gray(7).png'
import b8 from '../../images/gray(8).png'
import b9 from '../../images/gray(9).png'
import b10 from '../../images/gray(10).png'
import b11 from '../../images/gray(11).png'
import b12 from '../../images/gray(12).png'
import b13 from '../../images/gray(13).png'
import b14 from '../../images/gray(14).png'
import w from '../../images/white.png'
import w1 from '../../images/white(1).png'
import w2 from '../../images/white(2).png'
import w3 from '../../images/white(3).png'
import w4 from '../../images/white(4).png'
import w5 from '../../images/white(5).png'
import w6 from '../../images/white(6).png'
import w7 from '../../images/white(7).png'
import w8 from '../../images/white(8).png'
import w9 from '../../images/white(9).png'
import w10 from '../../images/white(10).png'
import w11 from '../../images/white(11).png'
import w12 from '../../images/white(12).png'
import w13 from '../../images/white(13).png'
import w14 from '../../images/white(14).png'
import jia from '../../images/jia.png'
import close from '../../images/close.png'
import './home.css'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            black1: [{ b: b, w: w }, { b: b1, w: w1 }, { b: b2, w: w2 }, { b: b3, w: w3 }, { b: b4, w: w4 }, { b: b5, w: w5 }, { b: b6, w: w6 }, { b: b7, w: w7 }, { b: b8, w: w8 }, { b: b9, w: w9 }],
            black2: [{ b: b10, w: w10 }, { b: b11, w: w11 }, { b: b12, w: w12 }, { b: b13, w: w13 }, { b: b14, w: w14 }],
            sysImg: [{ img: cocos1, text: 'Game developer' },
            { img: cocos2, text: 'Blockchain' },
            { img: cocos3, text: 'Developers' },
            { img: cocos4, text: 'End-users' },
            { img: cocos5, text: 'Copyrights&IPs' },],
            mapList: [{
                til1: '更新 Cocos-BCX 链系统',
                til2: '节点抗压能力优化',
                til3: '尝试优化节点爆发性事务容忍能力...',
            }, {
                til1: '更新 Cocos-BCX 链系统',
                til2: '节点抗压能力优化',
                til3: '尝试优化节点爆发性事务容忍能力 ...',
            }, {
                til1: '更新 Cocos-BCX 链系统',
                til2: '节点抗压能力优化',
                til3: '尝试优化节点爆发性事务容忍能力 ...',
            }, {
                til1: '更新 Cocos-BCX 链系统',
                til2: '节点抗压能力优化',
                til3: '尝试优化节点爆发性事务容忍能力 ...',
            }, {
                til1: '更新 Cocos-BCX 链系统',
                til2: '节点抗压能力优化',
                til3: '尝试优化节点爆发性事务容忍能力 ...',
            }],
            newsTopList: [{
                url: 'https://www.eosjoy.io',
                img: new1,
                til: 'SED MOLESTIE FEUGIAT LECTUS TEMPUS ERAT ',
                text: 'Nam non nisl. Phasellus commodo libero ac massa. Nulla di euism odm lesu ada nibh. Curabitur accumsan selm maleis uada loreld accu msla viverkra Lorem ipsum.'
            }, {
                url: 'https://www.eosjoy.io',
                img: new1,
                til: 'SED MOLESTIE FEUGIAT LECTUS TEMPUS ERAT ',
                text: 'Nam non nisl. Phasellus commodo libero ac massa. Nulla di euism odm lesu ada nibh. Curabitur accumsan selm maleis uada loreld accu msla viverkra Lorem ipsum.'
            }, {
                url: 'https://www.eosjoy.io',
                img: new1,
                til: 'SED MOLESTIE FEUGIAT LECTUS TEMPUS ERAT ',
                text: 'Nam non nisl. Phasellus commodo libero ac massa. Nulla di euism odm lesu ada nibh. Curabitur accumsan selm maleis uada loreld accu msla viverkra Lorem ipsum.'
            },],
            newsBottomList: [
                {
                    url: 'https://www.eosjoy.io',
                    img: newl1,
                    til: 'MORBI NON SEM A LACUS PORTA SUSPENDISSE VITAE SAPIEN ',
                },
                {
                    url: 'https://www.eosjoy.io',
                    img: newl1,
                    til: 'MORBI NON SEM A LACUS PORTA SUSPENDISSE VITAE SAPIEN ',
                },
                {
                    url: 'https://www.eosjoy.io',
                    img: newl1,
                    til: 'MORBI NON SEM A LACUS PORTA SUSPENDISSE VITAE SAPIEN ',
                },
                {
                    url: 'https://www.eosjoy.io',
                    img: newl1,
                    til: 'MORBI NON SEM A LACUS PORTA SUSPENDISSE VITAE SAPIEN ',
                },
                {
                    url: 'https://www.eosjoy.io',
                    img: newl1,
                    til: 'MORBI NON SEM A LACUS PORTA SUSPENDISSE VITAE SAPIEN ',
                },
                {
                    url: 'https://www.eosjoy.io',
                    img: newl1,
                    til: 'MORBI NON SEM A LACUS PORTA SUSPENDISSE VITAE SAPIEN ',
                },
            ]
        }
    }
    //打开播放器
    showVideo = () => {
        this.videoBox.style.display = 'flex';
    }
    hideVideo = () => {
        this.videoBox.style.display = 'none';
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className='homepage_index'>
                <div className='video_box' ref={(x) => { this.videoBox = x }}>
                    <div className='video'>
                        <div className='close_box' onClick={this.hideVideo}>
                            <img src={close} alt="" />
                        </div>
                        <iframe width="1200px" height="688px" src='http://player.youku.com/embed/XNDA4NjA1NDAwMA==?autoplay=0' frameBorder='0' >
                        </iframe>
                    </div>
                </div>
                <div className='banner_box'>
                    <Nav></Nav>
                    <div className='play_btn' onClick={this.showVideo}>
                        <img src={play} alt="" />

                    </div>
                </div>
                <div className='explane'>
                    <div className="expplane_til"><FormattedMessage id='explane' /></div>
                    <div className="expplane_main">
                        <ul>
                            <li><FormattedMessage id='exf' /></li>
                            <li><FormattedMessage id='exs' /></li>
                        </ul>
                    </div>
                    <img className='fenge' src={fenge} alt="" />
                    <div className='explane_img'>
                        <div className='ex_l_box lt' style={{ marginLeft: '66px' }}>
                            <div className='ex_l_w'>
                                <img src={game} className='ex_l_img' alt="" />
                            </div>
                            <h4 className='ex_img_til'><FormattedMessage id='ex_tel1' /></h4>
                            <p className='ex_img_text'><FormattedMessage id='ex_text1' /></p>
                        </div>
                        <div className='ex_l_box lt' style={{ marginLeft: '86px' }}>
                            <div className='ex_l_w'>
                                <img src={daohang} className='ex_l_img' alt="" />
                            </div>
                            <h4 className='ex_img_til'><FormattedMessage id='ex_tel2' /></h4>
                            <p className='ex_img_text' style={{ width: '282px' }}><FormattedMessage id='ex_text2' /></p>
                        </div>
                        <div className='ex_l_box lt' style={{ marginLeft: '86px' }}>
                            <div className='ex_l_w'>
                                <img src={eye} className='ex_l_img' alt="" />
                            </div>
                            <h4 className='ex_img_til'><FormattedMessage id='ex_tel3' /></h4>
                            <p className='ex_img_text'><FormattedMessage id='ex_text3' /></p>
                        </div>
                    </div>
                </div>
                <div className='news_box'>
                    <div className="news_til_box">
                        <div className="news_til">
                            <h3><FormattedMessage id='news' /></h3>
                            <div className='news_line'></div>
                        </div>
                        <div className="news_til_mask"></div>
                        <div className='news_til_more'><div><FormattedMessage id='more' /></div></div>
                    </div>
                    <div className='news_main'>
                        <div className="news_top">
                            {this.state.newsTopList.map((item, index) => {
                                return <div className='news_top_box lt' key={index}>
                                    <div className='news_pic'>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer"><img src={item.img} alt="" /></a>
                                        <div className='news_top_til'>
                                            <div>
                                                <h5>{item.til}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='news_top_content'>{item.text}</div>
                                </div>
                            })}
                        </div>
                        <ul className='news_bottom'>
                            {this.state.newsBottomList.map((item, index) => {
                                return <li className='lt' key={index}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        <div className='img_box lt'>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className='img_box_text lt'>
                                            <div>
                                                <h5>{item.til}</h5>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className='system'>
                    <div className="system_til_box">
                        <div className="sys_til_our">
                            <h4><FormattedMessage id='system' /></h4>
                        </div>
                        <div className="sys_til_ex"><FormattedMessage id='sysex' /></div>
                    </div>
                    <div className='sys_logo'>
                        <img src={cocoslogo} alt="" />
                    </div>
                    <div className='sys_line'>
                        <img src={line} alt="" />
                    </div>
                    <div className='sys_img'>
                        {this.state.sysImg.map((item, index) => {
                            return <div className='sys_img_box lt' key={index}>
                                <img src={item.img} alt="" />
                                <p>{item.text}</p>
                            </div>
                        })}
                    </div>
                </div>
                <div className='map'>
                    <div className="news_til_box">
                        <div className="news_til">
                            <h3><FormattedMessage id='map' /></h3>
                            <div className='news_line'></div>
                        </div>
                        <div className="news_til_mask"></div>
                        <div className='news_til_more'><div><FormattedMessage id='more' /></div></div>
                    </div>
                    <div className='map_main_box'>
                        {this.state.mapList.map((item, index) => {
                            return <div className='map_s_box lt' key={index}>
                                <p>{item.til1}</p>
                                <p>{item.til2}</p>
                                <p>{item.til3}</p>
                                <h5>{item.time}</h5>
                            </div>
                        })}
                    </div>
                    <div className='point_line'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className='hezuo'>
                    <div className="hezuo_box">
                        <div className="hezuo_head">
                            <div className='head_b'>
                                <img src={logow} alt="" />
                            </div>
                            <div className='head_w'></div>
                            <div className='head_til'>
                                <div className='head_til_box'>
                                    <FormattedMessage id='hz' />
                                </div>
                                <div className='head_til_b'></div>
                            </div>
                        </div>
                        <div className='hezuo_com'>
                            <div className="hezuo_top">
                                {this.state.black1.map((item, index) => {
                                    return <div key={index} className='lt' style={{ background: `url(${item.b})`, }}
                                        onMouseEnter={(e) => { e.target.style.background = `url(${item.w})` }}
                                        onMouseLeave={(e) => { e.target.style.background = `url(${item.b})` }}
                                    >
                                    </div>
                                })}
                            </div>
                            <div className="hezuo_middle">
                                <img src={jia} alt="" />
                            </div>
                            <div className="hezuo_bottom">
                                {this.state.black2.map((item, index) => {
                                    return <div key={index} className='lt' style={{ background: `url(${item.b})`, }}
                                        onMouseEnter={(e) => { e.target.style.background = `url(${item.w})` }}
                                        onMouseLeave={(e) => { e.target.style.background = `url(${item.b})` }}
                                    >
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className='hezuo_sm'>
                            <h6> <FormattedMessage id='hzsm' /></h6>
                            <p> <FormattedMessage id='hzsmex' /></p>
                        </div>
                    </div>
                </div>
         
                {/* <iframe type="text/html" src="http://www.youtube.com/embed/KiKc3FG9Auc?autoplay=1&controls=0" frameBorder="0" ></iframe> */}
            </div >
        );
    }
}

