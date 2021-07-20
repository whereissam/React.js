import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './header.css'

console.log(nanoid())
console.log(nanoid())
console.log(nanoid())
export default class Header extends Component {
    handlerKeyUp = (event)=> {
        const {keyCode, target} = event
        if(keyCode !== 13) return
        // console.log(event.target.value)
        if(target.value.trim() === ''){
            alert("It's empty")
            return
        }
        const todoObj = {id:nanoid(), name:target.value, done: false}
        this.props.addTodo(todoObj)
        target.value = ''
    }
    render() {
        return (
            <div className='todo-header'>
             <input onKeyUp={this.handlerKeyUp} type="text" placeholder='請輸入你的任務' />
            </div>
        )
    }
}
