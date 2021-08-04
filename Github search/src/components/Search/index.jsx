import axios from 'axios'
import React, { Component } from 'react'

export default class Search extends Component {

    search = () => {
        // 獲取用戶輸入 //連續解構賦值+重命名
        const {keyWordElement:{value:keyWord}} = this
        // console.log(keyWord)
        this.props.updateAppState({isFirst:false, isLoading:true})
        //發送網路請求
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => {
                // console.log('Success', response.data)
                this.props.updateAppState({isLoading:false,users:response.data.items})
            },
            error => {
                this.props.updateAppState({isFirst:false, err:error.message})
                console.log('Fail', error)
            }
        )
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
