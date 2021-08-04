import axios from 'axios'
import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {

    search = async() => {
        // 獲取用戶輸入 //連續解構賦值+重命名
        const {keyWordElement:{value:keyWord}} = this
        // console.log(keyWord)
        PubSub.publish('123',{isFirst:false, isLoading:true})
        // this.props.updateAppState({isFirst:false, isLoading:true})

        //發送網路請求 - axios
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => {
                // console.log('Success', response.data)
                PubSub.publish('123',{isLoading:false,users:response.data.items})
                // this.props.updateAppState({isLoading:false,users:response.data.items})
            },
            error => {
                PubSub.publish('123',{isFirst:false, err:error.message})
                // this.props.updateAppState({isFirst:false, err:error.message})
                console.log('Fail', error)
            }
        )

        //發送網路請求 - fetch
        // fetch(`/api1/search/users?q=${keyWord}`).then(
        //     response => {
        //         console.log('Success connect to server');
        //         console.log(response);
        //         return response.json()
        //     },
        //     // error => {console.log('Fail to connect to server', error)}
        // ).then(
        //     response => {console.log('Success connect to data', response)},
        //     // error => {console.log('Fail to connect to data', error)}
        //     ).catch(
        //         (error)=>{console.log(error)}
        //     )

        //發送網路請求 - fetch 優化
        // try{
        //     const response = await fetch(`/api1/search/users?q=${keyWord}`)
        //     const data = await response.json()
        //     PubSub.publish('123',{isLoading:false,users:data.items})

        //     console.log(data)
        // } catch(error){
        //     console.log('request error', error)
        //     PubSub.publish('123',{isFirst:false, err:error.message})
        // }
     
    }
    render() {
        return (
            <section className='jumbotron'>
                <h3 className='jumbotron-heading'>Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder='enter the name your search' name="" id="" />
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
