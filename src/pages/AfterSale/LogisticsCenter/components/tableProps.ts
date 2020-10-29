import { ColumnProps } from 'antd/es/table';
import { Service, Provinces, Statistics } from '../data.d';

// 服务质量表
export const ServiceColumns: ColumnProps<Service>[] = [
  {
    title: '序号',
    key: 'index',
    width: 70,
    render(_text, _record, index) {
      return index + 1;
    },
  },
  {
    title: '快递公司',
    dataIndex: 'express_name',
  },
  {
    title: '发货到签收（小时）',
    dataIndex: 'ship_sign',
  },
  {
    title: '揽件到签收（小时）',
    dataIndex: 'collect_sign',
  },
  {
    title: '签收率（%）',
    dataIndex: 'sign_rate',
  },
];

// 省份时效表
export const ProvincesColumns: ColumnProps<Provinces>[] = [
  {
    title: '序号',
    key: 'index',
    width: 70,
    render(_text, _record, index) {
      return index + 1;
    },
  },
  {
    title: '省份',
    dataIndex: 'province',
    width: 100,
  },
  {
    title: '快递公司',
    dataIndex: 'express_name',
    width: 100,
  },
  {
    title: '签收时效（小时）',
    dataIndex: 'collect_sign',
    width: 130,
  },
];
// 订单时效表
export const StatisticsColumns: ColumnProps<Statistics>[] = [
  {
    title: '序号',
    key: 'index',
    width: 70,
    render(_text, _record, index) {
      return index + 1;
    },
  },
  {
    title: '发货状态',
    dataIndex: 'status',
    width: 80,
  },
  {
    title: '发货单号',
    dataIndex: 'ship_code',
    width: 150,
  },
  {
    title: '导入时间',
    dataIndex: 'import_time',
    width: 200,
  },
  {
    title: '快递公司',
    key: 'express_name',
    width: 120,
    render(_text, _record) {
      return _record.express?.express_name;
    },
  },
  {
    title: '包装箱型',
    key: 'carton_name',
    width: 150,
    render(_text, _record) {
      return _record.carton?.carton_name;
    },
  },
  {
    title: '超时时长',
    dataIndex: 'diff_time',
    width: 80,
  },
];
