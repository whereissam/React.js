import React, { Component } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
// import {NavLink, Link, Route} from 'react-router-dom'

import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

import Home from './pages/Home'
import About from './pages/About'
export default class App extends Component {

  render() {
    return ( 
      <div>
          <div className="row">
            <div className='col-xs-2 col-xs-offset-8'>
                <Header></Header>  
            </div>
          </div>
         
          <div className='row'>
            <div className='col-xs-2 col-xs-offset-2'>
              <div className='list-group'>
                  {/* <NavLink activeClassName='newStyle' className='list-group-item' to="/home">Home</NavLink>
                  <NavLink activeClassName='newStyle' className='list-group-item' to="/about">About</NavLink> */}
                  <MyNavLink to='/home'>Home</MyNavLink>
                  <MyNavLink to='/about'>About</MyNavLink>
              </div>
            </div>
            <div className='col-xs-6'>
             <div className='panel'>
               <div className='panel-body'>
               <Switch>
                  <Route path='/about' component={About}></Route>
                  <Route path='/home' component={Home}></Route>
                  <Redirect to='/about'></Redirect>
               </Switch>
               </div>
             </div>
            </div>
          </div>
      </div>
      
  )
  }
}

