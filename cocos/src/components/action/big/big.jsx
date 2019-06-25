import React, { Component } from 'react';
import { getLang } from '../../../utils/chooselang'
import xia from '../../../images/xia.png'
import shang from '../../../images/shang.png'
import './big.css'
export default class Big extends Component {
    constructor() {
        super();
        this.state = {
            lang: localStorage.getItem('lang_type'),
            year: '2019',
            s1action: false,
            s2action: false,
            s3action: false,
            s4action: false,
            ss3: [
                { date: '2017-07', til: 'ss31' },
                { date: '2017-09', til: 'ss32' },

            ],
            ss4: [
                { date: '2017-12', til: 'ss41' },
            ],
            es1: [
                { date: '2018-03-24', til: 'es11' },
            ],
            es2: [
                { date: '2018-06-18', til: 'es211' },
                { date: '2018-06-09', til: 'es210' },
                { date: '2018-06-07', til: 'es29' },
                { date: '2018-06-02', til: 'es28' },
                { date: '2018-05-31', til: 'es27' },
                { date: '2018-05-31', til: 'es26' },
                { date: '2018-05-30', til: 'es25' },
                { date: '2018-05-26', til: 'es24' },
                { date: '2018-05-25', til: 'es23' },
                { date: '2018-05-19', til: 'es22' },
                { date: '2018-04-09', til: 'es21' },

            ],
            es3: [
                { date: '2018-09-12', til: 'es39' },
                { date: '2018-08-24', til: 'es38' },
                { date: '2018-08-21', til: 'es37' },
                { date: '2018-08-03', til: 'es36' },
                { date: '2018-07-23', til: 'es35' },
                { date: '2018-07-16', til: 'es34' },
                { date: '2018-07-11', til: 'es33' },
                { date: '2018-07-06', til: 'es32' },
                { date: '2018-07-05', til: 'es31' },
            ],
            es4: [
                { date: '2018-12-21', til: 'es48' },
                { date: '2018-12-20', til: 'es47' },
                { date: '2018-12-05', til: 'es46' },
                { date: '2018-12-05', til: 'es45' },
                { date: '2018-11-14', til: 'es44' },
                { date: '2018-11-05', til: 'es43' },
                { date: '2018-10', til: 'es42' },
                { date: '2018-10~11', til: 'es41' },

            ],
            ns1: [
                { date: '2019-03-29', til: 'ns16' },
                { date: '2019-03-19', til: 'ns15' },
                { date: '2019-01-28', til: 'ns14' },
                { date: '2019-01-30~31', til: 'ns13' },
                { date: '2019-01-21~22', til: 'ns12' },
                { date: '2019-01-12', til: 'ns11' },
            ],
            ns2: [
                { date: '2019-06-06', til: 'ns26' },
                { date: '2019-05-19', til: 'ns25' },
                { date: '019-05-18', til: 'ns24' },
                { date: '2019-05-13~15', til: 'ns23' },
                { date: '2019-04-25', til: 'ns22' },
                { date: '2019-04-24~25', til: 'ns21' },
            ]

        }
    }
    showYbtn = () => {
        this.sbtn.style.display = 'block';
        this.ebtn.style.display = 'block';
        this.nbtn.style.display = 'block';
    }
    //点击2017
    cliclSeven = () => {
        this.eight.style.display = 'none'
        this.seven.style.display = 'block'
        this.nine.style.display = 'none'
        this.sbtn.style.display = 'none';
        this.ebtn.style.display = 'none';
        this.nbtn.style.display = 'none';
        this.setState({ year: '2017' })
    }
    //点击2018
    cliclEight = () => {
        this.eight.style.display = 'block'
        this.seven.style.display = 'none'
        this.nine.style.display = 'none'
        this.sbtn.style.display = 'none';
        this.ebtn.style.display = 'none';
        this.nbtn.style.display = 'none';
        this.setState({ year: '2018' })
    }
    cliclNine = () => {
        this.eight.style.display = 'none'
        this.seven.style.display = 'none'
        this.nine.style.display = 'block'
        this.sbtn.style.display = 'none';
        this.ebtn.style.display = 'none';
        this.nbtn.style.display = 'none';
        // this.setState({es1:this.state.ns1})
        // this.setState({es2:this.state.ns2})
        // this.setState({es3:[]})
        // this.setState({es4:[]})
        this.setState({ year: '2019' })
    }
    //收起/打开s1
    s1action = () => {
        let list1 = document.getElementsByClassName('s1_list')[0]
        if (this.state.s1action) {
            this.setState({ s1action: false });
            list1.style.marginBottom = '100px'
            this.s1.style.height = ''
        } else {
            this.setState({ s1action: true });
            this.s1.style.height = '1463px';
            // this.s1.style.height = 'auto';
            list1.style.marginBottom = '0'
        }
    }
    //收起/打开s2
    s2action = () => {
        let list2 = document.getElementsByClassName('s2_list')[0]
        if (this.state.s2action) {
            this.setState({ s2action: false });
            list2.style.marginBottom = '100px'
            this.s2.style.height = ''
        } else {
            this.setState({ s2action: true });
            if (this.state.lang === 'zh') {
                // this.s2.style.height = '1533px';
                this.s2.style.height = 'auto';
            } else {
                // this.s2.style.height = '1920px';
                this.s2.style.height = 'auto';
            }
            list2.style.marginBottom = '0'
        }
    }
    //收起/打开s3
    s3action = () => {
        let list3 = document.getElementsByClassName('s3_list')[0]
        if (this.state.s3action) {
            this.setState({ s3action: false });
            list3.style.marginBottom = '100px'
            this.s3.style.height = ''
        } else {
            this.setState({ s3action: true });
            // this.s3.style.height = '1265px';
            this.s3.style.height = 'auto';
            list3.style.marginBottom = '0'
        }
    }
    //收起/打开s4
    s4action = () => {
        let list4 = document.getElementsByClassName('s4_list')[0]
        if (this.state.s4action) {
            this.setState({ s4action: false });
            list4.style.marginBottom = '100px'
            this.s4.style.height = '182px'
        } else {
            this.setState({ s4action: true });
            // this.s4.style.height = '1223px';
            this.s4.style.height = 'auto';
            list4.style.marginBottom = '0'
        }
    }
    render() {
        let t = getLang();
        return (
            <div className='big'>
                <div className="news_til_box">
                    <div className="news_til">
                        <h3>{t.bigsj}</h3>
                        <div className='news_line'></div>

                    </div>
                    <div className="news_til_mask"></div>
                    <div className='choose_year'>
                        <div className='sy' onClick={this.showYbtn}><span>{this.state.year}</span></div>
                        <div className='ey' onClick={this.cliclSeven} ref={(x) => { this.sbtn = x }}><span>2017</span></div>
                        <div className='ey' onClick={this.cliclEight} ref={(x) => { this.ebtn = x }}>2018</div>
                        <div className='ny' onClick={this.cliclNine} ref={(x) => { this.nbtn = x }}>2019</div>
                    </div>
                </div>

                <div style={{ display: 'none' }} ref={(x) => { this.eight = x }}>
                    <div className='big_list_box'>
                        <div className='s1_box'>
                            <div className='s1_til lt'>
                                {t.s4}
                            </div>
                            <div className='s1_content rt' ref={(x) => { this.s4 = x }}>
                                <div className='s1_more' onClick={this.s4action}>
                                    <img src={this.state.s4action ? shang : xia} alt="" />
                                </div>
                                {this.state.es4.map((item, index) => {
                                    return <div className='s1_list s4_list' key={index}>
                                        <div className='s1_time lt'>{item.date}</div>
                                        <div className='s1_text lt'>{t[item.til]}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='big_list_box' >
                        <div className='s1_box'>
                            <div className='s1_til lt'>
                                {t.s3}
                            </div>
                            <div className='s1_content rt' ref={(x) => { this.s3 = x }}>
                                <div className='s1_more' onClick={this.s3action}>
                                    <img src={this.state.s3action ? shang : xia} alt="" />
                                </div>
                                {this.state.es3.map((item, index) => {
                                    return <div className='s1_list s3_list' key={index}>
                                        <div className='s1_time lt'>{item.date}</div>
                                        <div className='s1_text lt'>{t[item.til]}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='big_list_box'>
                        <div className='s1_box'>
                            <div className='s1_til lt'>
                                {t.s2}
                            </div>
                            <div className='s1_content rt' ref={(x) => { this.s2 = x }}>
                                <div className='s1_more' onClick={this.s2action}>
                                    <img src={this.state.s2action ? shang : xia} alt="" />
                                </div>
                                {this.state.es2.map((item, index) => {
                                    return <div className='s1_list s2_list' key={index}>
                                        <div className='s1_time lt'>{item.date}</div>
                                        <div className='s1_text lt'>{t[item.til]}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='big_list_box'>
                        <div className='s1_box'>
                            <div className='s1_til lt'>
                                {t.s1}
                            </div>
                            <div className='s1_content rt' ref={(x) => { this.s1 = x }}>
                                {
                                    this.state.es1.length > 1 ? <div className='s1_more' onClick={this.s1action}>
                                        <img src={this.state.s1action ? shang : xia} alt="" />
                                    </div> : null
                                }
                                {this.state.es1.map((item, index) => {
                                    return <div className='s1_list' key={index}>
                                        <div className='s1_time lt'>{item.date}</div>
                                        <div className='s1_text lt'>{t[item.til]}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>



                </div>
                <div style={{ height: 'auto', display: 'none' }} ref={(x) => { this.seven = x }}>
                    <div className='big_list_box'>
                        <div className='s1_box'>
                            <div className='s1_til lt'>
                                {t.s4}
                            </div>
                            <div className='s1_content rt' style={{ height: 'auto' }}>
                                {this.state.ss4.map((item, index) => {
                                    return <div className='s1_list s3_list' style={{ marginBottom: 'auto' }} key={index}>
                                        <div className='s1_time lt'>{item.date}</div>
                                        <div className='s1_text lt'>{t[item.til]}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='big_list_box'>
                        <div className='s1_box'>
                            <div className='s1_til lt'>
                                {t.s3}
                            </div>
                            <div className='s1_content rt' style={{ height: 'auto' }} >
                                {this.state.ss3.map((item, index) => {
                                    return <div className='s1_list s3_list' style={{ marginBottom: 'auto' }} key={index}>
                                        <div className='s1_time lt'>{item.date}</div>
                                        <div className='s1_text lt'>{t[item.til]}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ height: 'auto', display: 'block' }} ref={(x) => { this.nine = x }}>
                    <div className='big_list_box'>
                        <div className='s1_box'>
                            <div className='s1_til lt'>
                                {t.s2}
                            </div>
                            <div className='s1_content rt' style={{ height: 'auto' }} >
                                {this.state.ns2.map((item, index) => {
                                    return <div className='s1_list s3_list' style={{ marginBottom: 'auto' }} key={index}>
                                        <div className='s1_time lt' >{item.date}</div>
                                        <div className='s1_text lt' >{t[item.til]}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='big_list_box'>
                        <div className='s1_box'>
                            <div className='s1_til lt'>
                                {t.s1}
                            </div>
                            <div className='s1_content rt' style={{ height: 'auto' }} >
                                {this.state.ns1.map((item, index) => {
                                    return <div className='s1_list s3_list' style={{ marginBottom: 'auto' }} key={index}>
                                        <div className='s1_time lt' >{item.date}</div>
                                        <div className='s1_text lt' >{t[item.til]}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}