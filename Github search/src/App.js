// import axios from 'axios'
import React, { Component } from 'react'

import List from './components/List/index.jsx'
import Search from './components/Search/index.jsx'

export default class App extends Component {

  render() {
   return(
     <div className='container'>
       <Search></Search>
       <List></List>
     </div>
   )
  }
}

