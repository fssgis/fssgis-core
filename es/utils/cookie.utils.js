/*
 * 描述：Cookie工具集
 * 作者：ngheizit on 2021年3月4日
 * 联系方式：xizher@163.com | 198907836@qq.com
 */
const M_SECONDS_A_DAY = 86400000;
const M_SECONDS_A_HOUR = 3600000;
const M_SECONDS_A_MINUTE = 60000;
/** Cookie工具集 */
export const cookieUtils = {
    /**
     * 设置Cookie
     * @param key Cookie Key值
     * @param value Cookie Value值（对象类型会使用JSON解析成字符串）
     * @param options 配置项
     */
    set(key, value, options) {
        const { days, hours, minutes } = options;
        const exp = new Date();
        exp.setTime(exp.getTime() + (days ?? 0 * M_SECONDS_A_DAY) + (hours ?? 0) * M_SECONDS_A_HOUR + (minutes ?? 0) * M_SECONDS_A_MINUTE);
        const _value = typeof value === 'string'
            ? value
            : JSON.stringify(value);
        /* eslint-disable */
        // @ts-ignore: exp.toGMTString()
        const cookie = `${key}=${escape(_value)};expires=${exp.toGMTString()}`;
        /* eslint-enable */
        document.cookie = cookie;
        return this;
    },
    /**
     * 删除Cookie
     * @param key Cookie Key值
     */
    del(key) {
        const exp = new Date();
        /* eslint-disable */
        // @ts-ignore: exp.toGMTString()
        document.cookie = `${key}=;expires=${exp.toGMTString()}`;
        /* eslint-enable */
        return this;
    },
    /**
     * 获取Cookie
     * @param key Cookie Key值
     */
    get(key) {
        const cookie = document.cookie.match(new RegExp(`(^| )${key}=([^;]*)(;|$)`));
        if (cookie) {
            return unescape(cookie[2]);
        }
        else {
            return undefined;
        }
    },
    /**
     * 获取Cookie（结果为经过JSON解析的对象）
     * @param key Cookie Key值
     */
    getUseJSON(key) {
        const cookie = document.cookie.match(new RegExp(`(^| )${key}=([^;]*)(;|$)`));
        if (cookie) {
            return JSON.parse(unescape(cookie[2]));
        }
        else {
            return undefined;
        }
    },
};
export default cookieUtils;
