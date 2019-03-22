import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
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
            forList: [{ title: '超级赛亚人超级赛亚人超级赛亚人', address: '北京', published_at: '2018-05-21' },
            { title: '超级赛亚人', address: '北京', published_at: '2018-05-21' },
            { title: '超级赛亚人', address: '北京', published_at: '2018-05-21' },
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
        // this.forList()
        var mySwiper = new Swiper('.swiper-container', {
            loop : true,
            autoplay: {
                delay: 3000,//1秒切换一次
                disableOnInteraction: false,
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
        return (
            <div className='new hd'>
                <div className="news_til_box">
                    <div className="news_til">
                        <h3><FormattedMessage id='hd' /></h3>
                        <div className='news_line'></div>
                    </div>
                    <div className="news_til_mask"></div>
                </div>
                <div className='hd_for'>
                    <div className='hd_box'>
                        <div class="swiper-container" style={{ width: '6rem' }}>
                            <div class="swiper-wrapper" >
                                {this.state.forList.map((item, index) => {
                                    return <div className='swiper-slide'>
                                        <div className='hd_every  ' key={index} style={{ marginLeft: '1.2rem',width:'3rem' }}>
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
                            <div class="swiper-button-prev swiper-button-black" ></div>
                            <div class="swiper-button-next swiper-button-black"></div>
                        </div>

                    </div>
                    <div className='yg_box'>
                        <div className='yg_text lt'><FormattedMessage id='yg' /></div>
                        <div className='line1 lt'>--------------------------</div>
                        <div className='ball lt'></div>
                        <div className='line2 lt'>----------------------------------</div>
                        <div className='ball lt'></div>
                    </div>
                </div>
                <div className='hd_list_box'>
                    {this.state.hdList.map((item, index) => {
                        return <a href={item.resource} target="_blank" className=' hd_list_e' style={{ display: 'block' }} key={index} rel="noopener noreferrer" >
                            <div className='pic_box lt'>
                                <img src={item.image} alt="" />
                            </div>
                            <div className='e_text_box lt'>
                                <h5>{item.title}</h5>
                                <p>{item.summary}</p>
                                <div className='e_address lt'>{item.address}</div>
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