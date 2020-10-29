import { request } from 'umi';
import { StatisticsParmas } from './data.d';

/**
 *获取订单时效
 * @export
 * @param {} params
 * @returns
 */
export async function getEfficiency(): Promise<any> {
  return request('/api/report/logistics/efficiency');
}

/**
 *数据统计数量
 * @export
 * @param {StatisticsParmas} params
 * @returns
 */
export async function getStatistics(params: StatisticsParmas): Promise<any> {
  return request('/api/report/logistics/statistics', {
    params
  });

}

/**
 *服务质量
 * @export
 * @param {} params
 * @returns
 */
export async function getCompany(): Promise<any> {
  return request('/api/report/logistics/company');
}
