
                        #  xxx管理系统模板(PC版)开发文档 #

# 一：vue项目架构 #

## 1.1：vue项目搭建流程 ##
https://blog.csdn.net/weixin_40760196/article/details/79952652
## 1.2：vue-cli2和vue-cli3区别 ##
- https://segmentfault.com/a/1190000021582356?utm_source=tag-newest
## 1.3：vue-cli3中webpack配置 ##
https://blog.csdn.net/u014440483/article/details/87267160
## 1.4：vue-cli3运行cli2项目 ##
https://www.cnblogs.com/pythoncd/articles/12210091.html


# 二：前端工程化包括 #

## 2.1：技术选型 ##
- vue2.x+vue-cli2.x+vue-router+vuex+sass+element-ui+axios+echarts+mock
- vue中使用sass----https://blog.csdn.net/zhouzuoluo/article/details/81010331
- node与node-sass版本兼容问题----https://www.jianshu.com/p/e28d300a36ed
- vue中使用mock(别忘了在入口文件main.js中引入):
- https://www.cnblogs.com/tzm-001/p/10382534.html
- https://www.cnblogs.com/guozongzhang/p/10722691.html

## 2.2：开发规范 ##
- 目录结构,
- 文件命名规范----components文件夹内用驼峰命名，pages/views文件夹内小写和短横线命名，dom模板中使用组件用短横线和大写。
- 编码规范：eslint(js代码校验)，stylelint（css校验）,prettier（主要用于格式化html部分的代码）,
husky（可以配置git的一些钩子，本文主要用来配置 commit 钩子）,editorconfig (统一编辑器基本配置),
tsconfig(typescript规范)

## 2.3：开发流程的规范 ##
- 使用敏捷，增强开发进度管理和控制
- 应对各项风险，需求变更等
- code review 机制
- UAT（用户验收测试） 提升发布的需求的质量

## 2.4：前后端接口规范，其他文档规范 ##

## 2.5：打包规范 ##
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

## 2.6：单元测试 ##
- https://juejin.cn/post/6844904051449036808
- https://juejin.cn/post/6844904196244766728
- 使用jest进行单元测试，提高代码的可测试性，引入单元测试，提高代码质量

## 2.7：通过使用各种自动化的工程工具，提升整个开发、部署效率 ##
- 比如gulp

## 2.8：性能优化 ##
- css到js，线上，测试工具，性能监控工具，性能的指标。


# 三：项目功能介绍 #
- 登录  用户名密码/手机号验证码
- 权限  
- 动态路由
- echarts各种图表
- arcgis地图
- 克里金插值分析图
- 全景图
- 富文本
- Markdown
- 错误页面 403 404 500
- 个人设置
- 系统设置
- 更换主题
- 两种布局方式
- 面包屑
- 标签页
- webSocket 
- svg图标
- 全屏
- 返回顶部
- webpack优化
- 抽奖页
- table表
- form表单
- 上传Excel
- 上传头像和裁剪
- htmlcanvas2截屏
- 封装自定义loading


# 四：项目开发流程 #

## 4.1：安装包和目录配置 ##
- 安装各种需要的包：sass+element-ui+axiox+echarts+mock等等
- 配置项目的基本目录：router,mock,store,pages，layout等等


## 4.2：文件目录说明  ##
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
- mock----模拟的后端数据
- node_modules----存放npm命令下载的开发环境和生产环境的依赖包
- src----项目核心文件（我们写代码都放在这个文件夹下）
    - api----放置封装的请求接口
    - assets----经常放置一些静态资源（样式类文件，如css，less,sass,以及一些js文件，会被webpack打包）
    - common----公共资源存放的地方
    - components----一般放置非路由组件或者项目公用的组件
    - layouts----页面的布局
    - mixins----混入（也就是一些公用的方法）
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
    - 在package.json文件中
"scripts": {
"serve": "vue-cli-service serve --open", 加个open浏览器自动打开
"build": "vue-cli-service build",
"lint": "vue-cli-service lint"
},
- 关闭eslint校验工具
    - webpack.base.config.js中配置
module.exports = {
    lintOnSave:false,
}
- src文件夹的别名的设置
    - 因为项目大的时候src（源代码文件夹）：里面目录会很多，
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

## 4.4：其他常规配置 ##
- 配置路由----src/router/index.js
- vuex的配置---src/store
- axios的二次封装----src/utils/request.js
    - 请求进度条noprogress：https://www.cnblogs.com/CGWTQ/p/12357047.html
    - 不同的环境（开发，测试，生产）配置baseUrl
    - 1：Vue-cli2: https://blog.csdn.net/qq_41348029/article/details/84133983
    - 2：Vue-cli3和vue-cli4: http://t.zoukankan.com/ddqyc-p-15428194.html
   
- 统一管理接口----src/api/index.js
- mock进行数据模拟----mock
- 清除标签边距，样式等等----src/common/css/base.css（别忘了在入口文件中引入）
- 用sass配置变量，混合器，嵌套-----
- vue中使用sass----https://blog.csdn.net/zhouzuoluo/article/details/81010331
- node与node-sass版本兼容问题----https://www.jianshu.com/p/e28d300a36ed
- 编码规范prettier配置----https://www.cnblogs.com/maxiag/p/13056446.html
- 编码规范eslint配置----https://blog.csdn.net/weixin_38606332/article/details/80864381



# 五：项目页面开发 #
## 5.1：创建login.vue(登录) ##
- login.vue----src/pages/login
    - 按需引入element
- 在actions.js中开发登录，获取用户信息模块
    - 获取用户信息模块----处理菜单权限和按钮权限
        - 菜单权限(不同的用户能观看操作的菜单是不同的)：常用的方法有两种(菜单，路由完全由后端返回和后端只返回菜单。本项目采用的是后端只返回菜单，然后在前端对异步路由进行过滤)
            - 存在bug：
                - 这里我在通过addRoutes添加路由时，遇到一个bug，当切换角色时，并不能删除之前添加动态路由，导致权限低的还能访问没权限的路由：https://www.cnblogs.com/imjtzhang/p/13709166.html
                - 刷新后addRoutes动态添加的信息消失：https://blog.csdn.net/qq_31906983/article/details/88942965?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-8.add_param_isCf&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-8.add_param_isCf
                - 刷新后vuex保存的用户所要展示的路由消失：https://juejin.cn/post/6844903650427404302     https://www.jianshu.com/p/0c8ba161b249
        - 按钮权限(不同的用户有些按钮不可见，有些可见，使用了自定义指令进行鉴权)： 
- 在src/router/index.js中进行导航守卫的判断
## 5.2:创建layouts.vue(首页整体框架) ##
- layouts.vue----src/layouts
    - 创建基本模块：AppMain,NavBar,SideBar,TabsView. 
## 5.3:创建错误页面(error) ##
- error.vue----src/pages/error
## 5.4:路由的配置 ##
- 配置相应的常量路由----src/router/index.js
- 配置异步路由----
- 配置任意路由----

## 5.5:开发首页home.vue模块 ##
- Echarts展示数据----https://juejin.cn/post/6844903830660857869
- 自定义echarts主题----https://blog.csdn.net/weixin_48299611/article/details/121865692 
      - 直接使用把数据写死----src/pages/home/components/CardCharts/CartCharts.vue
      - 调用后端接口返回的数据填充表格----src/pages/home/components/PieCharts/PieCharts.vue（数据填充失败，待解决）
          - https://blog.csdn.net/qq_45018844/article/details/113393943
      - 实现echarts等比缩放,自适应大屏（调用resize方法）
      - 封装Echarts，实现复用----https://juejin.cn/post/6995518429952212999
          - 封装雷达图(使用了props传值)----src/pages/home/components/RadarCharts/RadarCharts.vue
- vue中调用百度地图----src/pages/home/components/BaiMap/BaiMap.vue
      - https://dafrok.github.io/vue-baidu-map/#/zh/start/installation
      - 自定义地图主题
          - https://blog.csdn.net/weixin_41192489/article/details/113033552 
          - https://lbs.baidu.com/customv2/editor/fd1dd2415bdf537eb2e3614e0457053b 
# 5.6：导航栏 #
- src/layouts/components/NavBar/NavBar.vue
    - 动态面包屑
        - https://blog.csdn.net/weixin_51497206/article/details/118599173
    - 汉堡按钮伸缩项（侧边栏展开合并）
    - 展示头像和点击头像退出 

## 5.7:开发权限管理页面 ##
- 用户管理(超级管理员可以在这里增加减少可登录该系统的用户)----
- 角色管理(超级管理员可以在这里增加减少当前登录用户查看的页面和其他的权限，用到了tree组件)
- 菜单管理(超级管理员可以在这里增加减少菜单栏) 

 
## 安装

```
# 克隆项目
git clone https://github.com/biubiubiu01/vue-antd-admin.git
# 进入项目目录
cd hhh-admin
# 安装依赖
npm install
# 本地开发 启动项目
npm run dev
- 
```


### 部署

```
# 打包项目
npm run build
# 单元测试
npm run test:unit
```



