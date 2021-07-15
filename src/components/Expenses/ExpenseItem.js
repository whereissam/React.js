import React from 'react';
// import './ExpenseDate.js'
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';
import './ExpenseItem.css'
function ExpenseItem(props){
    // const [title, setTitle] = useState(props.title);
    //const [point at that managed value(props.title), new update title]
    // let title = props.title
 
    // console.log(props)
    return (
        <Card className='expense-item'>
        <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button>Change Title</button>
        </Card>
    );
}
export default ExpenseItem;