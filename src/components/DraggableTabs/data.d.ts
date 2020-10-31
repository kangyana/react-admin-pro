import { TabsProps } from 'antd/lib/tabs';

export interface Props extends TabsProps {
  children: any;
}

export interface Tab {
  key: never;
}

export type TabList = Tab[];

export interface DropProps {
  index: string;
  moveTabNode: (dragKey: string, hoverKey: string) => void;
}

export interface beginDragProps {
  id: string;
  index: string;
}

export interface TabNodeProps {
  connectDragSource: any;
  connectDropTarget: any;
  children: {
    key: string;
  };
  key?: string;
  index?: string;
  moveTabNode?: (dragKey: never, hoverKey: never) => void;
}
