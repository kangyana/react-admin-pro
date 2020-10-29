import { MenuDataItem } from '@ant-design/pro-layout';

export type MenuItemProps = MenuDataItem & { isUrl: boolean };

export type TargetKey = string | MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>
