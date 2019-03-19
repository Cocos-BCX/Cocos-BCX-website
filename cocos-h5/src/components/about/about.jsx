import React, { Component } from 'react';
import Nav from '../nav/nav'
import { FormattedMessage } from 'react-intl';
import logow from '../../images/logow.png'
import p1 from '../../images/p1.png'
import p2 from '../../images/p2.png'
import p3 from '../../images/p3.png'
import p4 from '../../images/p4.png'
import p5 from '../../images/p5.png'
import p6 from '../../images/p6.png'
import p7 from '../../images/p7.png'
import p8 from '../../images/p8.png'
import p9 from '../../images/p9.png'
import p10 from '../../images/p10.png'
import p11 from '../../images/p11.png'
import p12 from '../../images/p12.png'
import p13 from '../../images/p13.png'
import p14 from '../../images/p14.png'
import p15 from '../../images/p15.png'
import p16 from '../../images/p16.png'
import p17 from '../../images/p17.png'
import ly from '../../images/lingying.png'
import hezuo from '../../images/hezuopic.png'
import './about.css'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamList: [
                { pic: p1, ex: 'p1ex1', name: 'p1', position: 'fqr1', url: 'https://www.linkedin.com/in/%E6%98%8A%E8%8A%9D-%E9%99%88-51b805108/', icon: ly },
                { pic: p2, ex: 'p1ex2', name: 'p2', position: 'fqr2', url: 'https://www.linkedin.com/in/xiaolong/', icon: ly },
                { pic: p3, ex: 'p1ex3', name: 'p3', position: 'fqr3' },
                { pic: p4, ex: 'p1ex4', name: 'p4', position: 'fqr4' },
                { pic: p5, ex: 'p1ex5', name: 'p5', position: 'fqr5' },
                { pic: p6, ex: 'p1ex6', name: 'p6', position: 'fqr6' },
                { pic: p7, ex: 'p1ex7', name: 'p7', position: 'fqr7' },
                { pic: p8, ex: 'p1ex8', name: 'p8', position: 'fqr8' },
                { pic: p9, ex: 'p1ex9', name: 'p9', position: 'fqr9' },
                { pic: p10, ex: 'p1ex10', name: 'p10', position: 'fqr10' },
                { pic: p11, ex: 'p1ex11', name: 'p11', position: 'fqr11' },
                { pic: p12, ex: 'p1ex12', name: 'p12', position: 'fqr12' },
            ],
            adviser: [
                { pic: p13, ex: 'p1ex13', name: 'p13', position: 'fqr13' },
                { pic: p14, ex: 'p1ex14', name: 'p14', position: 'fqr14' },
                { pic: p15, ex: 'p1ex15', name: 'p15', position: 'fqr15' },
                { pic: p16, ex: 'p1ex16', name: 'p16', position: 'fqr16' },
                { pic: p17, ex: 'p1ex17', name: 'p17', position: 'fqr17' },
                { pic: p17, ex: 'p1ex18', name: 'p18', position: 'fqr18' },

            ]
        }
    }
    render() {
        return (
            <div className='about'>
                <div className="banner_a_box">
                    <Nav></Nav>
                    <div className='white_book'>
                        <a href='https://www.cocosbcx.io/wp-content/themes/cocosBlog/source/white_paper.pdf' target="_blank" className='w_book rt' rel="noopener noreferrer">
                        <FormattedMessage id='lookBook' />
                        </a>
                    </div>
                </div>
                <div className='team_ex'>
                    <div className="news_til_box">
                        <div className="news_til">
                            <h3><FormattedMessage id='teamextil' /></h3>
                            <div className='news_line'></div>
                        </div>
                        <div className="news_til_mask"></div>
                    </div>
                    <p><FormattedMessage id='teamex' /></p>
                </div>
                <div className='team_box'>
                    <div className="news_til_box">
                        <div className="news_til">
                            <h3><FormattedMessage id='teamPerson' /></h3>
                            <div className='news_line'></div>
                        </div>
                        <div className="news_til_mask"></div>
                    </div>
                    <div className='team_pic_box'>
                        {this.state.teamList.map((item, index) => {
                            return <div className='team_every lt' key={index}>
                                <div className='pic_box'>
                                    <img src={item.pic} alt="" />
                                </div>
                                <p className='name'><FormattedMessage id={item.name} /></p>
                                <p className='ex'><FormattedMessage id={item.position} /></p>
                            </div>
                        })}
                    </div>
                </div>
                <div className='adviser_box'>
                    <div className="news_til_box">
                        <div className="news_til">
                            <h3><FormattedMessage id='adviser' /></h3>
                            <div className='news_line'></div>
                        </div>
                        <div className="news_til_mask"></div>
                    </div>
                    <div className='team_pic_box'>
                        {this.state.adviser.map((item, index) => {
                            return <div className='team_every lt' key={index}>
                                <div className='pic_box'>
                                    <img src={item.pic} alt="" />
                                </div>
                                <p className='name'><FormattedMessage id={item.name} /></p>
                            </div>
                        })}
                    </div>
                </div>
                <div className='hezuo'>
                    <div className="hezuo_box">
                        <div className="hezuo_head">
                            <div className='head_b'>
                                <img src={logow} alt="" />
                            </div>
                            <div className='head_w'></div>
                            <div className='head_til'>
                                <div className='head_til_box'>
                                    <FormattedMessage id='hezuojg' />
                                </div>
                                <div className='head_til_b'></div>
                            </div>
                        </div>
                        <div className='hezuo_imgs'>
                            <img src={hezuo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}