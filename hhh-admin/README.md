
                                             xxx管理系统模板(PC版)开发文档


# vue项目搭建流程 #
- https://blog.csdn.net/weixin_40760196/article/details/79952652
# vue-cli2和vue-cli3区别： #
- https://segmentfault.com/a/1190000021582356?utm_source=tag-newest
# vue-cli3中webpack配置： #
- https://blog.csdn.net/u014440483/article/details/87267160
# vue-cli3运行cli2项目： #
- https://www.cnblogs.com/pythoncd/articles/12210091.html


# 前端工程化包括： #

1技术选型：
vue2.x+vue-cli2.x+vue-router+vuex+sass+element-ui+axios+echarts+mock
- vue中使用sass----https://blog.csdn.net/zhouzuoluo/article/details/81010331
- node与node-sass版本兼容问题----https://www.jianshu.com/p/e28d300a36ed
- vue中使用mock(别忘了在入口文件main.js中引入):
- https://www.cnblogs.com/tzm-001/p/10382534.html
- https://www.cnblogs.com/guozongzhang/p/10722691.html

2开发规范：
- 目录结构,
- 文件命名规范----components文件夹内用驼峰命名，pages/views文件夹内小写和短横线命名，dom模板中使用组件用短横线和大写。
- 编码规范：eslint(js代码校验)，stylelint（css校验）,prettier（主要用于格式化html部分的代码）,
husky（可以配置git的一些钩子，本文主要用来配置 commit 钩子）,editorconfig (统一编辑器基本配置),
tsconfig(typescript规范)

3开发流程的规范：
- 使用敏捷，增强开发进度管理和控制
- 应对各项风险，需求变更等
- code review 机制
- UAT（用户验收测试） 提升发布的需求的质量

4前后端接口规范，其他文档规范

5打包规范：
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

6单元测试：
- https://juejin.cn/post/6844904051449036808
- https://juejin.cn/post/6844904196244766728
- 使用jest进行单元测试，提高代码的可测试性，引入单元测试，提高代码质量

7通过使用各种自动化的工程工具，提升整个开发、部署效率:
- 比如gulp

8性能优化：
- css到js，线上，测试工具，性能监控工具，性能的指标。


## 功能

```
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
```


## 使用说明
```
- 拥有 admin、test和editor三种权限，每个权限对应的路由和左侧菜单不同；
- 点击个人设置个性化或者右边设置，可以更改页面的设置，如果标签页是否开启，布局方式,主题颜色等；
- 系统管理员拥有所有权限，可以更改用户对应的菜单路由和角色对应的权限。
......
```


## 开发流程

# 一：安装包和目录配置 #
- 安装各种需要的包：sass+element-ui+axiox+echarts+mock等等
- 配置项目的基本目录：router,mock,store,pages，layout等等


# 二：文件目录说明 #
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






-  脚手架的配置
- （一）
浏览器自动打开
在package.json文件中
"scripts": {
"serve": "vue-cli-service serve --open", 加个open浏览器自动打开
"build": "vue-cli-service build",
"lint": "vue-cli-service lint"
},
- （二）
关闭eslint校验工具
webpack.base.config.js中配置
module.exports = {
    lintOnSave:false,
}
- （三）
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

# 三： #
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



# 三：创建login(登录)，layouts(首页整体框架)，错误页面(error) #
# 3.1 #
- login----src/pages/login
    - 3.1.1----按需引入element 
- layouts----src/layouts
- error----src/pages/error
# 3.2 #
配置相应的常量路由----src/router/index.js


 
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



