/* eslint-disable max-classes-per-file */
import React from 'react';
import { Tabs } from 'antd';
import { DndProvider, DragSource, DropTarget } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TabsProps } from 'antd/lib/tabs';
import { DropTargetMonitor } from 'react-dnd/lib/interfaces';
import {
  Props,
  TabList,
  Tab,
  DropProps,
  beginDragProps,
  TabNodeProps,
} from './data.d';

// Drag & Drop node
class TabNode extends React.Component<TabNodeProps> {
  render() {
    const { connectDragSource, connectDropTarget, children } = this.props;

    return connectDragSource(connectDropTarget(children));
  }
}

const cardTarget = {
  drop(props: DropProps, monitor: DropTargetMonitor) {
    const dragKey = monitor.getItem().index;
    const hoverKey = props.index;

    if (dragKey === hoverKey) {
      return;
    }

    props.moveTabNode(dragKey, hoverKey);
    // eslint-disable-next-line no-param-reassign
    monitor.getItem().index = hoverKey;
  },
};

const cardSource = {
  beginDrag(props: beginDragProps) {
    return {
      id: props.id,
      index: props.index,
    };
  },
};

const WrapTabNode = DropTarget('DND_NODE', cardTarget, (connect) => ({
  connectDropTarget: connect.dropTarget(),
}))(
  DragSource('DND_NODE', cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }))(TabNode),
);

class DraggableTabs extends React.Component<Props> {
  state = {
    order: [],
  };

  moveTabNode = (dragKey: never, hoverKey: never) => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const newOrder = this.state.order.slice();
    const { children } = this.props;

    React.Children.forEach(children, (c: Tab) => {
      if (newOrder.indexOf(c.key) === -1) {
        newOrder.push(c.key);
      }
    });

    const dragIndex = newOrder.indexOf(dragKey);
    const hoverIndex = newOrder.indexOf(hoverKey);

    newOrder.splice(dragIndex, 1);
    newOrder.splice(hoverIndex, 0, dragKey);

    this.setState({
      order: newOrder,
    });
  };

  renderTabBar = (
    props: TabsProps,
    DefaultTabBar: React.ComponentType<TabsProps>,
  ) => (
    <DefaultTabBar {...props}>
      {(node: { key: string }) => (
        <WrapTabNode
          key={node.key}
          index={node.key}
          moveTabNode={this.moveTabNode}
        >
          {node}
        </WrapTabNode>
      )}
    </DefaultTabBar>
  );

  render() {
    const { order } = this.state;
    const { children } = this.props;

    const tabs: TabList = [];
    React.Children.forEach(children, (c) => {
      tabs.push(c);
    });

    const orderTabs = tabs.slice().sort((a: Tab, b: Tab) => {
      const orderA = order.indexOf(a.key);
      const orderB = order.indexOf(b.key);

      if (orderA !== -1 && orderB !== -1) {
        return orderA - orderB;
      }
      if (orderA !== -1) {
        return -1;
      }
      if (orderB !== -1) {
        return 1;
      }

      const ia = tabs.indexOf(a);
      const ib = tabs.indexOf(b);

      return ia - ib;
    });

    return (
      <DndProvider backend={HTML5Backend}>
        <Tabs renderTabBar={this.renderTabBar} {...this.props}>
          {orderTabs}
        </Tabs>
      </DndProvider>
    );
  }
}

export default DraggableTabs;
