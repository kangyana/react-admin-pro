import { Tooltip, Tag, Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight: React.FC<{}> = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="umi ui"
        options={[
          {
            label: <a href="https://zh-hans.reactjs.org/" target="_Blank" rel="noreferrer">react</a>,
            value: 'react',
          },
          {
            label: <a href="https://www.redux.org.cn/" target="_Blank" rel="noreferrer">redux</a>,
            value: 'redux',
          },
          {
            label: <a href="https://redux-saga-in-chinese.js.org/" target="_Blank" rel="noreferrer">redux-saga</a>,
            value: 'redux-saga',
          },
          {
            label: <a href="https://dvajs.com/" target="_Blank" rel="noreferrer">dva</a>,
            value: 'dva',
          },
          {
            label: <a href="https://umijs.org/zh/guide/umi-ui.html" target="_Blank" rel="noreferrer">umi ui</a>,
            value: 'umi ui',
          },
          {
            label: <a href="https://ant-design.gitee.io/index-cn" target="_Blank" rel="noreferrer">Ant Design</a>,
            value: 'Ant Design',
          },
          {
            label: <a href="https://beta-pro.ant.design/index-cn" target="_Blank" rel="noreferrer">Ant Design Pro</a>,
            value: 'Ant Design Pro',
          },
          {
            label: <a href="https://procomponents.ant.design/" target="_Blank" rel="noreferrer">Pro components</a>,
            value: 'Pro components',
          },
          {
            label: <a href="https://protable.ant.design/" target="_Blank" rel="noreferrer">Pro Table</a>,
            value: 'Pro Table',
          },
          {
            label: <a href="https://prolayout.ant.design/" target="_Blank" rel="noreferrer">Pro Layout</a>,
            value: 'Pro Layout',
          },
          {
            label: <a href="https://nextjs.frontendx.cn/" target="_Blank" rel="noreferrer">next</a>,
            value: 'next',
          },
        ]}
        // onSearch={value => {
        //   console.log('input', value);
        // }}
      />
      <Tooltip title="使用文档">
        <span
          className={styles.action}
          onClick={() => {
            window.open('https://beta-pro.ant.design/index-cn', '_blank')
          }}
        >
          <QuestionCircleOutlined />
        </span>
      </Tooltip>
      <Avatar />
      {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )}
      <SelectLang className={styles.action} />
    </Space>
  );
};
export default GlobalHeaderRight;
