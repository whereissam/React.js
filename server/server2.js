const { response } = require('express')
const express = require('express')
const app = express()

app.use((request, response, next)=> {
    console.log('有人請求服務器2')
    next()
})

app.get('/cars', (req, res) => {
    const cars = [
        {id: '001', name:'rum', price:108},
        {id: '002', name:'mazida', price:190},
        {id: '003', name:'giant', price:110}
    ]
    res.send(cars)
})

app.listen(5001, (err)=> {
    if(!err) console.log('服務器2啟動成功了')
})