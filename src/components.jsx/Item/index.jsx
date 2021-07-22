import React, { Component } from 'react'
import './item.css'
export default class Item extends Component {
    state = {mouse:false}
    handleMouse = (flag) => {
        return () => {
            // console.log(flag)
            this.setState({mouse:flag})
        }
    }

    handleCheck = (id) => {
        return(event) => {
            // console.log(id, event.target.checked)
            this.props.updateTodo(id, event.target.checked)
        }
    }

    handleDelete = (id) => {
        if(window.confirm('確定刪除嗎?')){
            this.props.deleteTodo(id)
        }
        
        console.log(id)
    }
    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
              <label>
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                <span>{name}</span>
              </label>
              <button onClick={()=>{this.handleDelete(id)}} style={{display:mouse ? 'block' : 'none'}} className='btn btn-danger'>刪除</button>
            </li>
        )
    }
}
