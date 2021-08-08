import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route } from 'react-router-dom'

import Lazy from './Lazy'
const Home = lazy(()=> import('./Home'))
const About = lazy(()=> import('./About'))
export default class Demo extends Component {
    
    state = {count:0}

    add = () => {
        // const {count} = this.state
        // this.setState({count: count+1}, ()=>{
        //     console.log(this.state.count)
        // })
        this.setState((state, props)=>{
            return {count:state.count+1}
        })
    }
    render() {
        return (
            <div>
                <div>
                    <NavLink className='list-group-item' to='/about'>About</NavLink>
                    <NavLink className='list-group-item' to='/home'>Home</NavLink>
                </div>
                <h1>當前求和為: {this.state.count}</h1>
                <button onClick={this.add}>Add +1</button>
                <div>
                    <Suspense fallback={<Lazy></Lazy>}>
                    <Route path='/about' component={About}></Route>
                    <Route path='/home' component={Home}></Route>
                    </Suspense>
                </div>
            </div>
        )
    }
}
