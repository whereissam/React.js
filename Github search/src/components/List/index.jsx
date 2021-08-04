import React, { Component } from 'react'
import './list.css'
import PubSub from 'pubsub-js'

export default class List extends Component {
  state = {//初始化狀態
    users:[], //users初始值為數值
    isFirst:true, //是否為第一次打開葉面
    isLoading:false, //標誌是否為加載中
    err:'',//存處請求相關錯誤信息
  } 

  componentDidMount(){
    this.token = PubSub.subscribe('123',(_,stateObj)=>{
      // console.log(data);
      this.setState(stateObj)
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }
  render() {
    const {users, isFirst,isLoading,err} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>Welcome to use, enter keyword to search</h2> : 
          isLoading ? <h2>Loading......</h2> : 
          err ? <h2 style={{color:'red'}}>{err}</h2> :
          users.map((userObj)=>{
            return(
              <div key={userObj.id} className="card">
              <a rel="noreferrer" href={userObj.html_url} target="_blank">
                  <img alt="avatar" src={userObj.avatar_url} style={{ 'width': '100px' }}/>
              </a>
              <p className="card-text">{userObj.login}</p>
            </div>
            )
          })
        }
      </div>
    )
  }
}

