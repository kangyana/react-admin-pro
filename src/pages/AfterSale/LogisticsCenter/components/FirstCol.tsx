import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Spin } from 'antd';
import { useSelector } from 'dva';
import OperButton from './OperButton';
import StatisticsTable from './StatisticsTable';
import EfficiencyCard from './EfficiencyCard';
import * as styles from '../base.less';
import { getEfficiency, getStatistics } from '../service';
import { BtnInfo, Statistics } from '../data.d';
import { NAMESPACE, ModelState } from '../model';

const initEfficiency = {
  import_ship: '',
  import_sign: '',
  ship_collect: '',
  collect_sign: '',
  import_collect: '',
  ship_sign: '',
  import_ship_compare: '',
  import_sign_compare: '',
  ship_collect_compare: '',
  collect_sign_compare: '',
  import_collect_compare: '',
  ship_sign_compare: '',
};

const initBtns = [
  {
    title: '24小时未发货',
    icon: 'unship24',
    styles: styles.import_no_check,
    name: 'unship24',
    total: 0,
    unit: '单',
  },
  {
    title: '36小时未发货',
    icon: 'unship36',
    styles: styles.send_no_collect,
    name: 'unship36',
    total: 0,
    unit: '单',
  },
  {
    title: '48小时未发货',
    icon: 'unship48',
    styles: styles.collect_no_logistics,
    name: 'unship48',
    total: 0,
    unit: '单',
  },
  {
    title: '30天物流异常率',
    icon: 'except30_rate',
    styles: styles.out_time,
    name: 'except30_rate',
    total: 0,
    unit: '%',
  },
  {
    title: '24小时发货异常率',
    icon: 'unship24_rate',
    styles: styles.no_sign,
    name: 'unship24_rate',
    total: 0,
    unit: '%',
  },
  {
    title: '48小时发货异常率',
    icon: 'unship48_rate',
    styles: styles.refund,
    name: 'unship48_rate',
    total: 0,
    unit: '%',
  },
];

const FirstCol: React.FC = () => {
  const { refreshStatistics, refreshEfficiency } = useSelector(
    (state: ModelState) => state[NAMESPACE],
  );
  const [title] = useState('订单时效数据(近30天)');
  const [btnType, setBtnType] = useState('');
  const [loading, setLoading] = useState(false);
  const [btnsLoading, setBtnsLoading] = useState(false);
  const [pageSize, setPagesize] = useState(10);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [efficiency, setEfficiency] = useState(initEfficiency);
  const [statistics, setStatistics] = useState<Statistics[]>([]);
  const [btnListInfo, setBtnListInfo] = useState<BtnInfo[]>(initBtns);
  // 更新数据表页脚
  const updatePage = (_page: number, _pageSize: number) => {
    setPage(_page);
    setPagesize(_pageSize);
  };
  // 获取订单时效数据
  const getEfficiencyData = useCallback(() => {
    setLoading(true);
    getEfficiency()
      .then(res => {
        setEfficiency(res.response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // 获取数据统计数量
  const getStatisticsCount = () => {
    setBtnsLoading(true);
    const params = { is_count: 'y' };
    getStatistics(params)
      .then(res => {
        const btns = btnListInfo.map(v => ({
          ...v,
          total: Math.round(res.response[v.name] * 100) / 100,
        }));
        setBtnListInfo(btns);
      })
      .finally(() => {
        setBtnsLoading(false);
      });
  };
  // 获取数据统计列表
  const getStatisticList = useCallback(
    (_page: number = 1) => {
      if (!btnType) return;
      setLoading(true);
      const params = {
        page: String(_page),
        type: btnType,
        pagesize: String(pageSize),
      };
      getStatistics(params)
        .then(res => {
          setStatistics(res.response.data || []);
          setTotal(Number(res.response.total) || 0);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [pageSize, btnType],
  );

  useEffect(() => {
    getStatisticList(page);
  }, [btnType, pageSize, page, refreshStatistics, getStatisticList]);

  useEffect(() => {
    getStatisticsCount();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getEfficiencyData();
  }, [refreshEfficiency, getEfficiencyData]);

  return (
    <Row gutter={24}>
      <Col span={16}>
        {btnType ? (
          <StatisticsTable
            title={title}
            datasource={statistics}
            loading={loading}
            total={total}
            page={page}
            pageSize={pageSize}
            updatePage={updatePage}
          />
        ) : (
          <EfficiencyCard title={title} efficiency={efficiency} />
        )}
      </Col>
      <Col span={8}>
        {btnsLoading ? (
          <div className={styles.spin_view}>
            <Spin />
          </div>
        ) : (
          <OperButton
            btnListInfo={btnListInfo}
            btnType={btnType}
            setBtnType={setBtnType}
          />
        )}
      </Col>
    </Row>
  );
};
export default FirstCol;
