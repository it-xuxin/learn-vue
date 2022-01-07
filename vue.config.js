module.exports = {
    pages: {
        index: {
            entry: './src/main.js',
            template: './public/index.html',
            title: '用户登录'
        },

        schedule: {
            entry: './src/pages/schedule/main.js',
            template: './public/index.html',
            title: '课表查询'
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://dev.meixiu.mobi',
                ws: true,
                changeOrigin: true
              },
        }
    }
}