import React, { Component } from 'react';
import { getLang } from '../../../utils/chooselang'
import { get } from '../../../api/api'
import Page from '../../../common/pagecomponent/Pagecontainer'
import './yb.css'
export default class Yb extends Component {

    constructor() {
        super();
        this.state = {
            newmsg: {},
            newList: [],
        }
    }
    getNewList = (page) => {
        let lang = localStorage.getItem('lang_type');
        if (lang === 'en') {
            lang = 'en_US'
        } else if (lang === 'zh') {
            lang = 'zh_CN'
        }
        let url = 'reports/list';
        let params = { lang: lang, limit: 8, page: page, };
        get(url, params).then(response => {
            console.log(response.data.data);
            this.setState({ newList: response.data.data.data })
            this.setState({ newmsg: response.data.data })
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
            <div className='new yb'>
                <div className="news_til_box">
                    <div className="news_til">
                    <h3 className=''>{t.yb}</h3>
                        <div className='news_line'></div>
                    </div>
                    <div className="news_til_mask"></div>
                </div>
                <div className='new_list'>
                    <ul className='new_list_box'>
                        {this.state.newList.map((item, index) => {
                            return <li className='lt' key={index}>
                                <a href={item.resource} target="_blank"  rel="noopener noreferrer" >
                                    <div className='img_box' style={{height:'1.75rem'}}>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className='new_til'>{item.title}</div>
                                    <div className='new_bottom'>
                                        <div className='new_bottom_l lt'>{t.month}</div>
                                        <div className='new_bottom_R rt'>{item.published_at}</div>
                                    </div>
                                </a>
                            </li>
                        })}

                    </ul>
                    <div className='pageNumber' >
                        <Page msg={this.state.newmsg} getNews={this.getNewList}></Page>
                    </div>
                </div>
            </div>
        );
    }
}