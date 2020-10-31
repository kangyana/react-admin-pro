import React, { useCallback, useEffect } from 'react';
import { Tabs } from 'antd';
import { history, useSelector, useDispatch } from 'umi';
import { NAMESPACE, LayoutState } from '@/models/layout';
import { TabItem } from '@/models/data.d';
import { flatten } from '@/utils/utils';
import DraggableTabs from '@/components/DraggableTabs';
import routes from '../../../config/routes';
import { TargetKey } from '../data.d';

const menuList = flatten(
  routes.find((v) => v.name === 'basicLayout')?.routes || [],
);

const { TabPane } = Tabs;

interface Props {
  content: React.ReactNode;
}

const TabsLayout: React.FC<Props> = (props: Props) => {
  const { content } = props;
  const dispatch = useDispatch();

  const { panes, activeKey } = useSelector(
    (state: LayoutState) => state[NAMESPACE],
  );

  const setState = (payload: any) => {
    dispatch({
      type: `${NAMESPACE}/setState`,
      payload,
    });
  };

  useEffect(() => {
    // 将路由页面添加到tab项中
    const index = panes.findIndex((item: TabItem) => item.key === activeKey);
    if (index === -1) {
      const tabIndex = menuList.findIndex(
        (item: any) => item.path === activeKey,
      );
      if (tabIndex === -1) {
        return;
      }
      const pane = {
        key: activeKey,
        content,
        title: menuList[tabIndex].name,
      };
      setState({ panes: [...panes, pane] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  // tab页切换
  const tabOnChange = (value: string) => {
    setState({ activeKey: value });
    history.push(value);
  };

  // 删除tab页
  const onEdit = useCallback(
    (targetKey: TargetKey, action: string) => {
      if (action === 'remove') {
        let list = panes;
        const index = list.findIndex((item: TabItem) => item.key === targetKey);
        // list.splice(index, 1);
        list = list.filter((v: TabItem, i: number) => i !== index);
        setState({ panes: [...list] });
        if (list.length > index) {
          setState({ activeKey: list[index].key });
        } else if (list.length === index && list.length > 0) {
          setState({ activeKey: list[index - 1].key });
        } else {
          setState({ activeKey: '' });
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [panes],
  );

  return (
    <DraggableTabs
      type="editable-card"
      hideAdd
      onChange={tabOnChange}
      activeKey={activeKey}
      onEdit={onEdit}
      tabBarGutter={0}
      tabBarStyle={{ margin: 0 }}
    >
      {panes.map((pane: TabItem) => (
        <TabPane
          tab={pane.title}
          key={pane.key}
          style={{ backgroundColor: '#fff', paddingTop: '20px' }}
        >
          {pane.content}
        </TabPane>
      ))}
    </DraggableTabs>
  );
};

export default TabsLayout;
