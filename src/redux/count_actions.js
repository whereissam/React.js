// 專門為Count組件生成action對象
import { INCREMENT, DECREMENT } from "./constant"

//同步action、指action值為object類型一般對象
export const createIncrementAction = data => ({type:INCREMENT ,data})
export const createDecrementAction = data => ({type:DECREMENT ,data})

//異步action、指action值為函數
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        }, time)
    }
}