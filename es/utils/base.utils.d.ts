/**
 * 深度复制（采用JSON解析方式）
 * @param obj 复制对象
 */
export declare const deepCopyJSON: <T>(obj: T) => T;
/**
   * 深度复制（采用递归式）
   * @param obj 复制对象
   */
export declare function deepCopy<T>(obj: T): T;
/** 创建GUID */
export declare function createGuid(): string;
/**
 * 创建指定范围的随机整数
 * @param minInt 最小整数
 * @param maxInt 最大整数
 */
export declare function createIntRandom(minInt: number, maxInt: number): number;
/** 判断网页是否通过移动端设备打开 */
export declare function isFromMobileBrowser(): boolean;
/**
 * 复制文本
 * @param text 文本
 */
export declare function copyText(text: string): Promise<string>;
/**
 * 随机获取数组的其中一个子集
 * @param arr 数组
 */
export declare function getArrayItemRandom<T>(arr: T[]): T;
/**
 * 加载css
 * @param cssUrl CSS路径
 */
export declare function loadCss(cssUrl: string): void;
/**
 * 加载js
 * @param jsUrl JS路径
 */
export declare function loadJs(jsUrl: string): void;
/**
 * 对象扩展（JQuery $.extend 实现代码）
 * @param _ 深度复制
 * @param sourceObj 源对象
 * @param targetObj 目标对象
 */
export declare function $extend<T>(_deep: boolean, sourceObj: T, targetObj: T): T;
/**
 * 防抖
 * （当持续触发事件时，
 * 一定时间段内没有再触发事件，
 * 事件处理函数才会执行一次，
 * 如果设定的时间到来之前，
 * 又一次触发了事件，
 * 就重新开始延时）
 * @param fn 函数
 * @param wait 延时毫秒数
 * @param immediate 是否立即执行
 */
export declare function debounce<T extends Function>(fn: T, wait: number, immediate?: boolean): (T & {
    cancle(): void;
}) | null;
/**
 * 节流
 * （当持续触发事件时，
 * 保证一定时间段内只调用一次事件处理函数）
 * @param fn 函数
 * @param wait 间隔毫秒数
 * @param options 配置项
 */
export declare function throttle<T extends Function>(fn: T, wait: number, options?: {
    leading: boolean;
    trailing: boolean;
}): (T & {
    cancle(): void;
}) | null;
/**
 * 列表转树形结构
 * @param list 列表数组
 * @param options 配置项
 * @returns 树形结构数组
 */
export declare function listToTree<T>(list: T[], options?: {
    idField?: string;
    parentIdField?: string;
    checkParentIdCallback?: (parentId: string) => boolean;
}): Array<T & {
    children?: T[];
}>;
/**
 * 解析列表
 * @param list 列表
 * @param parseFields 解析字段集
 * @returns 解析结果列表
 */
export declare function parseListField<K, T>(list: T[], parseFields: [keyof T, keyof K][]): K[];
export declare function whenRightReturn<T>(time: number, intervalCallback: () => T | undefined): Promise<T>;
/**
 * 判断是否为Promise对象
 * @param obj 对象
 * @returns 判断结果
 */
export declare function isPromise<T>(obj: T): boolean;
export declare function isNullOrUndefined<T>(obj: T): boolean;
