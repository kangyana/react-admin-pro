import { Reducer } from 'umi';
import { TabItem } from './data.d'

export const NAMESPACE = 'layout';

export interface LayoutState {
  panes: TabItem[];
  activeKey: string;
}

export interface LayoutModelType {
  namespace: string;
  state: LayoutState;
  reducers: {
    setState: Reducer<LayoutState>;
  };
}

const LayoutModel: LayoutModelType = {
  namespace: NAMESPACE,
  state: {
    panes: [],
    activeKey: '',
  },
  reducers: {
    setState(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    }
  },
};
export default LayoutModel;
