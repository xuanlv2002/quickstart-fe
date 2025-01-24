// api/user.js
import request from '@/utils/request'

/**
 * 用户登录接口
 * @param {Object} data - 登录参数
 * @param {string} data.username - 用户名
 * @param {string} data.password - 密码
 * @returns {Promise} 包含登录结果的 Promise 对象
 */
export function login(data) {
    return request.post('/api/login', data)
}

/**
 * 获取列表数据接口
 * @param {Object} params - 查询参数
 * @param {number} params.page - 当前页码
 * @param {number} params.limit - 每页数量
 * @returns {Promise} 包含列表数据的 Promise 对象
 */
export function getList(params) {
    return request.get('/api/list', { params })
}

