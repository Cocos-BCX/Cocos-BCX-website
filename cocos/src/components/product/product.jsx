import React, { Component } from 'react';
import Nav from '../nav/nav'
import { getLang } from '../../utils/chooselang'
import luck from '../../images/luck.png'
import shotting from '../../images/shooting.png'
import dice from '../../images/dice.png'
import snake from '../../images/snake.png'
import tool1 from '../../images/tool1.png'
import tool2 from '../../images/tool2.png'
import tool3 from '../../images/tool3.png'
import tool5 from '../../images/ios.png'
import desk from '../../images/deskapp.png'
import wama from '../../images/wama.png'
import './product.css'

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameList: [
                { img: luck, url: 'http://tyche.yezi.one/', til: 'gname2', auther: 'gauther2', gex: 'gex2' },
                { img: shotting, url: 'http://shooter.cocosbcx.net/', til: 'gname3', auther: 'gauther3', gex: 'gex3' },
                { img: dice, url: 'http://dice.yezi.one/', til: 'gname4', auther: 'gauther4', gex: 'gex4' },
                { img: snake, url: 'http://snake-cocosbcx.cjfan.net/', til: 'gname5', auther: 'gauther5', gex: 'gex5' },
            ],
            toolList: [
                { img: tool1, url: 'https://explorer.cocosbcx.io/', til: 'tname1', auther: 'tauther1', gex: 'tex1' },
                { img: tool2, url: 'http://cocos-terminal.com/', til: 'tname2', auther: 'tauther2', gex: 'tex2' },
                { img: tool3, url: 'https://chrome.google.com/webstore/detail/cocospay/ffbhaeoepdfapfjhcihbbhlaigejfack', til: 'tname4', auther: 'tauther4', gex: 'tex4' },
            ],
            downLoad: '',
        }
    }
    componentDidMount() {
        this.choose()
        this.devbtn.onmouseenter = () => {
            this.devbtn.classList.add('bounceIn');
        }
        this.devplan.onmouseleave = () => {
            this.devbtn.classList.remove('bounceIn');
        }
    }
    choose() {
        let agent = navigator.userAgent;
        console.log(agent);

        let isMac = /macintosh|mac os x/i.test(agent);
        if (isMac) {
            this.setState({ downLoad: 'https://cocosbcx.oss-cn-beijing.aliyuncs.com/CocosDesktop.dmg' })
        }
        if (agent.indexOf("Win") >= 0 || agent.indexOf("wow") >= 0) {
            this.setState({ downLoad: 'https://cocosbcx.oss-cn-beijing.aliyuncs.com/CocosDesktop.exe' })
        }

    }
    render() {
        let lang = localStorage.getItem('lang_type');
        let t = getLang();
        return (
            <div className='product'>
                <div className="banner_s_box" style={{ background: "url('https://jdi.cocosbcx.net/image/cocosbcx/product_banner.jpg') no-repeat center" }}>
                    <Nav></Nav>
                </div>
                <div className='dev_plan' ref={(x) => { this.devplan = x }}>
                    <a href={lang === 'zh' ? "https://mp.weixin.qq.com/s/bbtYU76j26PTxri8ytrxsA" : 'https://medium.com/@CocosBCX/cocos-bcx-alpha-testing-now-open-to-developers-globally-908880f67de7'} className='ljdev animated' target='_blank' rel="noopener noreferrer">
                        <span ref={(x) => { this.devbtn = x }} className='animated' >
                            {t.ljdev}
                        </span>

                    </a>
                </div>
                <div className='dev_list_box'>
                    <div className='dev_game'>
                        <div className="news_til_box">
                            <div className="news_til">
                                <h3>{t.gamedapps}</h3>
                                <div className='news_line'></div>
                            </div>
                            <div className="news_til_mask"></div>
                        </div>
                        <div className='dev_game_box'>
                            {this.state.gameList.map((item, index) => {
                                return <a href={item.url} target='_blank' rel="noopener noreferrer" className='dev_game_left lt' key={index}>
                                    <div className='img_box lt'>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className='dev_game_mask'></div>
                                    <div className='dev_text_box lt'>
                                        <h4>{t[item.til]}</h4>
                                        <div className='wordroom'>{t[item.auther]}</div>
                                        <p>{t[item.gex]}</p>
                                    </div>
                                </a>
                            })}

                        </div>
                    </div>
                    <div className='dev_game'>
                        <div className="news_til_box">
                            <div className="news_til">
                                <h3>{t.tool}</h3>
                                <div className='news_line'></div>
                            </div>
                            <div className="news_til_mask"></div>
                        </div>
                        <div className='dev_game_box dev_game_box_s'>
                            {this.state.toolList.map((item, index) => {
                                return <a href={item.url} target='_blank' rel="noopener noreferrer" className='dev_game_left lt' key={index}>
                                    <div className='img_box lt'>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className='dev_game_mask'></div>
                                    <div className='dev_text_box lt'>
                                        <h4>{t[item.til]}</h4>
                                        <div className='wordroom'>{t[item.auther]}</div>
                                        <p>{t[item.gex]}</p>
                                    </div>
                                </a>
                            })}
                            <div className='dev_game_left lt' >
                                <div className='img_box lt'>
                                    <img src={tool5} alt="" />
                                </div>
                                <div className='wama'>
                                    <img src={wama} alt=""/>
                                </div>
                                <div className='dev_game_mask'></div>
                                <div className='dev_text_box lt'>
                                    <h4>{t.tname5}</h4>
                                    <div className='w-box'>
                                        <div className='wordroom'>{t.tauther5}</div>

                                    </div>
                                    <p>{t.tex5}</p>
                                </div>
                            </div>
                            <a href={this.state.downLoad} className='dev_game_left lt' >
                                <div className='img_box lt'>
                                    <img src={desk} alt="" />
                                </div>
                                <div className='dev_game_mask'></div>
                                <div className='dev_text_box lt'>
                                    <h4>{t.tname7}</h4>
                                    <div className='w-box'>
                                        <div className='wordroom'>{t.tauther5}</div>
                                    </div>
                                    <p>{t.tex7}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}