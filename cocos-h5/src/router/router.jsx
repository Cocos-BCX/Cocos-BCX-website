import React, { Component } from 'react';
import Home from '../components/home/home'
import Develop from '../components/develop/develop'
import About from '../components/about/about'
import Product from '../components/product/product'
import Footer from '../components/footer/footer'
import Action from '../components/action/action'

import ecologicalnodes from '../components/ecologicalnodes/ecologicalnodes'
import excitationConsultation from '../components/excitationConsultation/excitationConsultation'
import { BrowserRouter as Router, Route, Redirect,Switch } from "react-router-dom";
import './router.css'
export default class Homepage extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div className="router">

                <div className='homepage_main'>
                    <Router>
                        <Switch>
                            {/* <Nav></Nav> */}
                            <Route path="/" exact component={Home} />
                            <Route path="/develop" component={Develop} />
                            <Route path="/about" component={About} />
                            <Route path="/product" component={Product} />
                            <Route path="/action" component={Action} />
                            <Route path="/ecologicalnodes" component={ecologicalnodes} />
                            <Route path="/excitationConsultation" component={excitationConsultation} />
                            <Route path='/'  render={() => (
                                <Redirect to='/' />
                            )} />
                        </Switch>
                    </Router>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}
