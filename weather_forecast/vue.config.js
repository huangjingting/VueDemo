const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    //port: 8081,
    // 配置代理
    proxy: {
      '/api': {
        // 以 “/api” 开头的url代理到下边的target属性的值
        target: 'http://127.0.0.1:8081/',
        changeOrigin: true, // 是否改变域名：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        // ws: true, // 是否启用websockets
        pathRewrite: {
          // 路径重写
          '^/api': '' // 用'/api'代替target里面的地址,比如我要调用'http://127.0.0.1:8081/user/add'，使用时直接写'/api/user/add'
        }
      }
    }
  },
})
