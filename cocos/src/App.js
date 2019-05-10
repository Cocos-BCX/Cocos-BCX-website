import React, { Component } from 'react';
import Routermy from './router/router'
import './App.css';
// window.chooseLocale = chooseLocale;

class App extends Component {

  chooseLocale = () => {
    let url = window.location.search; //获取url中"?"符后的字串  

    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
      let str = url.substr(1);
      let strs = str.split("&");
      for (let i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
    }
    if (theRequest.language === 'en') {
      localStorage.setItem('lang_type', 'en')
    }
    if (!localStorage.getItem('lang_type')) {
      if (this.getlang() === 'zh') {
        localStorage.setItem('lang_type', 'zh');
      }else{
        localStorage.setItem('lang_type', 'en');
      }
    }

  }
  getlang = () => {
    let lang = navigator.language || navigator.userLanguage;//常规浏览器语言和IE浏览器
    lang = lang.substr(0, 2);//截取lang前2位字符
    return lang
  }
  componentWillMount() {
    this.chooseLocale()
  }
  render() {
    return (
      <div className="App" style={{ fontFamily: 'PingFangSC-Regular, sans-serif' }}>
        <Routermy />
      </div>
    );
  }
}

export default App;
