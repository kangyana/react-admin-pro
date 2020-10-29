import { PaginationConfig } from 'antd/es/pagination';

export const DEFAULT_PAGINATION: PaginationConfig = {
  showTotal: total => `总计${total}条数据`,
  showSizeChanger: true,
  showQuickJumper: true,
  pageSizeOptions: ['10', '20', '50', '100'],
  pageSize: 50,
};

export const PAGE_SIZE_OPTIONS = ['10', '20', '50', '100', '200', '300'];

export const FlagMap = {
  y: '是',
  n: '否',
};

export const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const DATE_FORMAT = 'YYYY-MM-DD';
