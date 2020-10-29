import React from 'react';
import { Card } from 'antd';
import { useDispatch } from 'dva';
import * as styles from '../base.less';
import CardTitle from './CardTitle';
import TimeStep from './TimeStep';
import RefreshBtn from './RefreshBtn';
import { NAMESPACE } from '../model';
import { Efficiency } from '../data.d';

interface Props {
  title: string;
  efficiency: Efficiency;
}

const EfficiencyCard: React.FC<Props> = (props: Props) => {
  const { title, efficiency } = props;
  const dispatch = useDispatch();
  // 刷新数据
  const refreshhandle = () => {
    dispatch({
      type: `${NAMESPACE}/setState`,
      payload: { refreshEfficiency: new Date().getTime() },
    });
  };

  return (
    <Card
      className={styles.data_card}
      title={<CardTitle title={title} />}
      extra={<RefreshBtn onClick={refreshhandle} />}
      bodyStyle={{ padding: '16px 24px', flex: 1 }}
    >
      <TimeStep efficiency={efficiency} />
    </Card>
  );
};

export default EfficiencyCard;
