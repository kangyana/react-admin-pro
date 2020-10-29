import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col } from 'antd';
import ServiceTable from './ServiceTable';
import ProvincesTable from './ProvincesTable';
import { getCompany } from '../service';

const SecondCol: React.FC = () => {
  const [serviceLoading, setServiceLoading] = useState(false);
  const [provincesLoading, setProvincesLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [provinces, setProvinces] = useState([]);
  // 获取服务质量
  const getCompanys = useCallback(() => {
    setServiceLoading(true);
    setProvincesLoading(true);
    getCompany()
      .then(res => {
        setServices(res.response?.express_service || []);
        setProvinces(res.response?.express_province);
      })
      .finally(() => {
        setServiceLoading(false);
        setProvincesLoading(false);
      });
  }, []);

  useEffect(() => {
    getCompanys();
  }, [getCompanys]);

  return (
    <Row gutter={24} style={{ marginTop: '10px' }}>
      <Col span={16}>
        <ServiceTable datasource={services} loading={serviceLoading} />
      </Col>
      <Col span={8}>
        <ProvincesTable datasource={provinces} loading={provincesLoading} />
      </Col>
    </Row>
  );
};
export default SecondCol;
