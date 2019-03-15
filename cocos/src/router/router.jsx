import React, { Component } from 'react';
import Home from '../components/home/home'
import Develop from '../components/develop/develop'
import About from '../components/about/about'
import Product from '../components/product/product'
import Footer from '../components/footer/footer'
import Action from '../components/action/action'
import { HashRouter as Router, Route, Redirect, } from "react-router-dom";
import './router.css'
export default class Homepage extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div className="router">

                <div className='homepage_main'>
                    <Router>
                        <div>
                            {/* <Nav></Nav> */}
                            <Route path="/home" component={Home} />
                            <Route path="/develop" component={Develop} />
                            <Route path="/about" component={About} />
                            <Route path="/product" component={Product} />
                            <Route path="/action" component={Action} />
                            <Route path='/' exact render={() => (
                                <Redirect to='/home' />
                            )} />
                        </div>
                    </Router>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}
