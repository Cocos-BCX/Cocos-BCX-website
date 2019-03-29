import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from "react-router-dom";
import Nav from '../nav/nav'
import { get, } from '../../api/api'
import play from '../../images/play.png'
import fenge from '../../images/fenge.png'
import game from '../../images/icon_game.png'
import daohang from '../../images/icon_daohang.png'
import eye from '../../images/icon_eye.png'
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
import dline from '../../images/dline.png'
import './home.css'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            black1: [{ b: b, w: w, url: 'http://www.ngc.fund/' }, { b: b1, w: w1, url: 'https://labs.binance.com/' }, { b: b2, w: w2, url: 'http://www.inblockchain.com/' }, { b: b3, w: w3, }, { b: b4, w: w4, url: 'https://500.co/' }, { b: b5, w: w5, url: 'https://www.blockvc.com/' }, { b: b6, w: w6, url: 'https://www.okcoin.com/capital' }, { b: b7, w: w7, url: 'http://yisucapital.com/' }, { b: b8, w: w8, url: 'http://gs.holdings/' }, { b: b9, w: w9, url: 'https://ont.io/' }],
            black2: [{ b: b10, w: w10, url: 'https://www.helloeos.com.cn/' }, { b: b11, w: w11, url: 'https://slowmist.io/' }, { b: b12, w: w12, url: 'https://nebulas.io/cn/' }, { b: b13, w: w13, url: 'https://loomx.io/' }, { b: b14, w: w14, url: 'https://www.imeos.one/' }],
            sysImg: [{ img: cocos1, text: 'system1' },
            { img: cocos2, text: 'system2' },
            { img: cocos3, text: 'system3' },
            { img: cocos4, text: 'system4' },
            { img: cocos5, text: 'system5' },],
            mapList: [{
                til1: 'map1',
                til3: 'md1',
            }, {
                til1: 'map2',
                til3: 'md2',
            }, {
                til1: 'map3',
                til3: 'md3',
            }, {
                til1: 'map4',
                til3: 'md4',
            }, {
                til1: 'map5',
                til3: 'md5',
            }],
            newsTopList: [],
            newsBottomList: []
        }
    }
    //获取指定3篇新闻
    getTopNews = () => {
        let lang = localStorage.getItem('lang_type');
        if (lang === 'en') {
            lang = 'en_US'
        } else if (lang === 'zh') {
            lang = 'zh_CN'
        }
        let url = 'news/recommend';
        let params = { lang: lang, };
        get(url, params).then(response => {
            console.log(response.data.data);
            this.setState({ newsTopList: response.data.data })
        })
    }
    //获取4篇新闻
    getNews = () => {
        let lang = localStorage.getItem('lang_type');
        if (lang === 'en') {
            lang = 'en_US'
        } else if (lang === 'zh') {
            lang = 'zh_CN'
        }
        let url = 'news/recent';
        let params = { lang: lang, limit: 4 };
        get(url, params).then(response => {
            this.setState({ newsBottomList: response.data.data })
        })
    }
    //打开播放器
    showVideo = () => {
        this.videoBox.style.transform = ' translateY(0)';
    }
    hideVideo = (e) => {
        this.stopImmediate(e)
        this.videoBox.style.transform = 'translateY(-30rem)';
    }
    //隐藏播放器
    closeVideo = () => {
        document.addEventListener('click', () => {
            if (this.videoBox) {
                this.videoBox.style.display = 'translateY(-30rem)';
            }
        }, false)
    }
    //阻止冒泡
    stopImmediate(e) {
        e = e || window.event;
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    componentDidMount() {
        this.getNews();
        this.getTopNews()
        this.closeVideo()
    }
    componentWillUnmount = () => {
        this.setState = (state, callback) => {
            return;
        };
    }
    render() {
        let lang = localStorage.getItem('lang_type');
        return (
            <div className='homepage_index'>
                <div className='video_box '
                    onClick={(e) => { this.hideVideo(e) }} ref={(x) => { this.videoBox = x }}>
                    <div className='video'>
                        {/* <div className='close_box' onClick={this.hideVideo}>
                            <img src={close} alt="" />
                        </div> */}
                        {
                            lang === 'en' ?
                                <iframe type="text/html" height={document.body.clientWidth * 9 / 16} width={document.body.clientWidth} src="https://www.youtube.com/embed/KiKc3FG9Auc?autoplay=1&loop=1&playlist=EMfebeQg2Z4&muted=1" allowtransparency='yes' allow="autoplay" frameBorder="0" ></iframe> :
                                <iframe className='video_play' height={document.body.clientWidth * 9 / 16} width={document.body.clientWidth}
                                    allow="autoplay; fullscreen" src='http://player.youku.com/embed/XNDA4NjA1NDAwMA==?autoplay=1&loop=1&playlist=EMfebeQg2Z4&muted=1'
                                    ref={(x) => { this.videoBox = x }} frameBorder='0' allowtransparency='yes' flashvars="isAutoPlay=true" allow="autoplay" ></iframe>
                        }
                    </div>
                </div>
                <div className='banner_box'>
                    <Nav></Nav>
                    <img src={logow} className='wlogo' alt="" />
                    <div className='home_btn_box'>
                        <h5>COCOS</h5>
                        <h5>BLOCKCHAIN EXPEDITION</h5>
                        <h6><FormattedMessage id='next' /></h6>
                        <div className='play_btn'>
                            <img src={play} className='play_btn lt' onClick={(e) => { this.showVideo(); this.stopImmediate(e) }} />
                            <p style={{"WebkitBoxOrient": "vertical"}} className='lt'><FormattedMessage id='nextex' /></p>
                        </div>
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
                        <div className='ex_l_box lt' >
                            <div className='ex_l_w lt'>
                                <img src={game} className='ex_l_img' alt="" />
                            </div>
                            <div className='ex_l_r lt'>
                                <h4 className='ex_img_til'><FormattedMessage id='ex_tel1' /></h4>
                                <p className='ex_img_text'><FormattedMessage id='ex_text1' /></p>
                            </div>
                        </div>
                        <div className='ex_l_box lt' >
                            <div className='ex_l_w lt'>
                                <img src={daohang} className='ex_l_img' alt="" />
                            </div>
                            <div className='ex_l_r lt'>
                                <h4 className='ex_img_til' style={lang === 'en' ? { fontSize: '.22rem' } : null}><FormattedMessage id='ex_tel2' /></h4>
                                <p style={{"WebkitBoxOrient": "vertical"}} className='ex_img_text' ><FormattedMessage id='ex_text2' /></p>
                            </div>
                        </div>
                        <div className='ex_l_box lt' >
                            <div className='ex_l_w lt'>
                                <img src={eye} className='ex_l_img' alt="" />
                            </div>
                            <div className='ex_l_r lt'>
                                <h4 className='ex_img_til'><FormattedMessage id='ex_tel3' /></h4>
                                <p className='ex_img_text'><FormattedMessage id='ex_text3' /></p>
                            </div>
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
                        <div className='news_til_more' >
                            <NavLink to="action/news" exact={true}>
                                <div>
                                    <FormattedMessage id='more' />
                                </div>
                            </NavLink>

                        </div>
                    </div>
                    <div className='news_main'>
                        <div className="news_top">
                            {this.state.newsTopList.map((item, index) => {
                                return <a href={item.resource} target="_blank" rel="noopener noreferrer" className='news_top_box ' key={index}>
                                    <div className='news_pic lt'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className='news_top_til lt'>
                                        <h5>{item.title}</h5>
                                        <div className='news_top_content lt' style={{"WebkitBoxOrient": "vertical"}}>{item.summary}</div>
                                    </div>
                                </a>
                            })}
                        </div>
                        <ul className='news_bottom'>
                            {this.state.newsBottomList.map((item, index) => {
                                return <li className='lt' key={index}>
                                    <a href={item.resource} target="_blank" rel="noopener noreferrer">
                                        <img src={item.image} className='img_box lt' />
                                        <div className='img_box_text lt'>
                                            <div>
                                                <h5 style={{"WebkitBoxOrient": "vertical"}}>{item.title}</h5>
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
                    </div>
                    <img src={cocoslogo} alt="" className='sys_logo' />
                    <img src={line} alt="" className='sys_line' />
                    <div className='sys_img'>
                        {this.state.sysImg.map((item, index) => {
                            return <div className='sys_img_box lt' key={index}>
                                <img src={item.img} alt="" />
                                <p><FormattedMessage id={item.text} /></p>
                            </div>
                        })}
                    </div>
                </div>
                <div className='map'>
                    <div className="news_til_box">
                        <div className="news_til">
                            <h3 style={lang==='en'?{fontSize:'.16rem'}:null}><FormattedMessage id='map' /></h3>
                            <div className='news_line'></div>
                        </div>
                        <div className="news_til_mask"></div>
                        <div className='news_til_more' >
                            <NavLink to="action/yb" exact={true}>
                                <div>
                                    <FormattedMessage id='more' />
                                </div>
                            </NavLink>

                        </div>
                    </div>
                    <div className='map_main_box'>
                        {this.state.mapList.map((item, index) => {
                            return <div className='map_s_box lt' key={index}>
                                <h5 className='lt'><FormattedMessage id={item.til3} /></h5>
                                <p style={{"WebkitBoxOrient": "vertical"}}  className='lt'><FormattedMessage id={item.til1} /></p>
                            </div>
                        })}
                        <div className='line_box'>
                            <img src={dline} alt="" />
                            <img src={dline} alt="" />
                            <img src={dline} alt="" />
                            <img src={dline} alt="" />
                            <img src={dline} alt="" />
                        </div>
                    </div>


                </div>
                <div className='hezuo'>
                    <div className="hezuo_box">
                        <div className="hezuo_head">
                            <div className='head_b'>
                                <img src={logow} alt="" />
                            </div>
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
                                    return <a href={item.url} target="_blank" rel="noopener noreferrer" key={index} className='lt' style={{ background: `url(${item.b}) no-repeat center`, backgroundSize: '1.26rem .86rem' }}
                                    /*     onMouseEnter={(e) => { e.target.style.background = `url(${item.w})no-repeat center` }}
                                        onMouseLeave={(e) => { e.target.style.background = `url(${item.b})no-repeat center` }} */
                                    >
                                    </a>
                                })}
                            </div>
                            <img src={jia} alt="" className="hezuo_middle" />
                            <div className="hezuo_bottom">
                                {this.state.black2.map((item, index) => {
                                    return <a href={item.url} target="_blank" rel="noopener noreferrer" key={index} className='lt' style={{ background: `url(${item.b}) no-repeat center`, backgroundSize: '1.26rem .86rem' }}
                                    /* onMouseEnter={(e) => { e.target.style.background = `url(${item.w})` }}
                                    onMouseLeave={(e) => { e.target.style.background = `url(${item.b})` }} */
                                    >
                                    </a>
                                })}
                            </div>
                        </div>
                        <div className='hezuo_sm'>
                            <h6> <FormattedMessage id='hzsm' /></h6>
                            <p> <FormattedMessage id='hzsmex' /></p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

