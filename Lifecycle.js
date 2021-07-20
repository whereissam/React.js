import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types'

//創建組件
class NewScroll extends React.Component{

  state = {newsArr:[]}

  componentDidMount(){
    setInterval(() => {
      const {newsArr} = this.state
      const news = 'news' + (newsArr.length+1)
      this.setState({newsArr:[news, ...newsArr]})
    }, 1000);
  }

  getSnapshotBeforeUpdate(){
    return this.refs.list.scrollHeight
  }

  componentDidUpdate(preProps, preState, height){
    console.log(this.refs.list.scrollTop) //距離滾輪最上面多少
    console.log(this.refs.list.scrollHeight) //在總滾輪多少高度的位置
    console.log(height) //更新前的高度
    this.refs.list.scrollTop += this.refs.list.scrollHeight - height
  }
  render(){
    return(
      <div className='list' ref='list'>
        {
          this.state.newsArr.map((n, index)=>{
            return <div key={index}>{n}</div>
          })
        }
      </div>
      )
  }
}

ReactDOM.render(
  <NewScroll />,
  // <React.StrictMode>
    // <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
