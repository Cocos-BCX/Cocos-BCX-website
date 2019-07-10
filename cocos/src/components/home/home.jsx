import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Nav from '../nav/nav'
import { get, } from '../../api/api'
import { getLang } from '../../utils/chooselang'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
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
import close from '../../images/close.png'
import dline from '../../images/dline.png'
import './home.css'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: localStorage.getItem('lang_type'),
            black1: [{ b: b, w: w, url: 'http://www.ngc.fund/' }, { b: b1, w: w1, url: 'https://labs.binance.com/' }, { b: b2, w: w2, url: 'http://www.inblockchain.com/' }, { b: b3, w: w3, }, { b: b4, w: w4, url: 'https://500.co/' }, { b: b5, w: w5, url: 'https://www.blockvc.com/' }, { b: b6, w: w6, url: 'https://www.okcoin.com/capital' }, { b: b7, w: w7, url: 'http://yisucapital.com/' }, { b: b8, w: w8, url: 'http://gs.holdings/' }, { b: b9, w: w9, url: 'https://ont.io/' }],
            black2: [{ b: b10, w: w10, url: 'https://www.helloeos.com.cn/' }, { b: b11, w: w11, url: 'https://slowmist.io/' }, { b: b12, w: w12, url: 'https://bitpie.com/' }, { b: b13, w: w13, url: 'https://loomx.io/' }, { b: b14, w: w14, url: 'https://www.imeos.one/' }],
            sysImg: [{ img: cocos1, text: 'system1' },
            { img: cocos2, text: 'system2' },
            { img: cocos3, text: 'system3' },
            { img: cocos4, text: 'system4' },
            { img: cocos5, text: 'system5' },],
            mapList: [
                {
                    til1: 'map1',
                    til2: 'map11',
                    til3: 'md1',
                },
                {
                    til1: 'map5',
                    til2: 'map55',
                    til3: 'md5',
                },
                {
                    til1: 'map4',
                    til2: 'map44',
                    til3: 'md4',
                },
                {
                    til1: 'map3',
                    til2: 'map33',
                    til3: 'md3',
                },
                {
                    til1: 'map2',
                    til2: 'map22',
                    til3: 'md2',
                },],
            newsTopList: [],
            newsBottomList: []
        }
    }
    //banner轮播
    runbanner = () => {
        var swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                // delay: 4000,
                // disableOnInteraction: false,
            },
            lazy: {
                //loadPrevNext: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
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
            this.setState({ newsTopList: response.data.data })
        })
    }
    //获取6篇新闻
    getNews = () => {
        let lang = localStorage.getItem('lang_type');
        if (lang === 'en') {
            lang = 'en_US'
        } else if (lang === 'zh') {
            lang = 'zh_CN'
        }
        let url = 'news/recent';
        let params = { lang: lang, };
        get(url, params).then(response => {
            this.setState({ newsBottomList: response.data.data })
        })
    }
    //打开播放器
    showVideo = () => {
        if (this.state.lang === 'en') {
            this.youku.src = 'https://video.cocosbcx.net/Cocos-BCX%20en.mp4'
        } else {
            this.youku.src = 'https://video.cocosbcx.net/Cocos-BCX%20cn.mp4'
        }
        this.videoBox.style.display = 'flex';

    }
    hideVideo = () => {
        this.youku.src = ''
        this.videoBox.style.display = 'none';
    }
    //隐藏播放器
    closeVideo = () => {
        document.addEventListener('click', () => {
            if (this.videoBox) {
                this.youku.src = ''
                this.videoBox.style.display = 'none';
            }
        }, false)
    }
    //阻止冒泡
    stopImmediate(e) {
        e = e || window.event;
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    //引擎动画
    yqt() {
        let box = document.getElementsByClassName('explane_img')[0];
        let ele = document.getElementsByClassName('ex_l_box');
        let to = () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let cHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            if (scrollTop > (box.offsetTop - cHeight)) {
                for (let i = 0; i < ele.length; i++) {
                    setTimeout(() => {
                        ele[i].style.opacity = '1';
                    }, 0 + i * 200)
                }
            }
        }
        document.addEventListener('scroll', to)
    }
    //技术进展动画
    jst() {
        let box = document.getElementsByClassName('map_main_box')[0];
        let ele = document.getElementsByClassName('map_s_box');
        let to = () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let cHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            if (scrollTop > (box.offsetTop - cHeight)) {
                for (let i = 0; i < ele.length; i++) {
                    setTimeout(() => {
                        ele[i].style.transform = 'translateY(0)';
                    }, 0 + i * 200)
                }
            }
        }
        document.addEventListener('scroll', to)
    }
    //合作伙伴动画
    hzt() {
        let box = document.getElementsByClassName('hezuo_pic');
        let to = () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let cHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            for (let j = 0; j < box.length; j++) {
                if (scrollTop - 50 > (box[j].offsetTop - cHeight)) {
                    box[j].style.transform = 'translateY(0)';
                }
            }
        }
        document.addEventListener('scroll', to)
    }
    hzdt() {
        let box = document.getElementsByClassName('hz_picd');
        let to = () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let cHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            for (let j = 0; j < box.length; j++) {
                if (scrollTop - 50 > (box[j].offsetTop - cHeight)) {
                    box[j].style.transform = 'translateY(0)';
                }
            }
        }
        document.addEventListener('scroll', to)
    }
    //计算到页面顶部的距离
    offset(ele) {
        let l = ele.offsetLeft;// 先保存元素外边框到上级参照物的内边框的距离
        let t = ele.offsetTop;
        let temp = ele.offsetParent;// 用 temp去存储上级参照物
        while (temp && temp.nodeName.toLowerCase() !== "body") {
            //判断上级参照物是不是存在,不存在的话说明 ele 就是body;
            // 如果存在，并且不是body,就接着向上累加 offset值
            l += temp.offsetLeft + temp.clientLeft;
            t += temp.offsetTop + temp.clientTop;
            temp = temp.offsetParent;
        }
        return {
            top: t,
            left: l
        };
    }
    //banner动画
    bannerTrans() {

        let container = document.getElementsByClassName('container')[0];
        let inner = this.banner;
        let mouse = {
            _x: 0,
            _y: 0,
            x: 0,
            y: 0,
            updatePosition: function (event) {
                let e = event || window.event;
                this.x = e.clientX - this._x;
                this.y = (e.clientY - this._y) * -1;
            },
            setOrigin: function (e) {
                this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
            },
            show: function () {
                return "(" + this.x + ", " + this.y + ")";
            },
        };


        // Track the mouse position relative to the center of the container.
        mouse.setOrigin(this.banner);

        //-----------------------------------------

        let counter = 0;
        let updateRate = 10;
        let isTimeToUpdate = function () {
            return counter++ % updateRate === 0;
        };

        //-----------------------------------------

        let onMouseEnterHandler = function (event) {
            update(event);
        };

        let onMouseLeaveHandler = function () {
            inner.style = "";
        };

        let onMouseMoveHandler = function (event) {
            if (isTimeToUpdate()) {
                update(event);
            }
        };

        //-----------------------------------------

        let update = function (event) {
            mouse.updatePosition(event);
            updateTransformStyle(
                (mouse.y / inner.offsetHeight / 2).toFixed(2),
                (mouse.x / inner.offsetWidth / 2).toFixed(2)
            );
        };

        let updateTransformStyle = function (x, y) {
            let style = "rotateX(" + x / 5 + "deg) rotateY(" + y / 5 + "deg)";
            inner.style.transform = style;
            inner.style.webkitTransform = style;
            inner.style.mozTransform = style;
            inner.style.msTransform = style;
            inner.style.oTransform = style;
        };

        //-----------------------------------------

        container.onmouseenter = onMouseEnterHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmousemove = onMouseMoveHandler;
    }

    componentDidMount() {
        this.runbanner()
        window.onload = (() => {
            this.runbanner()
        })
        this.getNews();
        this.getTopNews()
        this.closeVideo();
        this.yqt()
        this.jst()
        this.hzt()
        this.hzdt()



    }

    componentWillUnmount = () => {
        this.setState = (state, callback) => {
            return;
        };
    }
    componentWillMount() {
    }

    render() {
        let lang = localStorage.getItem('lang_type');
        let t = getLang();
        return (
            <div className='homepage_index'>
                <div className='video_box' ref={(x) => { this.videoBox = x }}>
                    <div className='video'>
                        <div className='close_box' onClick={this.hideVideo}>
                            <img src={close} alt="" />
                        </div>
                        {
                            lang === 'en' ?
                                <iframe type="text/html" width="1200px" height="688px" ref={(x) => { this.youku = x }} src="" frameBorder="0" allowFullScreen allowtransparency='yes' allow="autoplay"></iframe> :
                                <iframe width="1200px" height="688px" ref={(x) => { this.youku = x }} src='' frameBorder='0' allowtransparency='yes' flashvars="isAutoPlay=true" allow="autoplay" >
                                </iframe>
                            // <embed src='http://player.youku.com/player.php/sid/XNDA4NjA1NDAwMA==/v.swf' allowFullScreen={true} flashvars="isAutoPlay=true" quality='high' width='480' height='400' align='middle' allowscriptaccess='always' type='application/x-shockwave-flash'></embed>
                        }

                    </div>
                </div>
                <div className='container'>
                    <div className="nav-box">
                        <Nav choose={this.props.choose}></Nav>
                    </div>
                    <div className="swiper-container" >
                        <div className="swiper-wrapper" >
                            <div className="swiper-slide slide-3" >
                                <a href={lang === 'zh' ? "https://mp.weixin.qq.com/s/izOYBwMAeeI8byrRicwigw" : 'https://medium.com/@CocosBCX/cocos-bcx-launched-ecosystem-incentive-plan-globally-1045eec0ca07'} target="_blank" rel="noopener noreferrer">
                                    <div key="amache" className='banner_box bannern_box full' ref={(x) => { this.banner = x }} >
                                        <div className='home_btn_box_g'>
                                            <div className='til'>210,000,000<span> COCOS</span></div>
                                            <div className='text'>{t.banner3}</div>
                                            <div className='line'></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="swiper-slide slide-2" >
                                <a href={lang === 'zh' ? "https://mp.weixin.qq.com/s/2bw7_nbtzqvFVZikU6EWBQ" : 'https://medium.com/@CocosBCX/cocos-bcx-will-launch-testnet-1-0-gang-rinpoche-on-june-6-8cbb0b90e2e0'} target="_blank" rel="noopener noreferrer">
                                    <div key="amache" className='banner_box bannerg_box full' ref={(x) => { this.banner = x }} >
                                        <div className='home_btn_box_g'>
                                            <div className='til'>{t.gtil}</div>
                                            <div className='line'></div>
                                            <p className='dh'>{t.gdh}</p>
                                            <p className='date'>{t.gdate}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>


                            <div className="swiper-slide slide-1" >
                                <div key="amache" className='banner_box animated full' ref={(x) => { this.banner = x }} >
                                    <div className='home_btn_box'>
                                        <div className='home_btn_box_mask  tada delay-1s'>
                                            <h5>COCOS</h5>
                                            <h5>BLOCKCHAIN EXPEDITION</h5>
                                            <h6>{t.next}</h6>
                                            <div className='play_btn'>
                                                <img src={play} alt="" className='lt' onClick={(e) => { this.showVideo(); this.stopImmediate(e) }} />
                                                <p className='lt'>{t.nextex}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev swiper-button-blue" style={{ opacity: '.5' }}></div>
                        <div className="swiper-button-next swiper-button-blue" style={{ opacity: '.5' }}></div>
                    </div>
                </div>

                <div className='explane'>
                    <div className="expplane_til">{t.explane}</div>
                    <div className="expplane_main">
                        <ul>
                            <li>{t.exf}</li>
                            <li>{t.exs}</li>
                        </ul>
                    </div>
                    <img className='fenge' src={fenge} alt="" />
                    <div className='explane_img'>
                        <div className='ex_l_box lt' >
                            <div className='ex_l_w'>
                                <img src={game} className='ex_l_img' alt="" />
                            </div>
                            <h4 className='ex_img_til'>{t.ex_tel1}</h4>
                            <p className='ex_img_text'>{t.ex_text1}</p>
                        </div>
                        <div className='ex_l_box lt' >
                            <div className='ex_l_w'>
                                <img src={daohang} className='ex_l_img' alt="" />
                            </div>
                            <h4 className='ex_img_til'>{t.ex_tel2}</h4>
                            <p className='ex_img_text' >{t.ex_text2}</p>
                        </div>
                        <div className='ex_l_box lt' >
                            <div className='ex_l_w'>
                                <img src={eye} className='ex_l_img' alt="" />
                            </div>
                            <h4 className='ex_img_til'>{t.ex_tel3}</h4>
                            <p className='ex_img_text'>{t.ex_text3}</p>
                        </div>
                    </div>
                </div>
                <div className='news_box'>
                    <div className="news_til_box">
                        <div className="news_til">
                            <h3>{t.news}</h3>
                            <div className='news_line'></div>
                        </div>
                        <div className="news_til_mask"></div>
                        <div className='news_til_more' >
                            <NavLink to="action/news" exact={true}>
                                <div>
                                    {t.more}
                                </div>
                            </NavLink>

                        </div>
                    </div>
                    <div className='news_main'>
                        <div className="news_top">
                            {this.state.newsTopList.map((item, index) => {
                                return <div className='news_top_box lt' key={index}>
                                    <div className='news_pic'>
                                        <a href={item.resource} target="_blank" rel="noopener noreferrer"><img src={item.image} alt="" /></a>
                                        <div className='news_top_til'>
                                            <div>
                                                <h5>{item.title}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='news_top_content'>{item.summary}</div>
                                </div>
                            })}
                        </div>
                        <ul className='news_bottom'>
                            {this.state.newsBottomList.map((item, index) => {
                                return <li className='lt' key={index}>
                                    <a href={item.resource} target="_blank" rel="noopener noreferrer">
                                        <div className='img_box lt'>
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className='img_box_text lt'>
                                            <div>
                                                <h5>{item.title}</h5>
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
                            <h4>{t.system}</h4>
                        </div>
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
                                <p>{t[item.text]}</p>
                            </div>
                        })}
                    </div>
                </div>
                <div className='map'>
                    <div className="news_til_box">
                        <div className="news_til">
                            <h3>{t.map}</h3>
                            <div className='news_line'></div>
                        </div>
                        <div className="news_til_mask"></div>

                        <div className='news_til_more' >
                            <NavLink to="action/yb" exact={true}>
                                <div>
                                    {t.more}
                                </div>
                            </NavLink>

                        </div>

                    </div>
                    <div className='map_main_box'>
                        {this.state.mapList.map((item, index) => {
                            return <div className='map_s_box lt ' key={index} style={lang === 'en' ? { height: '200px' } : { height: '130px' }}>
                                <p>{t[item.til1]}</p>
                                <p>{t[item.til2]}</p>
                                {/* <h5><FormattedMessage id={item.til3} /></h5> */}
                            </div>
                        })}
                    </div>

                    <div className='line_box'>
                        <img src={dline} alt="" />
                        <img src={dline} alt="" />
                        <img src={dline} alt="" />
                        <img src={dline} alt="" />
                        <img src={dline} alt="" />
                    </div>
                    <div className='map_date'>
                        {this.state.mapList.map((item, index) => {
                            return <div className='map_date_box' key={index}>
                                {t[item.til3]}
                            </div>
                        })}
                    </div>

                </div>
                <div className='hezuo'>
                    <div className="hezuo_box">
                        <div className="hezuo_head">
                            <div className='head_b'>
                                <img src={logow} alt="" />
                            </div>
                            {/* <div className='head_w'></div> */}
                            <div className='head_til'>
                                <div className='head_til_box'>
                                    {t.hz}
                                </div>
                                <div className='head_til_b'></div>
                            </div>
                        </div>
                        <div className='hezuo_com'>
                            <div className="hezuo_top">
                                {this.state.black1.map((item, index) => {
                                    return <a href={item.url} rel="noopener noreferrer" target="_blank" key={index} className='hezuo_pic lt' style={{ background: `url(${item.b})`, }}
                                        onMouseEnter={(e) => { e.target.style.background = `url(${item.w})` }}
                                        onMouseLeave={(e) => { e.target.style.background = `url(${item.b})` }}
                                    >
                                    </a>
                                })}
                            </div>
                            <div className="hezuo_middle">
                                <img src={jia} alt="" />
                            </div>
                            <div className="hezuo_bottom">
                                {this.state.black2.map((item, index) => {
                                    return <a href={item.url} rel="noopener noreferrer" target="_blank" key={index} className='hz_picd lt' style={{ background: `url(${item.b})`, }}
                                        onMouseEnter={(e) => { e.target.style.background = `url(${item.w})` }}
                                        onMouseLeave={(e) => { e.target.style.background = `url(${item.b})` }}
                                    >
                                    </a>
                                })}
                            </div>
                        </div>
                        <div className='hezuo_sm'>
                            <h6>{t.hzsm}</h6>
                            <p> {t.hzsmex}</p>
                        </div>
                    </div>
                </div>


            </div >
        );
    }
}

