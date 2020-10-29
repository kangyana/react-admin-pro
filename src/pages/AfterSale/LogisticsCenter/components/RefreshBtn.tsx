import React, { useState } from 'react';
import { RedoOutlined } from '@ant-design/icons';
import * as styles from '../base.less';

interface Props {
  onClick: () => void;
}

const RefreshBtn: React.FC<Props> = (props: Props) => {
  const { onClick } = props;
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
    onClick();
  };

  return (
    <a onClick={handleClick}>
      <RedoOutlined
        className={`${loading ? styles.is_reverse : styles.is_obverse}`}
        style={{ fontSize: '24px' }}
      />
    </a>
  );
};

export default RefreshBtn;
