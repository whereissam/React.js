import React, { Component } from 'react'
import './footer.css'
export default class Footer extends Component {
    render() {
        return (
            <div className='todo-footer'>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
            </label>
            <span>
              <span>已完成0</span> / 全部
            </span>
            <button>清除已完成</button>
          </div>
        )
    }
}
