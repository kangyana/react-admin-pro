import React from 'react';
import { Row, Col } from 'antd';
import moment from 'moment';
import * as styles from '../base.less';
import { Efficiency } from '../data.d';

interface Props {
  efficiency: Efficiency;
}

interface StepDiffTextProps {
  text: String;
  time: String;
  compare: String;
}

interface StepTextProps {
  time: String;
  compare: String;
}

const hourTimestamp = 60 * 60 * 1000; // 一小时转换时间戳

const TimeStep: React.FC<Props> = (props: Props) => {
  const { efficiency } = props;
  const {
    import_ship,
    import_sign,
    ship_collect,
    collect_sign,
    import_collect,
    ship_sign,
    import_ship_compare,
    import_sign_compare,
    ship_collect_compare,
    collect_sign_compare,
    import_collect_compare,
    ship_sign_compare,
  } = efficiency;

  const timeText = (time: String) =>
    time ? moment(Number(time) * hourTimestamp).format('hh时mm分') : '--时--分';

  const compareText = (compare: String) => {
    if (!compare) return '--';
    return compare[0] === '-'
      ? `下降了${compare.substr(1)}`
      : `上涨了${compare}`;
  };

  const StepText = (p: StepTextProps) => {
    const { time, compare } = p;
    return (
      <>
        <div className={styles.step_time}>{timeText(time)}</div>
        <div>较前30天{compareText(compare)}</div>
      </>
    );
  };

  const StepDiffText = (p: StepDiffTextProps) => {
    const { text, time, compare } = p;
    return (
      <div className={styles.step_diff_text}>
        {text}：<span className={styles.step_diff_time}>{timeText(time)}</span>
        <span>较前30天{compareText(compare)}</span>
      </div>
    );
  };

  return (
    <div className={styles.time_step}>
      <Row>
        <Col
          flex="32px"
          className={`${styles.step_title} ${styles.step_title1}`}
        >
          导入
        </Col>
        <Col
          flex={1}
          className={`${styles.step_content} ${styles.step_content1}`}
        >
          <StepText time={import_ship} compare={import_ship_compare} />
        </Col>
        <Col
          flex="32px"
          className={`${styles.step_title} ${styles.step_title2}`}
        >
          发货
        </Col>
        <Col
          flex={1}
          className={`${styles.step_content} ${styles.step_content2}`}
        >
          <StepText time={ship_collect} compare={ship_collect_compare} />
        </Col>
        <Col
          flex="32px"
          className={`${styles.step_title} ${styles.step_title3}`}
        >
          揽收
        </Col>
        <Col
          flex={1}
          className={`${styles.step_content} ${styles.step_content3}`}
        >
          <StepText time={collect_sign} compare={collect_sign_compare} />
        </Col>
        <Col
          flex="32px"
          className={`${styles.step_title} ${styles.step_title4}`}
        >
          签收
        </Col>
      </Row>
      <Row className={styles.step_diff}>
        <Col flex="2" className={styles.step_diff_item}>
          <StepDiffText
            text="导入-揽收"
            time={import_collect}
            compare={import_collect_compare}
          />
        </Col>
        <Col flex="1" className={styles.right_border} />
      </Row>
      <Row className={styles.step_diff}>
        <Col flex="1" className={styles.left_border} />
        <Col flex="2" className={styles.step_diff_item}>
          <StepDiffText
            text="发货-签收"
            time={ship_sign}
            compare={ship_sign_compare}
          />
        </Col>
      </Row>
      <Row className={styles.step_diff}>
        <Col flex={1} className={styles.step_diff_item}>
          <StepDiffText
            text="导入-签收"
            time={import_sign}
            compare={import_sign_compare}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TimeStep;
