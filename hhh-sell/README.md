
-----开发文档

一： 技术栈：
vue+vuex（modules）+vue-cli+axios+vue-router+vant-ui+rem布局
模块：轮播，购物车，微信支付，登陆注册

二：vue-cli脚手架使用:
node_modules:放置项目依赖的地方
public:一般放置一些共用的静态资源，打包上线的时候，public文件夹里面资源原封不动打包到dist文件夹里面
src：程序员源代码文件夹
assets文件夹：经常放置一些静态资源（图片），assets文件夹里面资源webpack会进行打包为一个模块（js文件夹里面）
components文件夹:一般放置非路由组件（或者项目共用的组件）
pages/views文件夹：一般放置路由组件
comment:放置公用的东西
api:放置封装的请求接口
mock:放置模拟的数据mockjs
plugins:放置一些js插件
router:配置的路由
store:vuex的相关配置
store/modules：vuex模块化
App.vue 唯一的根组件
main.js 入口文件【程序最先执行的文件】
babel.config.js:babel配置文件
package.json：看到项目描述、项目依赖、项目运行指令
README.md:项目说明文件

三：脚手架的配置
（一）
浏览器自动打开
在package.json文件中
"scripts": {
"serve": "vue-cli-service serve --open", 加个open浏览器自动打开
"build": "vue-cli-service build",
"lint": "vue-cli-service lint"
},
（二）
关闭eslint校验工具
webpack.base.config.js中配置
module.exports = {
    lintOnSave:false,
}
（三）
src文件夹的别名的设置
因为项目大的时候src（源代码文件夹）：里面目录会很多，
找文件不方便，设置src文件夹的别名的好处，找文件会方便一些
webpack.base.config.js中配置
module.exports = {
    resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src'),  @代替src
    }
    },
}

四：
src/pages路径
(1)创建tab组件和四个基本的路由跳转组件home,product,cart,my
并且使用阿里巴巴字体图标库:https://blog.csdn.net/yuanchangliang/article/details/110664946
(2)配置rem布局：https://www.jianshu.com/p/79be33f2ce88

五：配置vuex使用modules模块化
在src/store中配置

六：
（一）
二次封装axios：https://www.jianshu.com/p/1727f133b151
src/api/index.js这里统一管理接口
src/api/mockserver.js这里封装mockjs请求
src/api/server.js这里封装真实接口的请求

（二）
进行跨域配置：配置proxyTable
config/index.js目录中配置
跨域详解：
baseurl直接写成http://39.98.123.211进行请求数据会造成跨域，请求不到。
所以把接口换成api请求中间服务器target里面的接口

（三）
用mockjs模拟轮播图数据
src/mock/banner.json这里存放轮播图数据
src/mock/mock.js这里开启mock服务,配置mock后端的相关接口
最后要在main.js中引入
（四）
用使用vant-ui的swiper模块实现轮播

七：【我的】页面实现登陆注册
（一）
src/pages/My/childen文件夹中登录注册组件

（二）
由于真实接口失效了，所以用mockjs模拟验证码（别忘了在入口文件main.js中引入mock）
https://www.cnblogs.com/guozongzhang/p/10722691.html
mock文件夹就相当于后端，里面定义一些后端接口和数据模板

（三）
用mockjs模拟注册，使用了vuex
在 src/pages/My/children/register.vue 中进行派发注册事件，传递phone,password等等
在 src/store/modules/user.js 中把手机号，密码等等进行存储

（四）
token验证：https://www.cnblogs.com/web-record/p/9876916.html
用mockjs模拟登录，随机生成了token，使用了vuex（暂时存储，刷新数据会消失），和localstorage（永久存储，刷新数据不会消失）进行存储token
localstorage的值可以在浏览器 f12-应用-本地存储空间 中查看
在 src/store/modules/user.js中把token，用户名和密码等等进行存储

（五）
从服务器获取用户信息，展示在首页，在home.vue组件编写
再次请求时需要带上token，

（六）
退出登录：点击退出登录，清除token，清除用户信息。
同样在：src/pages/Home/home.vue中编写


（七）
使用导航守卫（全局守卫，路由独享，组件级别）
进行页面跳转时验证token（有token说明已经登录，没有说明没登录，则跳转到登录页）

全局导航守卫：已经登陆了则浏览器中输入登录的地址不能跳转到登录页了
路由独享守卫：组件之间的跳转

八
交易结算页面开发
使用async和await函数
点击购物车组件（cart）跳转到（trade）组件

九
购物车商品列表开发











