import React from 'react';
import { Table, Card } from 'antd';
import { ProvincesColumns } from './tableProps';
import { Provinces } from '../data.d';
import CardTitle from './CardTitle';

interface Props {
  datasource: Provinces[];
  loading: boolean;
}

const ProvincesTable: React.FC<Props> = (props: Props) => {
  const { loading, datasource } = props;

  return (
    <Card title={<CardTitle title="省份时效(近30天)" />}>
      <Table
        dataSource={datasource}
        loading={loading}
        bordered
        style={{ height: '420px' }}
        scroll={{ y: datasource.length > 10 ? '380px' : undefined }}
        columns={ProvincesColumns}
        pagination={false}
        size="small"
        rowKey={item => item.express_name}
      />
    </Card>
  );
};
export default ProvincesTable;
