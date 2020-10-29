import React, { useMemo } from 'react';
import { Table, Card, Button } from 'antd';
import { TablePaginationConfig } from 'antd/lib/table/interface';
import { PAGE_SIZE_OPTIONS } from '@/constants';
import { useDispatch } from 'dva';
import { copyToClipboard } from '@/utils/utils';
import { Statistics } from '../data.d';
import { StatisticsColumns } from './tableProps';
import CardTitle from './CardTitle';
import RefreshBtn from './RefreshBtn';
import * as styles from '../base.less';
import { NAMESPACE } from '../model';

interface Props {
  datasource: Statistics[];
  title: string;
  loading: boolean;
  total: number;
  pageSize: number;
  page: number;
  updatePage: (_page: number, _pageSize: number) => void;
}

const StatisticsTable: React.FC<Props> = (props: Props) => {
  const {
    title,
    datasource,
    loading,
    total,
    pageSize,
    page,
    updatePage,
  } = props;
  const dispatch = useDispatch();

  // 刷新数据
  const refreshhandle = () => {
    dispatch({
      type: `${NAMESPACE}/setState`,
      payload: { refreshStatistics: new Date().getTime() },
    });
  };

  const pagination: TablePaginationConfig = useMemo(
    () => ({
      current: page,
      pageSize,
      total,
      showTotal(_total) {
        return <span>总计{_total}条数据</span>;
      },
      showSizeChanger: true,
      pageSizeOptions: PAGE_SIZE_OPTIONS,
      onChange(_page, _pageSize) {
        updatePage(_page, _pageSize || 10);
      },
      onShowSizeChange(current, _pageSize) {
        updatePage(1, _pageSize);
      },
    }),
    [page, pageSize, total, updatePage],
  );
  // 复制全部发货单号
  const copyAllSn = () => {
    const str = datasource.map(v => v.ship_code).join(',');
    copyToClipboard(str);
  };

  return (
    <div>
      <Card
        title={<CardTitle title={title} />}
        extra={<RefreshBtn onClick={refreshhandle} />}
        bodyStyle={{ padding: '16px 24px' }}
      >
        <Table
          dataSource={datasource}
          loading={loading}
          bordered
          scroll={{ y: '257px' }}
          columns={StatisticsColumns}
          pagination={pagination}
          size="small"
          rowKey={item => item.ship_id}
        />
        <div className={styles.btn_warp}>
          <Button type="primary" onClick={copyAllSn}>
            一键复制发货单号
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default StatisticsTable;
