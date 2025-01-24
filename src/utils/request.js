// utils/request.js
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/auth'

// 创建 axios 实例
const service = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // 使用环境变量中的 API 地址
    timeout: 15000, // 请求超时时间
    headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 如果 token 存在，添加到请求头
        const token = getToken()
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        // 自动添加取消令牌
        config.cancelToken = new axios.CancelToken(cancel => {
            window.__axiosCancelList.push(cancel)
        })

        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data

        // 这里根据后端返回的数据结构进行调整
        if (res.code !== 200) {
            // token 过期处理
            if (res.code === 401) {
                ElMessage.error('登录已过期，请重新登录')
                // 这里可以触发退出登录操作
                return Promise.reject(new Error('登录过期'))
            }

            ElMessage.error(res.message || '请求失败')
            return Promise.reject(new Error(res.message || 'Error'))
        }

        return res
    },
    error => {
        // 处理取消请求的特殊情况
        if (axios.isCancel(error)) {
            return Promise.reject(new Error('请求已取消'))
        }

        // 处理 HTTP 状态码
        let message = ''
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    message = '请求参数错误'
                    break
                case 401:
                    message = '未授权，请登录'
                    // 这里可以触发退出登录操作
                    break
                case 403:
                    message = '拒绝访问'
                    break
                case 404:
                    message = '请求资源不存在'
                    break
                case 500:
                    message = '服务器错误'
                    break
                default:
                    message = `连接错误 ${error.response.status}`
            }
        } else if (error.request) {
            message = '服务器无响应'
        } else {
            message = error.message
        }

        ElMessage.error(message)
        return Promise.reject(error)
    }
)

// 封装通用请求方法
const request = (options) => {
    return service(options)
}

// 封装 GET 方法
request.get = (url, params, options = {}) => {
    return service({
        method: 'get',
        url,
        params,
        ...options
    })
}

// 封装 POST 方法
request.post = (url, data, options = {}) => {
    return service({
        method: 'post',
        url,
        data,
        ...options
    })
}

// 封装 PUT 方法
request.put = (url, data, options = {}) => {
    return service({
        method: 'put',
        url,
        data,
        ...options
    })
}

// 封装 DELETE 方法
request.delete = (url, params, options = {}) => {
    return service({
        method: 'delete',
        url,
        params,
        ...options
    })
}

// 取消所有 pending 状态的请求 执行所有的cancel函数 去取消正运行axios
const clearPending = () => {
    window.__axiosCancelList.forEach(cancel => cancel())
    window.__axiosCancelList = []
}

// 初始化取消令牌列表
window.__axiosCancelList = []

export default request