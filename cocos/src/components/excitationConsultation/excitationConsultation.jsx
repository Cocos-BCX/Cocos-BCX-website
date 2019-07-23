import React, { Component } from 'react';
import Nav from '../nav/nav'
import { getLang } from '../../utils/chooselang'
import play from '../../images/play.png'
import close from '../../images/close.png'


import './excitationConsultation.css'

export default class Product extends Component {
    constructor(props) {
        super(props);
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
    //打开播放器
    showVideo = () => {
        if (this.state.lang === 'en') {
            this.youku.src = 'https://video.cocosbcx.net/Cocos-BCX%20en.mp4'
        } else {
            this.youku.src = 'https://video.cocosbcx.net/Cocos-BCX%20cn.mp4'
        }
        this.videoBox.style.display = 'flex';

    }
    hideVideo = () => {
        this.youku.src = '';
        this.videoBox.style.display = 'none';
    }
    //隐藏播放器
    closeVideo = () => {
        document.addEventListener('click', () => {
            if (this.videoBox) {
                this.youku.src = '';
                this.videoBox.style.display = 'none';
            }
        }, false)
    }
    //阻止冒泡
    stopImmediate(e) {
        e = e || window.event;
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }
    componentDidMount() {
        this.choose()
        this.closeVideo();
    }
    render() {
        let lang = localStorage.getItem('lang_type');
        let t = getLang();
        return (
            <div className='product'>
                
                <div className='video_box' ref={(x) => { this.videoBox = x }}>
                    <div className='video'>
                        <div className='close_box' onClick={this.hideVideo}>
                            <img src={close} alt="" />
                        </div>
                        {
                            lang === 'en' ?
                                <iframe type="text/html" width="1200px" height="688px" ref={(x) => { this.youku = x }} src="" frameBorder="0" allowFullScreen allowtransparency='yes' allow="autoplay"></iframe> :
                                <iframe width="1200px" height="688px" ref={(x) => { this.youku = x }} src='' frameBorder='0' allowtransparency='yes' flashvars="isAutoPlay=true" allow="autoplay" >
                                </iframe>
                            // <embed src='http://player.youku.com/player.php/sid/XNDA4NjA1NDAwMA==/v.swf' allowFullScreen={true} flashvars="isAutoPlay=true" quality='high' width='480' height='400' align='middle' allowscriptaccess='always' type='application/x-shockwave-flash'></embed>
                        }

                    </div>
                </div>
                <div className="banner-excitation-consultation" style={{ background: "url(https://jdi.cocosbcx.net/image/cocosbcx/banner24.jpg) no-repeat center" }}>
                    <Nav></Nav>
                    <div className='home_btn_box'>
                        <div className='home_btn_box_mask  tada delay-1s'>
                            <h5>COCOS</h5>
                            <h5>BLOCKCHAIN EXPEDITION</h5>
                            <h6>{t.next}</h6>
                            <div className='play_btn'>
                                <img src={play} alt="" className='lt' onClick={(e) => { this.showVideo(); this.stopImmediate(e) }} />
                                <p className='lt'>{t.nextex}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='explane'>
                    {/* <div className='excitationConsultation-title'>想要参与 Cocos-BCX 生态建设的小伙伴，可以添加客服“技术小姐姐”，邀请您进入小姐姐的群并获得相应支持</div> */}
                    <div className='excitationConsultation-title'>{t.excitationConsultation.qrcode1Title}</div>
                    <div className='excitationConsultation-qrcode-container excitationConsultation-qrcode-container-bg1'>
                        <img className='qrcode-img' src="https://jdi.cocosbcx.net/image/cocosbcx/CustomerService.jpg" alt=""/>
                        {/* <p className='qrcode-img-name'>Cocos-BCX技术小姐姐</p> */}
                        <p className='qrcode-img-name'>{t.excitationConsultation.qrcode1Name}</p>
                    </div>
                </div>
                <div className='explane'>
                    <div className='excitationConsultation-title'>{t.excitationConsultation.qrcode2Title}</div>
                    <div className='excitationConsultation-qrcode-container excitationConsultation-qrcode-container-bg2'>
                        <img className='qrcode-img' src="https://jdi.cocosbcx.net/image/explorer/kcode.jpeg" alt=""/>
                        <p className='qrcode-img-name'>{t.excitationConsultation.qrcode2Name}</p>
                    </div>
                </div>
                
                <div className='blank-bottom'></div>
            </div>
        );
    }
}