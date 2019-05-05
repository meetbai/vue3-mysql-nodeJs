module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    baseUrl: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000/api/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}