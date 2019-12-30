/**
 * created by Jason on 2019-5-20
 * 
 * see https://cli.vuejs.org/zh/config/ for documentation.
 * 
 * vue.config.js 是一个可选的配置文件，
 * 如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。
 */

module.exports = {
    // 部署应用包时的基本 URL
    publicPath: '/',

    // 开发模式
    devServer: {
        // 指定本地代理端口号
        port: 9012,
        // display both warnings and errors on the browser overlay
        overlay: {
            warnings: true,
            errors: true
        },
        // 自动打开默认浏览器
        open: true,
    },
    lintOnSave: false
}

