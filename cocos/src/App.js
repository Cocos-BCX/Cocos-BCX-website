import React, { Component } from 'react';
import Routermy from './router/router'
import { IntlProvider, addLocaleData } from 'react-intl';
import zh_CN from './i18n/zh_CN'
import en_US from './i18n/en_US'
import zh from 'react-intl/locale-data/zh';//react-intl语言包
import en from 'react-intl/locale-data/en';//react-intl语言包
import './App.css';
addLocaleData([...en, ...zh])
let rootElement = document.getElementById('root');
window.chooseLocale = chooseLocale;
function chooseLocale() {
  var url = window.location.search; //获取url中"?"符后的字串  
  console.log(url);

  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    var strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  if (theRequest.language === 'en') {
    localStorage.setItem('lang_type', 'en')
  }
  if (!localStorage.getItem('lang_type')) {
    localStorage.setItem('lang_type', 'zh');
  }
  let lang = localStorage.getItem('lang_type');
  switch (lang) {
    case 'en':
      return en_US;
    // break;
    case 'zh':
      return zh_CN;
    // break;
    default:
      return en_US;
    // break;
  }
}
class App extends Component {
  render() {
    return (
      <IntlProvider locale={navigator.language} messages={chooseLocale()}>
        <div className="App" style={{ fontFamily: 'PingFangSC-Regular, sans-serif' }}>
          <Routermy />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
