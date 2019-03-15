import React, { Component } from 'react';
import Nav from '../nav/nav'
import { FormattedMessage } from 'react-intl';
import cat from '../../images/cat.png'
import './product.css'

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameList:[
                {img:cat,url:'http://game.cocos-bcx.io/fruit/',til:'gname1',auther:'gauther1',gex:'gex1'},
                {img:cat,url:'http://tyche-bcx.oriongaming.club/',til:'gname2',auther:'gauther2',gex:'gex2'},
                {img:cat,url:'http://ccshooter.oriongaming.club/',til:'gname3',auther:'gauther3',gex:'gex3'},
            ],
            toolList:[
                {img:cat,url:'https://explorer.cocosbcx.io/',til:'tname1',auther:'tauther1',gex:'tex1'},
                {img:cat,url:'http://www.easywallet.pro/',til:'tname2',auther:'tauther2',gex:'tex2'},
                {img:cat,url:'http://gpe.famegame.com.cn/',til:'tname3',auther:'tauther3',gex:'tex3'},
            ],
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
                        {this.state.gameList.map((item,index)=>{
                            return  <a href={item.url} target='_blank' rel="noopener noreferrer" className='dev_game_left lt' key={index}>
                            <div className='img_box lt'>
                                <img src={cat} alt="" />
                            </div>
                            <div className='dev_text_box lt'>
                                <h4><FormattedMessage id={item.til} /></h4>
                                <div className='wordroom'><FormattedMessage id={item.auther} /></div>
                                <p><FormattedMessage id={item.gex} /></p>
                            </div>
                        </a>
                        })}
                        
                        </div>
                    </div>
                    <div className='dev_game'>
                        <div className="news_til_box">
                            <div className="news_til">
                                <h3><FormattedMessage id='tool' /></h3>
                                <div className='news_line'></div>
                            </div>
                            <div className="news_til_mask"></div>
                        </div>
                        <div className='dev_game_box'>
                        {this.state.toolList.map((item,index)=>{
                            return  <a href={item.url} target='_blank' rel="noopener noreferrer" className='dev_game_left lt' key={index}>
                            <div className='img_box lt'>
                                <img src={cat} alt="" />
                            </div>
                            <div className='dev_text_box lt'>
                                <h4><FormattedMessage id={item.til} /></h4>
                                <div className='wordroom'><FormattedMessage id={item.auther} /></div>
                                <p><FormattedMessage id={item.gex} /></p>
                            </div>
                        </a>
                        })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}