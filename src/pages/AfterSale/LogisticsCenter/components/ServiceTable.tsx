import React from 'react';
import { Table, Card } from 'antd';
import { ServiceColumns } from './tableProps';
import { Service } from '../data.d';
import CardTitle from './CardTitle';

interface Props {
  datasource: Service[];
  loading: boolean;
}

const ServiceTable: React.FC<Props> = (props: Props) => {
  const { datasource, loading } = props;

  return (
    <Card title={<CardTitle title="物流公司服务质量(近30天)" />}>
      <Table
        dataSource={datasource}
        loading={loading}
        bordered
        style={{ height: '420px' }}
        scroll={{ y: datasource.length > 10 ? '380px' : undefined }}
        columns={ServiceColumns}
        pagination={false}
        size="small"
        rowKey={item => item.express_name}
      />
    </Card>
  );
};
export default ServiceTable;
