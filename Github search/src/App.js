// import axios from 'axios'
import React, { Component } from 'react'

import List from './components/List/index.jsx'
import Search from './components/Search/index.jsx'

export default class App extends Component {

  state = {//初始化狀態
    users:[], //users初始值為數值
    isFirst:true, //是否為第一次打開葉面
    isLoading:false, //標誌是否為加載中
    err:'',//存處請求相關錯誤信息
  } 

  updateAppState = (stateObj)=>{
    this.setState(stateObj)
    console.log(stateObj)
  }

  render() {
   return(
     <div className='container'>
       <Search updateAppState={this.updateAppState }></Search>
       <List {...this.state}></List>
     </div>
   )
  }
}

