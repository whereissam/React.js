import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types'
// function NewComponent(){
//   console.log(this)
//   return <h2>This is new component</h2>
// }

//創建組件
class NewComponent extends React.Component {
  
  static propTypes = {
    name: PropTypes.string.isRequired, //限制為字串且必傳東西
    gender: PropTypes.string,
    age: PropTypes.number,
    speak: PropTypes.func,
  }
  
  static defaultProps = {
    gender: 'girlorboy',
    age: 18
  }
  render(){
    console.log(this)
    const {name, gender, age} = this.props
    return (
    <ul>
      <li>Name: {name}</li>
      <li>Gender: {gender}</li>
      <li>Age: {age+1}</li>
    </ul>
    )
  }

}


const person = {name: 'Sam', gender: 'boy', age : 20} 

ReactDOM.render(
  <NewComponent {...person} speak={speak}/>,
  // <React.StrictMode>
    // <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

function speak(){
  console.log('I am speak')
}

// function changetype(){
//   console.log(this)
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
