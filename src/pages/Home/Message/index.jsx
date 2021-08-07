import React, { Component } from 'react'
import Detail from './Deatil'
import { Link, Route } from 'react-router-dom'
export default class Message extends Component {
    state = {
        messageArr:[
            {id:'01', title:'news1'},
            {id:'02', title:'news2'},
            {id:'03', title:'news3'}
        ]
    }

    replaceShow = (id,title) => {
            // params 參數 
            // this.props.history.replace(`/home/message/detail/${id}/${title}`)

            //search 參數
            // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

            //state 參數
            this.props.history.replace('/home/message/detail', {id,title})
        }

    pushShow = (id,title) => {
        // params 參數 
        // this.props.history.push(`/home/message/detail/${id}/${title}`)

        //search 參數
        // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)
    
        //state 參數
        this.props.history.push('/home/message/detail', {id,title})
    }

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }

    go = () => {
        this.props.history.go(2)
    }
    render() {


        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj)=>{
                            return(
                                <li key={msgObj.id}>

                                    {/* params 參數 */}
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                                    &nbsp;<button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>Push 查看</button>
                                    &nbsp;<button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>Replace 查看</button>

                                    {/* search 參數 */}
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                                
                                    {/* state 參數 */}
                                    <Link replace={true} to={{pathname: '/home/message/detail', state:{id:msgObj.id, title:msgObj.title}}}>{msgObj.title}</Link>
                                
                                </li>
                            )
                        })
                    }
                </ul> 
                <hr />

                {/* params參數 */}
                {/* <Route path='/home/message/detail/:id/:title' component={Detail}></Route> */}

                {/* search 參數 */}
                {/* <Route path='/home/message/detail' component={Detail}></Route> */}

                {/* state參數 */}
                <Route path='/home/message/detail' component={Detail}></Route>
            
                <button onClick={this.back}>Back</button>
                <button onClick={this.forward}>Go forward</button>
                <button onClick={this.go}>Go</button>
            </div>
        )
    }
}
