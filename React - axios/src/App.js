import axios from 'axios'
import React, { Component } from 'react'
import './App.css'
export default class App extends Component {

  getStudentData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      response => {console.log('成功了', response.data)},
      error => {console.log('失敗了', error)}
    )
  }

  getCarsData = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      response => {console.log('成功了', response.data)},
      error => {console.log('失敗了', error)}
    )
  }
  render() {
   return(
     <div>
       <button onClick={this.getStudentData}>點我或取學生數據</button>
       <button onClick={this.getCarsData}>點我會取車子數據</button>
     </div>
   )
  }
}

