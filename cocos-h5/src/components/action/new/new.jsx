import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { get } from '../../../api/api'
import Page from '../../../common/pagecomponent/Pagecontainer'
import './new.css'
export default class New extends Component {
    constructor() {
        super();
        this.state = {
            newmsg: {},
            newList: [],
            type: 'article',
        }
    }
    getNews = (page) => {
        let lang = localStorage.getItem('lang_type');
        if (lang === 'en') {
            lang = 'en_US'
        } else if (lang === 'zh') {
            lang = 'zh_CN'
        }
        let url = 'news/list';
        let params = { lang: lang, limit: 8, page: page, type: this.state.type };
        get(url, params).then(response => {
            // console.log(response.data.data);
            this.setState({ newList: response.data.data.data })
            this.setState({ newmsg: response.data.data })
        })
    }
    //显示视频
    showVideo = () => {
        this.setState({ type: 'video' });
        this.articleBtn.style.background = '#fff'
        this.videoBtn.style.background = '#585858'
        this.articleBtn.style.color = '#585858'
        this.videoBtn.style.color = '#fff'

    }
    //显示资讯
    showarticle = () => {
        this.setState({ type: 'article' });
        this.articleBtn.style.background = '#585858'
        this.videoBtn.style.background = '#fff'
        this.articleBtn.style.color = '#fff'
        this.videoBtn.style.color = '#585858'
    }
    componentDidMount() {
        // this.getNews()
    }
    componentWillUnmount = () => {
        this.setState = (state, callback) => {
            return;
        };
    }
    render() {
        return (
            <div className='new'>
                <div className="news_til_box">
                    <div className="news_til">
                        <h3><FormattedMessage id='news' /></h3>
                        <div className='news_line'></div>
                    </div>
                    <div className="news_til_mask"></div>
                    <div className='news_til_more'>
                        <div className='zx_btn active lt' style={{background:'#585858',color:'#fff' }} ref={(x) => { this.articleBtn = x }} onClick={this.showarticle}><FormattedMessage id='zx' /></div>
                        <div className='sp_btn lt' ref={(x) => { this.videoBtn = x }} onClick={this.showVideo}><FormattedMessage id='video' /></div>
                    </div>
                </div>
                <div className='new_list'>
                    <ul className='new_list_box'>
                        {this.state.newList.map((item, index) => {
                            return <li className='lt' key={index}>
                                <a href={item.resource} target="_blang">
                                    <div className='img_box'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className='new_til'>{item.title}</div>
                                    <div className='new_bottom'>
                                        <div className='new_bottom_l lt'><FormattedMessage id='news' /></div>
                                        <div className='new_bottom_R rt'>{item.published_at}</div>
                                    </div>
                                </a>

                            </li>
                        })}
                    </ul>
                </div>
                <div className='pageNumber'>
                    {
                        this.state.type === 'article' ?
                            <Page msg={this.state.newmsg}  getNews={this.getNews}></Page> :
                            <Page msg={this.state.newmsg} key={this.state.type} getNews={this.getNews}></Page>

                    }
                </div>
            </div>
        );
    }
}