import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import hdpic from '../../../images/white(4).png'
import './hd.css'
export default class Hd extends Component {

    constructor() {
        super();
        this.state = {
            forList: [
                { til: 'Cocos-BCX 区块链游戏开放日', date: '2019-02-20', address: '北京站' },
                { til: 'Cocos-BCX 区块链游戏开放日,区块链游戏开放日', date: '2019-02-20', address: '北京站' },
                { til: 'Cocos-BCX 区块链游戏开放日', date: '2019-02-20', address: '北京站' },
            ],
            hdList: [
                { pic: hdpic, til: 'Cocos-BCX 区块链游戏开放日', date: '2019-02-20', address: '北京站', p: 'Cocos-BCX 区块链游戏开放日：EOS上首款贪吃蛇游戏的开发与盈利,蛇游戏的开发与盈,蛇游戏' },
                { pic: hdpic, til: 'Cocos-BCX 区块链游戏开放日', date: '2019-02-20', address: '北京站', p: 'Cocos-BCX 区块链游戏开放日：EOS上首款贪吃蛇游戏的开发与盈利' },
                { pic: hdpic, til: 'Cocos-BCX 区块链游戏开放日', date: '2019-02-20', address: '北京站', p: 'Cocos-BCX 区块链游戏开放日：EOS上首款贪吃蛇游戏的开发与盈利' },
                { pic: hdpic, til: 'Cocos-BCX 区块链游戏开放日', date: '2019-02-20', address: '北京站', p: 'Cocos-BCX 区块链游戏开放日：EOS上首款贪吃蛇游戏的开发与盈利' },
                { pic: hdpic, til: 'Cocos-BCX 区块链游戏开放日', date: '2019-02-20', address: '北京站', p: 'Cocos-BCX 区块链游戏开放日：EOS上首款贪吃蛇游戏的开发与盈利' },
                { pic: hdpic, til: 'Cocos-BCX 区块链游戏开放日', date: '2019-02-20', address: '北京站', p: 'Cocos-BCX 区块链游戏开放日：EOS上首款贪吃蛇游戏的开发与盈利' },
            ]
        }
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
                        {this.state.forList.map((item, index) => {
                            return <div className='hd_every lt'>
                                <div className='every_til'>{item.til}</div>
                                <div className='every_b'>
                                    <div className='e_address lt'>
                                        <p>{item.address}</p>
                                    </div>
                                    <div className='e_date rt'>{item.date}</div>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className='yg_box'>
                        <div className='yg_text lt'><FormattedMessage id='yg' /></div>
                        <div className='line1 lt'>--------------------</div>
                        <div className='ball lt'></div>
                        <div className='line2 lt'>----------------------------------</div>
                        <div className='ball lt'></div>
                        <div className='line3 lt'>---------------------------------------</div>
                        <div className='ball lt'></div>
                        <div className='line4 lt'>-----------------------</div>
                    </div>
                </div>
                <div className='hd_list_box'>
                    {this.state.hdList.map((item, index) => {
                        return <div className=' hd_list_e' key={index}>
                            <div className='pic_box lt'>
                                <img src={item.pic} alt="" />
                            </div>
                            <div className='e_text_box lt'>
                                <h5>{item.til}</h5>
                                <p>{item.p}</p>
                                <div className='e_address'>{item.address}</div>
                                <div className="e_date">{item.date}</div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}