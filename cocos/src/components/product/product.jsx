import React, { Component } from 'react';
import Nav from '../nav/nav'
import { FormattedMessage } from 'react-intl';
import cat from '../../images/cat.png'
import './product.css'

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='product'>
                <div className="banner_s_box">
                    <Nav></Nav>
                </div>
                <div className='dev_plan'>
                    <a href="https://mp.weixin.qq.com/s/EuM8mGfXh3QpwKLN7i9ITA
" className='ljdev' target='_blank' rel="noopener noreferrer">
                        <FormattedMessage id='ljdev' />
                    </a>
                </div>
                <div className='dev_list_box'>
                    <div className='dev_game'>
                        <div className="news_til_box">
                            <div className="news_til">
                                <h3><FormattedMessage id='gamedapps' /></h3>
                                <div className='news_line'></div>
                            </div>
                            <div className="news_til_mask"></div>
                        </div>
                        <div className='dev_game_box'>
                            <div className='dev_game_left lt'>
                                <div className='img_box lt'>
                                    <img src={cat} alt="" />
                                </div>
                                <div className='dev_text_box lt'>
                                    <h4>泡泡龙</h4>
                                    <div className='wordroom'>光速工作室</div>
                                    <p>Cocos-BCX 于2018年12月21日14:00正式上线内测，这标志 Cocos-BCX 公链的基础设施已经初具成果，更标志着 Cocos-BCX 向正式网络......</p>
                                </div>
                            </div>
                            <div className='dev_game_left lt' style={{ marginLeft: '71px' }}>
                                <div className='img_box lt'>
                                    <img src={cat} alt="" />
                                </div>
                                <div className='dev_text_box lt'>
                                    <h4>泡泡龙</h4>
                                    <div className='wordroom'>光速工作室</div>
                                    <p>Cocos-BCX 于2018年12月21日14:00正式上线内测，这标志 Cocos-BCX 公链的基础设施已经初具成果，更标志着 Cocos-BCX 向正式网络......</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='dev_game'>
                        <div className="news_til_box">
                            <div className="news_til">
                                <h3><FormattedMessage id='gamedapps' /></h3>
                                <div className='news_line'></div>
                            </div>
                            <div className="news_til_mask"></div>
                        </div>
                        <div className='dev_game_box'>
                            <div className='dev_game_left lt'>
                                <div className='img_box lt'>
                                    <img src={cat} alt="" />
                                </div>
                                <div className='dev_text_box lt'>
                                    <h4>泡泡龙</h4>
                                    <div className='wordroom'>光速工作室</div>
                                    <p>Cocos-BCX 于2018年12月21日14:00正式上线内测，这标志 Cocos-BCX 公链的基础设施已经初具成果，更标志着 Cocos-BCX 向正式网络......</p>
                                </div>
                            </div>
                            <div className='dev_game_left lt' style={{ marginLeft: '71px' }}>
                                <div className='img_box lt'>
                                    <img src={cat} alt="" />
                                </div>
                                <div className='dev_text_box lt'>
                                    <h4>泡泡龙</h4>
                                    <div className='wordroom'>光速工作室</div>
                                    <p>Cocos-BCX 于2018年12月21日14:00正式上线内测，这标志 Cocos-BCX 公链的基础设施已经初具成果，更标志着 Cocos-BCX 向正式网络......</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='dev_game'>
                        <div className="news_til_box">
                            <div className="news_til">
                                <h3><FormattedMessage id='gamedapps' /></h3>
                                <div className='news_line'></div>
                            </div>
                            <div className="news_til_mask"></div>
                        </div>
                        <div className='dev_game_box'>
                            <div className='dev_game_left lt'>
                                <div className='img_box lt'>
                                    <img src={cat} alt="" />
                                </div>
                                <div className='dev_text_box lt'>
                                    <h4>泡泡龙</h4>
                                    <div className='wordroom'>光速工作室</div>
                                    <p>Cocos-BCX 于2018年12月21日14:00正式上线内测，这标志 Cocos-BCX 公链的基础设施已经初具成果，更标志着 Cocos-BCX 向正式网络......</p>
                                </div>
                            </div>
                            <div className='dev_game_left lt' style={{ marginLeft: '71px' }}>
                                <div className='img_box lt'>
                                    <img src={cat} alt="" />
                                </div>
                                <div className='dev_text_box lt'>
                                    <h4>泡泡龙</h4>
                                    <div className='wordroom'>光速工作室</div>
                                    <p>Cocos-BCX 于2018年12月21日14:00正式上线内测，这标志 Cocos-BCX 公链的基础设施已经初具成果，更标志着 Cocos-BCX 向正式网络......</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}