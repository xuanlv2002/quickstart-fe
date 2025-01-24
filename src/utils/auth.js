// utils/auth.js
const TokenKey = import.meta.env.VITE_TOKEN_KEY || 'fallback_token' // 从环境变量获取

export function getToken() {
    return localStorage.getItem(TokenKey)
}

export function setToken(token) {
    return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
    return localStorage.removeItem(TokenKey)
}
