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
import p18 from '../../images/p18.png'
import ly from '../../images/lingying.png'
import hezuo from '../../images/hezuopic.png'
import booken from '../../file/whiteBooken.pdf'
import bookzh from '../../file/whiteBookzh.pdf'
import './about.css'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamList: [
                { pic: p1, ly: ly, ex: 'p1ex1', name: 'p1', position: 'fqr1', url: 'https://www.linkedin.com/in/%E6%98%8A%E8%8A%9D-%E9%99%88-51b805108/', icon: ly },
                { pic: p2, ly: ly, ex: 'plex2', name: 'p2', position: 'fqr2', url: 'https://www.linkedin.com/in/xiaolong/', icon: ly },
                { pic: p3, ex: 'plex3', name: 'p3', position: 'fqr3' },
                { pic: p4, ex: 'plex4', name: 'p4', position: 'fqr4' },
                { pic: p5, ex: 'plex5', name: 'p5', position: 'fqr5' },
                { pic: p6, ex: 'plex6', name: 'p6', position: 'fqr6' },
                { pic: p7, ex: 'plex7', name: 'p7', position: 'fqr7' },
                { pic: p8, ex: 'plex8', name: 'p8', position: 'fqr8' },
                { pic: p9, ex: 'plex9', name: 'p9', position: 'fqr9' },
                { pic: p10, ex: 'plex10', name: 'p10', position: 'fqr10' },
                { pic: p11, ex: 'plex11', name: 'p11', position: 'fqr11' },
                { pic: p12, ex: 'plex12', name: 'p12', position: 'fqr12' },
            ],
            adviser: [
                { pic: p13, ex: 'plex13', name: 'p13', position: 'fqr13' },
                { pic: p14, ex: 'plex14', name: 'p14', position: 'fqr14' },
                { pic: p15, ex: 'plex15', name: 'p15', position: 'fqr15' },
                { pic: p16, ex: 'plex16', name: 'p16', position: 'fqr16' },
                { pic: p17, ex: 'plex17', name: 'p17', position: 'fqr17' },
                { pic: p18, ex: 'plex18', name: 'p18', position: 'fqr18' },

            ]
        }
    }
    showPeopleTwo = (e) => {

        for (let index = 0; index < document.getElementsByClassName('people_ex_two').length; index++) {
            document.getElementsByClassName('people_ex_two')[index].style.display = 'none'

        }
        (document.getElementsByClassName('people_ex_two')[e]).style.display = 'block'
    }
    hidePeopleTwo = (e) => {
        (document.getElementsByClassName('people_ex_two')[e]).style.display = 'none'
    }


    showPeople = (e) => {

        for (let index = 0; index < document.getElementsByClassName('people_ex_box').length; index++) {
            document.getElementsByClassName('people_ex_box')[index].style.display = 'none'

        }
        (document.getElementsByClassName('people_ex_box')[e]).style.display = 'block'
    }
    hidePeople = (e) => {
        (document.getElementsByClassName('people_ex_box')[e]).style.display = 'none'
    }
    componentDidMount() {
    }
    render() {
        let lang = localStorage.getItem('lang_type');
        return (
            <div className='about'>
                <div className="banner_a_box">
                    <Nav></Nav>
                    <div className='white_book'>
                        <a href={lang === 'zh' ? bookzh : booken} target="_blank" className='w_book rt' rel="noopener noreferrer">
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
                            return <div className='team_every lt' key={index} >
                                <div className='pic_box'
                                    onMouseEnter={() => { this.showPeople(index) }}>
                                    <img src={item.pic} alt="" />
                                </div>
                                <p className='name'><FormattedMessage id={item.name} /></p>
                                <p className='ex'><FormattedMessage id={item.position} /></p>
                                <div className='people_ex_box' onMouseLeave={() => { this.hidePeople(index) }}>
                                    {
                                        item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">
                                            <img src={item.ly} className='ly' alt="" />
                                        </a> : null
                                    }

                                    <p><FormattedMessage id={item.ex} /></p>
                                </div>
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
                                <div className='pic_box' onMouseEnter={() => { this.showPeopleTwo(index) }}>
                                    <img src={item.pic} alt="" />
                                </div>
                                <p className='name'><FormattedMessage id={item.name} /></p>
                                <div className='people_ex_two' onMouseLeave={() => { this.hidePeopleTwo(index) }}>
                                    <p><FormattedMessage id={item.ex} /></p>
                                </div>
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