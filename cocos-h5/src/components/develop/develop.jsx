import React, { Component } from 'react';
import Nav from '../nav/nav'
import { getLang } from '../../utils/chooselang'
import dev1 from '../../images/dev1.png'
import dev2 from '../../images/dev2.png'
import dev3 from '../../images/dev3.png'
import './develop.css'

export default class Develop extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        setTimeout(() => {
            let box = document.getElementsByClassName('dev_m');
            for (let i = 0; i < box.length; i++) {
                setTimeout(() => {
                    box[i].style.opacity = '1';
                    box[i].style.transform = 'translateX(0)';
                }, 0 + i * 200)
            }
        }, 100)
    }
    render() {
        let lang = localStorage.getItem('lang_type');
        let t = getLang();
        return (
            <div className='develop'>
                <div className="banner_box">
                    <Nav></Nav>
                </div>
                <div className='dev_box'>
                    <a href={lang === 'zh' ? "https://mp.weixin.qq.com/s/bbtYU76j26PTxri8ytrxsA" : 'https://medium.com/@CocosBCX/cocos-bcx-alpha-testing-now-open-to-developers-globally-908880f67de7'} target="_blank" rel="noopener noreferrer" className='dev_m'>
                        <div className='dev_img lt'>
                            <img src={dev1} alt="" />
                        </div>
                        <div className='dev_main lt'>
                            <div className='dev_main_til'>
                                <h4>{t.developPlan}</h4>
                            </div>
                            <p style={{ "WebkitBoxOrient": "vertical" }}>{t.devjh}</p>
                            <div className='dev_go'>
                                <div>GO</div>
                            </div>
                        </div>
                    </a>
                    <a href={lang === 'zh' ? "https://cn-dev.cocosbcx.io" : 'https://dev.cocosbcx.io'} target="_blank" rel="noopener noreferrer" className='dev_m'>
                        <div className='dev_img lt'>
                            <img src={dev2} alt="" />
                        </div>
                        <div className='dev_main lt'>
                            <div className='dev_main_til'>
                                <h4>{t.developApi}</h4>
                            </div>
                            <p>{t.devwd}</p>
                            <div className='dev_go'>
                                <div>GO</div>
                            </div>
                        </div>
                    </a>
                    <a href={lang === 'zh' ? "http://www.cocoachina.com/bbs/thread.php?fid-90.html" : ' https://discord.gg/jdJMNtC'} target="_blank" rel="noopener noreferrer" className='dev_m'>
                        <div className='dev_img lt'>
                            <img src={dev3} alt="" />
                        </div>
                        <div className='dev_main lt'>
                            <div className='dev_main_til'>
                                <h4>{t.developsq}</h4>
                            </div>
                            <p>{t.devsq}</p>
                            <div className='dev_go'>
                                <div>GO</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}