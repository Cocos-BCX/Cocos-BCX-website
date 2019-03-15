import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import newpic from '../../../images/newlist.png'
import './yb.css'
export default class Yb extends Component {

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
        let lang = localStorage.getItem('lang_type');
        return (
            <div className='new yb'>
                <div className="news_til_box">
                    <div className="news_til">
                        <h3 className={lang==='en'?'yb_en':''}><FormattedMessage id='yb' /></h3>
                        <div className='news_line'></div>
                    </div>
                    <div className="news_til_mask"></div>
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
                                    <div className='new_bottom_l lt'><FormattedMessage id='month' /></div>
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