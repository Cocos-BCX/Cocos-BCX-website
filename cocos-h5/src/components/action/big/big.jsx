import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import xia from '../../../images/xia.png'
import shang from '../../../images/shang.png'
import './big.css'
export default class Big extends Component {
    constructor() {
        super();
        this.state = {
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
                { date: '2018-04-09', til: 'es21' },
                { date: '2018-05-19', til: 'es22' },
                { date: '2018-05-25', til: 'es23' },
                { date: '2018-05-26', til: 'es24' },
                { date: '2018-05-30', til: 'es25' },
                { date: '2018-05-31', til: 'es26' },
                { date: '2018-05-31', til: 'es27' },
                { date: '2018-06-02', til: 'es28' },
                { date: '2018-06-07', til: 'es29' },
                { date: '2018-06-09', til: 'es210' },
                { date: '2018-06-18', til: 'es211' },
            ],
            es3: [
                { date: '2018-07-05', til: 'es31' },
                { date: '2018-07-06', til: 'es32' },
                { date: '2018-07-11', til: 'es33' },
                { date: '2018-07-16', til: 'es34' },
                { date: '2018-07-23', til: 'es35' },
                { date: '2018-08-03', til: 'es36' },
                { date: '2018-08-21', til: 'es37' },
                { date: '2018-08-24', til: 'es38' },
                { date: '2018-09-12', til: 'es39' },
            ],
            es4: [
                { date: '2018-10~11', til: 'es41' },
                { date: '2018-10', til: 'es42' },
                { date: '2018-11-05', til: 'es43' },
                { date: '2018-11-14', til: 'es44' },
                { date: '2018-12-05', til: 'es45' },
                { date: '2018-12-05', til: 'es46' },
                { date: '2018-12-20', til: 'es47' },
                { date: '2018-12-21', til: 'es48' },

            ],
            ns1: [
                { date: '2019-01-12', til: 'ns11' },
                { date: '2019-01-21~22', til: 'ns12' },
                { date: '2019-01-30~31', til: 'ns13' },
                { date: '2019-01-28', til: 'ns14' },
                { date: '2019-02-22', til: 'ns15' },
            ],

        }
    }
    //点击2017
    cliclSeven = () => {
        this.eight.style.display = 'none'
        this.seven.style.display = 'block'
        this.nine.style.display = 'none'
    }
    //点击2018
    cliclEight = () => {
        this.eight.style.display = 'block'
        this.seven.style.display = 'none'
        this.nine.style.display = 'none'
    }
    cliclNine = () => {
        this.eight.style.display = 'none'
        this.seven.style.display = 'none'
        this.nine.style.display = 'block'
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
            this.s2.style.height = '1463px';
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
            this.s3.style.height = '1265px';
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
            this.s4.style.height = '1223px';
            list4.style.marginBottom = '0'
        }
    }
    render() {
        return (
            <div className='big'>
                <div className="news_til_box">
                    <div className="news_til">
                        <h3><FormattedMessage id='bigsj' /></h3>
                        <div className='news_line'></div>

                    </div>
                    <div className="news_til_mask"></div>
                    <div className='choose_year'>
                        <div className='sy' onClick={this.cliclSeven}><span>2017</span></div>
                        <div className='ey' onClick={this.cliclEight}>2018</div>
                        <div className='ny' onClick={this.cliclNine}>2019</div>
                    </div>
                </div>
                <div style={{ display: 'block' }} ref={(x) => { this.eight = x }}>
                    <div className='big_list_box'>
                        <div className='s1_box'>
                            <div className='s1_til lt'>
                                <FormattedMessage id='s1' />
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
                                        <div className='s1_text lt'><FormattedMessage id={item.til} /></div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='big_list_box'>
                        <div className='s1_box'>
                            <div className='s1_til lt'>
                                <FormattedMessage id='s2' />
                            </div>
                            <div className='s1_content rt' ref={(x) => { this.s2 = x }}>
                                <div className='s1_more' onClick={this.s2action}>
                                    <img src={this.state.s2action ? shang : xia} alt="" />
                                </div>
                                {this.state.es2.map((item, index) => {
                                    return <div className='s1_list s2_list' key={index}>
                                        <div className='s1_time lt'>{item.date}</div>
                                        <div className='s1_text lt'><FormattedMessage id={item.til} /></div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='big_list_box'>
                        <div className='s1_box'>
                            <div className='s1_til lt'>
                                <FormattedMessage id='s3' />
                            </div>
                            <div className='s1_content rt' ref={(x) => { this.s3 = x }}>
                                <div className='s1_more' onClick={this.s3action}>
                                    <img src={this.state.s3action ? shang : xia} alt="" />
                                </div>
                                {this.state.es3.map((item, index) => {
                                    return <div className='s1_list s3_list' key={index}>
                                        <div className='s1_time lt'>{item.date}</div>
                                        <div className='s1_text lt'><FormattedMessage id={item.til} /></div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='big_list_box'>
                        <div className='s1_box'>
                            <div className='s1_til lt'>
                                <FormattedMessage id='s4' />
                            </div>
                            <div className='s1_content rt' ref={(x) => { this.s4 = x }}>
                                <div className='s1_more' onClick={this.s4action}>
                                    <img src={this.state.s4action ? shang : xia} alt="" />
                                </div>
                                {this.state.es4.map((item, index) => {
                                    return <div className='s1_list s4_list' key={index}>
                                        <div className='s1_time lt'>{item.date}</div>
                                        <div className='s1_text lt'><FormattedMessage id={item.til} /></div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: '1000px', display: 'none' }} ref={(x) => { this.seven = x }}>
                    <div className='big_list_box'>
                        <div className='s1_box'>
                            <div className='s1_til lt'>
                                <FormattedMessage id='s3' />
                            </div>
                            <div className='s1_content rt' style={{ height: 'auto' }} >
                                {this.state.ss3.map((item, index) => {
                                    return <div className='s1_list s3_list' style={{ marginBottom: 'auto' }} key={index}>
                                        <div className='s1_time lt'>{item.date}</div>
                                        <div className='s1_text lt'><FormattedMessage id={item.til} /></div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='big_list_box'>
                        <div className='s1_box'>
                            <div className='s1_til lt'>
                                <FormattedMessage id='s4' />
                            </div>
                            <div className='s1_content rt' style={{ height: 'auto' }}>
                                {this.state.ss4.map((item, index) => {
                                    return <div className='s1_list s3_list' style={{ marginBottom: 'auto' }} key={index}>
                                        <div className='s1_time lt'>{item.date}</div>
                                        <div className='s1_text lt'><FormattedMessage id={item.til} /></div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: '1000px', display: 'none' }} ref={(x) => { this.nine = x }}>
                    <div className='big_list_box'>
                        <div className='s1_box'>
                            <div className='s1_til lt'>
                                <FormattedMessage id='s1' />
                            </div>
                            <div className='s1_content rt' style={{ height: 'auto' }} >
                                {this.state.ns1.map((item, index) => {
                                    return <div className='s1_list s3_list' style={{ marginBottom: 'auto' }} key={index}>
                                        <div className='s1_time lt' style={{width:'160px'}}>{item.date}</div>
                                        <div className='s1_text lt' style={{width:'828px'}}><FormattedMessage id={item.til} /></div>
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