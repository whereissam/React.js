import React, { Component } from 'react'
import './footer.css'
export default class Footer extends Component {
    
  //全選check的回調
  handleCheckAll = (event) => {
      this.props.checkAllTodo(event.target.checked)
    }  

    handleClearAll = () => {
      this.props.clearAllDone()
    }
  render() {
      const {todos} = this.props
      let doneCount = todos.reduce((pre, todo)=>{return pre + (todo.done ? 1 : 0)},0)
      // let checked = todos.filter((todoObj)=>{
      //   return todoObj.done === true
      // })
      const total = todos.length
        return (
            <div className='todo-footer'>
            <label htmlFor="">
              <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total!== 0 ? true : false} />
            </label>
            <span>
              <span>已完成 {doneCount}</span> / 全部 {total}
            </span>
            <button onClick={this.handleClearAll}>清除已完成</button>
          </div>
        )
    }
}
