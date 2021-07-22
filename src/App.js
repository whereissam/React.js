import React, { Component } from 'react'
import Header from './components.jsx/Header'
import Footer from './components.jsx/Footer/Indes'
import List from './components.jsx/List'
import './App.css'
export default class App extends Component {
  //狀態在哪，操作就在哪
  
  state = {todos: [
    {id: '001', name: 'Eat', done:true},
    {id: '002', name: 'Sleep', done:true},
    {id: '003', name: 'Coding', done:false}
  ]}

  //addTodo用於添加一個todo. 接收的對象是todo對象
  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos:newTodos})
    console.log(todoObj, this.state)
  }

    //updateTodo 用於更新一個todo對象
  updateTodo = (id, done) => {
    const {todos} = this.state
    // console.log(todos)
    // console.log(done)
    //匹配處理數據
    const newTodos = todos.map((todoObj)=> {
      if(todoObj.id === id) return {...todoObj, done:done}
      else return todoObj
    })
    this.setState({todos: newTodos})
  }

  //deleTodo
  deleteTodo = (id) => {
    //獲取原來的todos
    const {todos} = this.state
    //刪除指定id的todo對象
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    this.setState({todos:newTodos })
    console.log(newTodos.length)
  }

  checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      return {...todoObj, done:done}
    })
    this.setState({todos:newTodos})
  }

  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }
  render() {
    const {todos} = this.state
    console.log(todos)
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo}></Header>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}></Footer>
        </div>
      </div>
    )
  }
}

