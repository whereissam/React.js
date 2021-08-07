const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api1',{ //遇見/api前綴的請求，就會觸發代理位置
            target:'http://localhost:5000', //請求轉發
            changeOrigin:true, //控制服務器收到的請求中的Host的值
            pathRewrite:{'^/api1':''} //重寫請求路徑，保證交給後臺服務器是正常請求(必要)
        })
    )
}