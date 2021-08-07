// 1.該文件專門用於export 一個 Count組件服務的reducer, reducer的本質就是一個函數
// 2.reducer函數會接到兩個參數，分別為: 之前的狀態(preState)，動作對象(action)

import { INCREMENT, DECREMENT } from "./constant"

const initState = 0
export default function countReducer(preState=initState, action){
    
    //從action對象中獲取: type、data
    const {type, data} = action

    //根據type決定如何加工數據
    switch (type){
        case INCREMENT :
            return preState + data //如果是加
        case DECREMENT :
            return preState - data //如果是減
        default:
            return preState
    }
}