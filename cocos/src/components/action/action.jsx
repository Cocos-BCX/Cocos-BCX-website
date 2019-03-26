import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Nav from '../nav/nav'
import New from './new/new'
import Hd from './hd/hd'
import Yb from './yb/yb'
import Big from './big/big'
import './action.css'

export default class Footer extends Component {

    render() {
        let lang = localStorage.getItem('lang_type');
        return (
            <div className='action'>
                <div className='banne_n_box'>
                    <Nav></Nav>
                    <div className='a_nav'>
                        <NavLink to="/action/news" activeClassName="active"
                            className='a_nav_new' ><FormattedMessage id='a_news' />
                        </NavLink>
                        <NavLink to="/action/hd" activeClassName="active"
                            className='a_nav_new' ><FormattedMessage id='hd' />
                        </NavLink>
                        <NavLink to="/action/yb" exact={true} activeClassName="active"
                            className='a_nav_new' ><FormattedMessage id='yb' />
                        </NavLink>
                        <NavLink to="/action/big" exact={true} activeClassName="active"
                            className='a_nav_big' ><FormattedMessage id='big' />
                        </NavLink>
                    </div>
                </div>
                <Router>
                    <Switch>
                        <Route path="/action/news" component={New} />
                        <Route path="/action/hd" component={Hd} />
                        <Route path="/action/yb" component={Yb} />
                        <Route path="/action/big" component={Big} />
                        <Route path='/action' render={() => (
                            <Redirect to='/action/news' />
                        )} />
                    </Switch>
                </Router>
            </div>
        );
    }
}