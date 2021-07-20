import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types'

//創建組件
class Time extends React.Component{
  state = {date: new Date()}

  componentDidMount(){
    setInterval(()=> {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  render(){
    return(
      <div>
        <h1>Hello</h1>
        <input type="text" name="" id="" />
        <span>Now is : {this.state.date.toTimeString()}</span>
      </div>
    )
  }
}
ReactDOM.render(
  <Time />,
  // <React.StrictMode>
    // <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
