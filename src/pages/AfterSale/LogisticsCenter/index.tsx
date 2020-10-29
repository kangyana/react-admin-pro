import React from 'react';
import FirstCol from './components/FirstCol';
import SecondCol from './components/SecondCol';
import * as styles from './base.less';

const LogisticsCenter: React.FC = () => (
  <div className={styles.container}>
    <FirstCol />
    <SecondCol />
  </div>
);
export default LogisticsCenter;
