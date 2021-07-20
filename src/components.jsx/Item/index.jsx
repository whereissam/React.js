import React, { Component } from 'react'
import './item.css'
export default class Item extends Component {
    render() {
        const {name, done} = this.props
        return (
            <li>
              <label htmlFor="">
                <input type="checkbox" defaultChecked={done} />
                <span>{name}</span>
              </label>
              <button style={{display:'none'}} className='btn btn-danger'>刪除</button>
            </li>
        )
    }
}
