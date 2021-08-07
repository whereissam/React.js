import React, { Component } from 'react'
// import qs from 'querystring'

// let obj = {name:'tom', age:18}
// console.log(qs.stringify(obj))

// let str = 'carName=Run&price=199'
// console.log(qs.parse(str))

const DetailData = [
    {id:'01', content:'Hello'},
    {id:'02', content:'Hello22'},
    {id:'03', content:'Hello333'}
]
export default class Detail extends Component {
    
    render() {
        // console.log(this.props)
        //接收params參數
        // const {id,title} = this.props.match.params
                
        //接收search 參數
        // const {search} = this.props.location
        // const {id, title} = qs.parse(search.slice(1))
        

        // 接收state參數
        const {id, title} = this.props.location.state || {}
        
        const findResult = DetailData.find((detailObj)=>{
            return detailObj.id === id
        }) || {}

        return (
           <ul>
               <li>ID:{id}</li>
               <li>Title:{title}</li>
               <li>Content:{findResult.content}</li>
           </ul>
        )
    }
}