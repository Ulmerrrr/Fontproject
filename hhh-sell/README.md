               # 关于vue的webapp的项目骨架 #

# 一：vue项目架构 #

## 1.1：vue项目搭建流程 ##
https://blog.csdn.net/weixin_40760196/article/details/79952652
## 1.2：vue-cli2和vue-cli3区别： ##
https://segmentfault.com/a/1190000021582356?utm_source=tag-newest
## 1.3：vue-cli3中webpack配置： ##
https://blog.csdn.net/u014440483/article/details/87267160
## 1.4：vue-cli3运行cli2项目： ##
https://www.cnblogs.com/pythoncd/articles/12210091.html


# 二：前端工程化包括 #

## 2.1:技术选型 ##
- vue+vuex（modules）+vue-cli2.x+axios+vue-router+vant-ui+rem布局
- vue中使用sass：https://www.jianshu.com/p/df1dca488c10
- vue中使用mock(别忘了在入口文件main.js中引入):
- https://www.cnblogs.com/tzm-001/p/10382534.html
- https://www.cnblogs.com/guozongzhang/p/10722691.html

## 2.2:开发规范 ##
- 目录结构,文件命名规范
- 编码规范：eslint(js代码校验)，stylelint（css校验）,prettier（主要用于格式化html部分的代码）,
husky（可以配置git的一些钩子，本文主要用来配置 commit 钩子）,editorconfig (统一编辑器基本配置),
tsconfig(typescript规范)

## 2.3:开发流程的规范 ##
- 使用敏捷，增强开发进度管理和控制
- 应对各项风险，需求变更等
- code review 机制
- UAT（用户验收测试） 提升发布的需求的质量

## 2.4:前后端接口规范，其他文档规范 ##

## 2.5:打包规范 ##
- webpack打包优化，拆包，分包，加速 ，CDN
- 关闭生产环境sourceMap;
- 关闭预加载(vue会预加载后面的页面，会导致首屏加载比较慢)
- g-zip压缩(需要nginx配置);
- 生产环境CDN加载部分插件
- 去除生产环境console和debugger;
- 公共代码抽离
- 打包大小分析
- 打包缓存
- 部分依赖使用异步cdn加载

## 2.6:单元测试 ##
- https://juejin.cn/post/6844904051449036808
- https://juejin.cn/post/6844904196244766728
- 使用jest进行单元测试，提高代码的可测试性，引入单元测试，提高代码质量

## 2.7:通过使用各种自动化的工程工具，提升整个开发、部署效率 ##
- 比如gulp

## 2.8:性能优化 ##
- css到js，线上，测试工具，性能监控工具，性能的指标。


# 三：项目功能介绍 #
- 模块：轮播，购物车，微信支付，登陆注册
- 
# 四：项目开发流程 #

## 4.1：安装包和目录配置 ##
- 安装各种需要的包：sass+vant-ui+axiox+echarts+mock等等
- 配置项目的基本目录：router,mock,store,pages，layout等等

## 4.2：文件目录说明 ##
- build----用于存放 webpack 相关配置和脚本。
开发中仅偶尔使用 到此文件夹下 webpack.base.conf.js
用于配置 less、sass等css预编译库，或者配置一下 UI 库。
    - build----生产环境构建脚本
    - check-versions
    - utils---- 构建相关工具方法
    - vue-loader.conf
    - webpack.base.conf----wabpack基础配置
    - webpack.dev.conf----wabpack开发环境配置
    - webpack.prod.conf----
- config----主要存放配置文件，用于区分开发环境、线上环境的不同。
常用到此文件夹下 config.js 配置开发环境的 端口号、是否开启热加载
或者设置生产环境的静态资源相对路径、是否开启gzip压缩、
npm run build 命令打包生成静态资源的名称和路径等。
    - dev.env----开发环境变量
    - index---- 项目配置文件
    - prod.env---- 生产环境变量
- dist----默认 npm run build 命令打包生成的静态资源文件，用于生产部署
- node_modules----存放npm命令下载的开发环境和生产环境的依赖包
- src----项目核心文件（我们写代码都放在这个文件夹下）
    - api----放置封装的请求接口
    - assets----经常放置一些静态资源（样式类文件，如css，less,sass,以及一些js文件，会被webpack打包）
    - common----公共资源存放的地方
    - components----一般放置非路由组件或者项目公用的组件
    - layouts----页面的布局
    - mixins----混入（也就是一些公用的方法）
    - mock----模拟的后端数据
    - pages/views----一般放置路由组件和页面组件
    - plugins----放置一些js插件
    - router----配置的路由
    - store----vuex的相关配置
    - utils----存放vue开发过程中一些公共的.js方法。
    - App.vue----唯一的根组件
    - main.js----入口文件（程序最先执行的文件）
- static----静态资源（一般放图片资源，不会被webpack打包）
- test----测试文件目录（unit&e2e）
- babel----babel编译参数
- .editorconfig----代码格式
- .eslintignore----js代码校验规范
- .eslintrc--------js代码校验规范
- .gitignore----git上传需要忽略的文件配置
- .postcssrc----转换css的工具
- index----设置项目主页的的一些meta头信息和提供用于挂载vue节点。
- package.json----看到项目描述、项目依赖、项目运行指令
- package-lock----
- README.md----项目说明文件

## 4.3：脚手架的配置 ##
- 浏览器自动打开
在package.json文件中
"scripts": {
"serve": "vue-cli-service serve --open", 加个open浏览器自动打开
"build": "vue-cli-service build",
"lint": "vue-cli-service lint"
},

- 关闭eslint校验工具
webpack.base.config.js中配置
module.exports = {
    lintOnSave:false,
}

- src文件夹的别名的设置
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

## 4.4:其他配置 ##
- src/pages路径----创建tab组件和四个基本的路由跳转组home,product,cart,my
- 并且使用阿里巴巴字体图标库:https://blog.csdn.net/yuanchangliang/article/details/110664946
- 配置rem布局：https://www.jianshu.com/p/79be33f2ce88

## 4.5：配置vuex使用modules模块化 ##
- 在src/store中配置

## 4.6：二次封装axios ##
- https://www.jianshu.com/p/1727f133b151
- 有很多种方法，有很多种方法，具体可看src/pages/Home/home.vue中轮播图的请求方法

## 常规封装 ##
- 在src/api/mockserver.js中进行二次封装mock的接口
- 在src/api/server.js中进行二次封装真实的接口（真实接口失效了，暂时弃用）
- 将接口文件request.js通过 import {requests} from './api/mockserver.js' 引入到main.js中，并且通过 Vue.prototype.$requests = requests 挂载到vue原型上，可以在页面中通过this.$requests调用
- 
## 接口封装改进：新建src/api/index.js，在里面统一管理接口并且挂载到原型上 ##
- 在api文件夹内新建index.js统一管理接口，先通过 import {reqGetBannerList} from '../../api/index.js' 在src/pages/Home/home.vue引入统一管理的接口，然后使用
- 将统一管理的接口通过 import * as api from './api/index' 以api对象的形式引入到main.js，然后通过Vue.prototype.$api = api // 挂载到vue原型上，可以在页面中通过this.$api调用



## 4.7：进行跨域配置 ##
- 配置proxyTable----config/index.js目录中配置
- 跨域详解：baseurl直接写成http://39.98.123.211进行请求数据会造成跨域，请求不到。
所以把接口换成api请求中间服务器target里面的接口

## 4.8：用mockjs模拟轮播图数据 ##
- src/mock/banner.json这里存放轮播图数据
- src/mock/mock.js这里开启mock服务,配置mock后端的相关接口，最后要在main.js中引入

## 4.9：用使用vant-ui的swiper模块实现轮播 ##

# 五：页面开发 #

## 5.1：我的页面实现登陆注册 ##
- src/pages/My/childen文件夹中登录注册组件

## 5.2：由于真实接口失效了，所以用mockjs模拟验证码 ##
- 别忘了在入口文件main.js中引入mock：https://www.cnblogs.com/guozongzhang/p/10722691.html
- 使用 npm install mockjs安装mock，mock文件夹就相当于后端，里面定义一些后端接口和数据模板

## 5.3：用mockjs模拟注册，使用了vuex ##
- 在 src/pages/My/children/register.vue 中进行派发注册事件，传递phone,password等等
- 在 src/store/modules/user.js 中把手机号，密码等等进行存储

## 5.4：token验证 ##
- https://www.cnblogs.com/web-record/p/9876916.html
- 用mockjs模拟登录，随机生成了token，使用了vuex（暂时存储，刷新数据会消失），和localstorage（永久存储，刷新数据不会消失）进行存储token，localstorage的值可以在浏览器 f12-应用-本地存储空间 中查看
- 在src/store/modules/user.js中把token，用户名和密码等等进行存储

## 5.5：从服务器获取用户信息，展示在首页 ##
- 在home.vue组件编写，再次请求时需要带上token，

## 5.6：退出登录 ##
- 点击退出登录，清除token，清除用户信息。
- 同样在：src/pages/Home/home.vue中编写

## 5.7：使用导航守卫 ##
- 全局守卫，路由独享，组件级别
-进行页面跳转时验证token（有token说明已经登录，没有说明没登录，则跳转到登录页）
- 全局导航守卫：已经登陆了则浏览器中输入登录的地址不能跳转到登录页了
- 路由独享守卫：组件之间的跳转

## 5.8:交易结算页面开发 ##
- 使用async和await函数
- 点击购物车组件（cart）跳转到（trade）组件
- 

## 5.9:购物车商品列表开发 ##

## 5.10:跳转到商品详情页开发 ##











