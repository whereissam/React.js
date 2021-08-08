import React from 'react'
import ReactDOM from 'react-dom';

// export default class Demo extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

function Demo(){

    const [count, setCount] = React.useState(0)
    // console.log(a,b)

    const myRef = React.useRef()

    React.useEffect(()=>{
        console.log('a')
        let timer = setInterval(()=>{
            setCount(count => count+ 1)
        }, 1000)
        return ()=>{
            clearInterval(timer)
        }
    }, [])

    function add(){
        // setCount(count+1)
        setCount(count => count+1)
    }

    function show(){
        alert(myRef.current.value)
    }

    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    return(
        <div>
            <input type="text" ref={myRef} name="" id="" />
            <h2>當前求和為: {count}</h2>
            <button onClick={add}>Add +1</button>
            <button onClick={unmount}> unMount </button>
            <button onClick={show}> click me to show info </button>
        </div>
    )
}

export default Demo