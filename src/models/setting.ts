import { Settings } from '@ant-design/pro-layout';
import { Reducer } from 'umi'
import defaultSettings from '../../config/defaultSettings';

export const NAMESPACE = 'settings';

export interface SettingModelType {
  namespace: string;
  state: Settings;
  reducers: {
    setSetting: Reducer<any>;
  };
}

const updateColorWeak: (colorWeak: boolean) => void = (colorWeak) => {
  const root = document.getElementById('root');
  if (root) {
    root.className = colorWeak ? 'colorWeak' : '';
  }
};

const SettingModel: SettingModelType = {
  namespace: NAMESPACE,
  state: defaultSettings,
  reducers: {
    setSetting(state, action) {
      const { payload } = action
      const { colorWeak, contentWidth } = payload;
      if (state.contentWidth !== contentWidth && window.dispatchEvent) {
        window.dispatchEvent(new Event('resize'));
      }
      updateColorWeak(!!colorWeak);
      return {
        ...state,
        ...payload,
      };
    },
  },
};
export default SettingModel;
