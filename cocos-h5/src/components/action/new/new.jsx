import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import newpic from '../../../images/newlist.png'
import './new.css'
export default class New extends Component {
    constructor() {
        super();
        this.state = {
            newList: [
                { img: newpic, til: 'Cocos-BCX的2018，知既往 见未来', date: '2019-02-20' },
                { img: newpic, til: 'Cocos-BCX的2018，知既往 见未来', date: '2019-02-20' },
                { img: newpic, til: 'Cocos-BCX的2018，知既往 见未来', date: '2019-02-20' },
                { img: newpic, til: 'Cocos-BCX的2018，知既往 见未来', date: '2019-02-20' },
                { img: newpic, til: 'Cocos-BCX的2018，知既往 见未来', date: '2019-02-20' },
                { img: newpic, til: 'Cocos-BCX的2018，知既往 见未来', date: '2019-02-20' },
                { img: newpic, til: 'Cocos-BCX的2018，知既往 见未来', date: '2019-02-20' },
                { img: newpic, til: 'Cocos-BCX的2018，知既往 见未来', date: '2019-02-20' },
            ],
        }
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
                        <div className='zx_btn active lt'><FormattedMessage id='zx' /></div>
                        <div className='sp_btn lt'><FormattedMessage id='video' /></div>
                    </div>
                </div>
                <div className='new_list'>
                    <ul className='new_list_box'>
                        {this.state.newList.map((item, index) => {
                            return <li className='lt' key={index}>
                                <div className='img_box'>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className='new_til'>{item.til}</div>
                                <div className='new_bottom'>
                                    <div className='new_bottom_l lt'>新闻</div>
                                    <div className='new_bottom_R rt'>{item.date}</div>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
                <div className='pageNumber'></div>
            </div>
        );
    }
}