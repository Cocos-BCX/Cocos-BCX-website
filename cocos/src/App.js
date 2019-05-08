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
      localStorage.setItem('lang_type', 'zh');
    }

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
