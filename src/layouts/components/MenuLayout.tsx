import React from 'react';
import { history, useSelector, useDispatch } from 'umi';
import { message } from 'antd';
import { NAMESPACE, LayoutState } from '@/models/layout';
import { MenuItemProps } from '../data.d';

interface Props {
  menuItemProps: MenuItemProps;
  defaultDom: React.ReactNode;
}

const MenuLayout: React.FC<Props> = (props: Props) => {
  const { menuItemProps, defaultDom } = props;

  const { panes } = useSelector((state: LayoutState) => state[NAMESPACE]);

  const dispatch = useDispatch();

  const navigateTo = (data: MenuItemProps) => {
    if (panes.length > 9) {
      message.error('tab页不能超过10个');
      return;
    }
    dispatch({
      type: `${NAMESPACE}/setState`,
      payload: { activeKey: data.path },
    });
    history.push(data.path);
  };
  return <a onClick={() => navigateTo(menuItemProps)}>{defaultDom}</a>;
};

export default MenuLayout;
