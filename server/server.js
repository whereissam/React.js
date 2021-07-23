const { response } = require('express')
const express = require('express')
const app = express()

app.use((request, response, next)=> {
    console.log('有人請求服務器1')
    next()
})

app.get('/students', (req, res) => {
    const students = [
        {id: '001', name:'tom', age:18},
        {id: '002', name:'jerry', age:16},
        {id: '003', name:'tony', age:180}
    ]
    res.send(students)
})

app.listen(5001, (err)=> {
    if(!err) console.log('服務器1啟動成功了')
})