import React from 'react';
import { Row, Col } from 'antd';
import unship24 from '@/assets/afterSale/unship24.png';
import unship36 from '@/assets/afterSale/unship36.png';
import unship48 from '@/assets/afterSale/unship48.png';
import except30Rate from '@/assets/afterSale/except30_rate.png';
import unship24Rate from '@/assets/afterSale/unship24_rate.png';
import unship48Rate from '@/assets/afterSale/unship48_rate.png';
import * as styles from '../base.less';
import { BtnInfo } from '../data.d';

const iconMap = {
  unship24,
  unship36,
  unship48,
  except30_rate: except30Rate,
  unship24_rate: unship24Rate,
  unship48_rate: unship48Rate,
};

interface Props {
  btnListInfo: BtnInfo[];
  btnType: string;
  setBtnType: (name: string) => void;
}

const OperButton: React.FC<Props> = (props: Props) => {
  const { btnListInfo, btnType, setBtnType } = props;
  const handleClick = (name: string) => {
    const noShowBtns = ['except30_rate', 'unship24_rate', 'unship48_rate'];
    if (noShowBtns.indexOf(name) > -1) {
      setBtnType('');
      return;
    }
    if (name === btnType) {
      setBtnType('');
      return;
    }
    setBtnType(name);
  };
  const setClassName = (name: string) => {
    switch (name) {
      case btnType:
        return styles.is_active;
      default:
        return '';
    }
  };

  return (
    <Row gutter={24}>
      {btnListInfo.map((item: BtnInfo) => (
        <Col
          span={12}
          key={item.name}
          onClick={() => {
            handleClick(item.name);
          }}
        >
          <div className={`${item.styles} ${setClassName(item.name)}`}>
            <div className={styles.icon_title}>
              <span className={styles.icon}>
                <img
                  className={styles.icon_img}
                  src={iconMap[item.icon]}
                  alt=""
                />
              </span>
              <span>{item.title}</span>
            </div>
            <div className={styles.total}>
              <span className={styles.number}>{item.total}</span>
              <span>{item.unit}</span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default OperButton;
