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
import i1 from '../../images/logoi1.png'
import i2 from '../../images/logoi2.png'
import i3 from '../../images/logoi3.png'
import i4 from '../../images/logoi4.png'
import i5 from '../../images/logoi5.png'
import i6 from '../../images/logoi6.png'
import i7 from '../../images/logoi7.png'
import i8 from '../../images/logoi8.png'
import i9 from '../../images/logoi9.png'
import i10 from '../../images/logoi10.png'
import i11 from '../../images/logoi11.png'
import i12 from '../../images/logoi12.png'
import i13 from '../../images/logoi13.png'
import i14 from '../../images/logoi14.png'
import i15 from '../../images/logoi15.png'
import i16 from '../../images/logoi16.png'
import i17 from '../../images/logoi17.png'
import i18 from '../../images/logoi18.png'
import i19 from '../../images/logoi19.png'
import i20 from '../../images/logoi20.png'
import i21 from '../../images/logoi21.png'
import i22 from '../../images/logoi22.png'
import i23 from '../../images/logoi23.png'
import i24 from '../../images/logoi24.png'
import i25 from '../../images/logoi25.png'
import i26 from '../../images/logoi26.png'
import i27 from '../../images/logoi27.png'
import i28 from '../../images/logoi28.png'
import i29 from '../../images/logoi29.png'
import i30 from '../../images/logoi30.png'
import i31 from '../../images/logoi31.png'
import i32 from '../../images/logoi32.png'
import i33 from '../../images/logoi33.png'
import ly from '../../images/lingying.png'
import hezuo from '../../images/hezuopic.png'
import './about.css'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamList: [
                { pic: p1, ly: ly, ex: 'p1ex1', name: 'p1', position: 'fqr1', url: 'https://www.linkedin.com/in/%E6%98%8A%E8%8A%9D-%E9%99%88-51b805108/', icon: ly },
                { pic: p2, ly: ly, ex: 'plex2', name: 'p2', position: 'fqr2', url: 'https://www.linkedin.com/in/richardyangr/', icon: ly },
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
                { pic: p13, ly: ly, url: 'https://www.linkedin.com/in/zhe-wang-ba18831b/', ex: 'plex13', name: 'p13', position: 'fqr13' },
                { pic: p14, ex: 'plex14', name: 'p14', position: 'fqr14' },
                { pic: p16, ly: ly, url: 'https://www.linkedin.com/in/edithyeung/', ex: 'plex16', name: 'p16', position: 'fqr16' },
                { pic: p17, ly: ly, url: 'https://www.linkedin.com/in/mccannatron/', ex: 'plex17', name: 'p17', position: 'fqr17' },
                { pic: p18, ex: 'plex18', name: 'p18', position: 'fqr18' },

            ],
            img: [
                { pic: i1 },
                { pic: i2 },
                { pic: i3 },
                { pic: i4 },
                { pic: i5 },
                { pic: i6 },
                { pic: i7 },
                { pic: i8 },
                { pic: i9 },
                { pic: i10 },
                { pic: i11 },
                { pic: i12 },
                { pic: i13 },
                { pic: i14 },
                { pic: i15 },
                { pic: i16 },
                { pic: i17 },
                { pic: i18 },
                { pic: i19 },
                { pic: i20 },
                { pic: i21 },
                { pic: i22 },
                { pic: i23 },
                { pic: i24 },
                { pic: i25 },
                { pic: i26 },
                { pic: i27 },
                { pic: i28 },
                { pic: i5 },
                { pic: i5 },
                { pic: i29 },
                { pic: i30 },
                { pic: i31 },
                { pic: i32 },
                { pic: i33 },
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
                <div className="banner_a_box" style={{ background: "url('https://jdi.cocosbcx.net/image/cocosbcx/about_banner.jpg') no-repeat center" }}>
                    <Nav></Nav>
                    <div className='white_book'>
                        <div className='white_logo_box rt'>
                            <div className='white_logo '>
                                <img src={logow} alt="" />
                                <p><FormattedMessage id='whiteBook' /></p>
                            </div>
                            <a href={lang === 'zh' ? 'https://www.cocosbcx.io/static/whiteBookzh.pdf': 'https://www.cocosbcx.io/static/whiteBooken.pdf'} target="_blank" className='w_book ' rel="noopener noreferrer">
                                <FormattedMessage id='lookBook' />
                            </a>
                        </div>

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

                                    <p className={lang === 'zh' ? 'ext' : 'ext_en'}><FormattedMessage id={item.ex} /></p>
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
                            {
                                this.state.img.map((item, index) => {
                                    return <div key={index} className='lt'>
                                        <img src={item.pic} alt="" />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}