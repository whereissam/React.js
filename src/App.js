import React, { Component } from 'react'
import Header from './components.jsx/Header'
import Footer from './components.jsx/Footer/Indes'
import List from './components.jsx/List'
import './App.css'
export default class App extends Component {
  state = {todos: [
    {id: '001', name: 'Eat', done:true},
    {id: '002', name: 'Sleep', done:true},
    {id: '003', name: 'Coding', done:false}
  ]}
  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos:newTodos})
    console.log(todoObj, this.state)
  }
  render() {
    const {todos} = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo}></Header>
          <List todos={todos}></List>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

