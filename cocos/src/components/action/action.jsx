import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { getLang } from '../../utils/chooselang'
import Nav from '../nav/nav'
import New from './new/new'
import Hd from './hd/hd'
import Yb from './yb/yb'
import Big from './big/big'
import './action.css'

export default class Footer extends Component {
    componentDidMount(nextProps) {
        window.scrollTo(0, 0)
    }
    render() {
        let t = getLang();
        return (
            <div className='action'>
                <div className='banne_n_box' style={{ background: "url('https://jdi.cocosbcx.net/image/cocosbcx/active_banner.jpg') no-repeat center" }}>
                    <Nav></Nav>
                    <div className='a_nav'>
                        <NavLink to="/action/news" activeClassName="active"
                            className='a_nav_new' ><span>{t.a_news}</span>
                        </NavLink>
                        <NavLink to="/action/hd" activeClassName="active"
                            className='a_nav_new' ><span>{t.hd}</span>
                        </NavLink>
                        <NavLink to="/action/yb" exact={true} activeClassName="active"
                            className='a_nav_new' ><span>{t.yb}</span>
                        </NavLink>
                        <NavLink to="/action/big" exact={true} activeClassName="active"
                            className='a_nav_big' ><span>{t.big}</span>
                        </NavLink>
                    </div>
                </div>
                <Switch>
                    <Route path="/action/news" component={New} />
                    <Route path="/action/hd" component={Hd} />
                    <Route path="/action/yb" component={Yb} />
                    <Route path="/action/big" component={Big} />
                    <Route path='/action' render={() => (
                        <Redirect to='/action/news' />
                    )} />
                </Switch>
            </div>
        );
    }
}