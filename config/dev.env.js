'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT:'"https://easy-mock.com/mock/5b4725c5b9594f7bdfe43aa4"'
})