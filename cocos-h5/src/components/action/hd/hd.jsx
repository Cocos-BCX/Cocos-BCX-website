import React, { Component } from 'react';
import { getLang } from '../../../utils/chooselang'
import { get } from '../../../api/api'
import Page from '../../../common/pagecomponent/Pagecontainer'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import './hd.css'
export default class Hd extends Component {

    constructor() {
        super();
        this.state = {
            newmsg: {},
            forList: [
            ],
            hdList: []
        }
    }
    //获取活动推荐
    forList = (page) => {
        let lang = localStorage.getItem('lang_type');
        if (lang === 'en') {
            lang = 'en_US'
        } else if (lang === 'zh') {
            lang = 'zh_CN'
        }
        let url = 'activities/recommend';
        let params = { lang: lang, };
        get(url, params).then(response => {
            // console.log(response);
            this.setState({ forList: response.data.data })
        })
    }
    //获取活动列表
    getHdList = (page) => {
        let lang = localStorage.getItem('lang_type');
        if (lang === 'en') {
            lang = 'en_US'
        } else if (lang === 'zh') {
            lang = 'zh_CN'
        }
        let url = 'activities/list';
        let params = { lang: lang, limit: 6, page: page, };
        get(url, params).then(response => {
            // console.log(response.data.data);
            this.setState({ hdList: response.data.data.data })
            this.setState({ newmsg: response.data.data })
        })
    }
    componentDidMount() {
        this.forList()
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 3000,//1秒切换一次
                disableOnInteraction: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }
    componentWillUnmount = () => {
        this.setState = (state, callback) => {
            return;
        };
    }
    render() {
        let t = getLang();
        return (
            <div className='new hd'>
                <div className="news_til_box">
                    <div className="news_til">
                    <h3>{t.hd}</h3>
                        <div className='news_line'></div>
                    </div>
                    <div className="news_til_mask"></div>
                </div>
                {
                    this.state.forList.length>0?
                     <div className='hd_for'>
                    <div className='hd_box'>
                        <div className="swiper-container" >
                            <div className="swiper-wrapper" >
                                {this.state.forList.map((item, index) => {
                                    return <div className='swiper-slide' key={index}>
                                        <div className='hd_every  ' key={index} style={{ marginLeft: '1.2rem', width: '3rem' }}>
                                            <div className='every_til'>{item.title}</div>
                                            <div className='every_b'>
                                                <div className='e_address lt'>
                                                    <p>{item.address}</p>
                                                </div>
                                                <div className='e_date rt'>{item.published_at}</div>
                                            </div>
                                        </div>
                                    </div>
                                })}

                            </div>
                            <div className="swiper-button-prev swiper-button-black" style={{left:'0',backgroundSize:'.25rem'}}></div>
                            <div className="swiper-button-next swiper-button-black" style={{right:'0',backgroundSize:'.25rem'}} ></div>
                        </div>

                    </div>
                    <div className='yg_box'>
                    <div className='yg_text lt'><span>{t.yg}</span></div>
                        <div className='line1 lt'>--------------------------</div>
                        <div className='ball lt'></div>
                        <div className='line2 lt'>--------------------------------------------------------------------------------------</div>
                        <div className='ball lt'></div>
                    </div>
                </div>
                    :null
                }
               
                <div className='hd_list_box'>
                    {this.state.hdList.map((item, index) => {
                        return <a href={item.resource} target="_blank" className=' hd_list_e' style={{ display: 'block' }} key={index} rel="noopener noreferrer" >
                            <div className='pic_box lt'>
                                <img src={item.image} alt="" />
                            </div>
                            <div className='e_text_box lt'>
                                <h5 style={{"WebkitBoxOrient": "vertical"}}>{item.title}</h5>
                                <p>{item.summary}</p>
                                <div className='e_address lt'><span>{item.address}</span></div>
                                <div className="e_date rt">{item.published_at}</div>
                            </div>
                        </a>
                    })}
                    <div className='pageNumber' style={{ marginRight: '11px' }}>
                        <Page msg={this.state.newmsg} getNews={this.getHdList}></Page>
                    </div>
                </div>
            </div>
        );
    }
}