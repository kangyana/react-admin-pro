/* eslint no-useless-escape:0 import/prefer-default-export:0 */
import { message } from 'antd';

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

export const isAntDesignPro = (): boolean => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }
  return window.location.hostname === 'preview.pro.ant.design';
};

// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
export const isAntDesignProOrDev = (): boolean => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    return true;
  }
  return isAntDesignPro();
};
/**
 *复制文本
 * @param {string} text
 */
export function copyToClipboard(text: string): void {
  const result = navigator.clipboard.writeText(text);
  result
    .then(() => {
      message.success('复制成功');
    })
    .catch(() => {
      message.error('复制失败');
    });
}
/**
 * 平铺数组
 * @param {array} arr
 */
export function flatten(arr: any[]): any[] {
  return arr.reduce(
    (result: [], item: any) =>
      result.concat(Array.isArray(item.routes) ? flatten(item.routes) : item),
    [],
  );
}
