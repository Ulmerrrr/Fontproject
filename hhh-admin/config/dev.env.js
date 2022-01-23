// 这里是开发环境的相关配置
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 配置生产环境url
  API_ROOT: '"/mock"'
})
