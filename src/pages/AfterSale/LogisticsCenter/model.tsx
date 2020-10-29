import { Reducer } from 'umi';

export const NAMESPACE = 'LOGISTICS_CENTER';

export type ModelState = {
  refreshStatistics: number;
  refreshEfficiency: number;
};

export interface ModelType {
  namespace: string;
  state: ModelState;
  reducers: {
    setState: Reducer<ModelState>,
  };
}

const Model: ModelType = {
  namespace: NAMESPACE,
  state: {
    refreshStatistics: 0,
    refreshEfficiency: 0,
  },
  reducers: {
    setState(state, action) {
      return {
        ...state,
        ...action.payload
      }
    },
  },
};

export default Model;
