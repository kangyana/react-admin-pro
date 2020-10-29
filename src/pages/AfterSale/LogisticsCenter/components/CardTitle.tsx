import React, { useState } from 'react';
import moment from 'moment';
import * as styles from '../base.less';

interface Props {
  title: string;
}

const CardTitle: React.FC<Props> = (props: Props) => {
  const { title } = props;
  const [updatedDate] = useState(moment().format('更新于MM-DD'));

  return (
    <div>
      <span>{title}</span>
      <span className={styles.card_date}>{updatedDate}</span>
    </div>
  );
};

export default CardTitle;
