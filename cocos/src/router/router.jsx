import React, { Component } from 'react';
import Home from '../components/home/home'
import Develop from '../components/develop/develop'
import About from '../components/about/about'
import Product from '../components/product/product'
import Footer from '../components/footer/footer'
import Action from '../components/action/action'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './router.css'
export default class Homepage extends Component {
    //获取url后边的参数
    GetRequest() {
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
    }
    componentWillMount() {
        // this.GetRequest()
    }
    render() {
        return (
            <div className="router">

                <div className='homepage_main'>
                    <Router>
                        <Switch>
                            {/* <Nav></Nav> */}
                            <Route path="/home" component={Home} />
                            <Route path="/develop" component={Develop} />
                            <Route path="/about" component={About} />
                            <Route path="/product" component={Product} />
                            <Route path="/action" component={Action} />
                            <Route path='/' render={() => (
                                <Redirect to='/home' />
                            )} />
                        </Switch>
                    </Router>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}
