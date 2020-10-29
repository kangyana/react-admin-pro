import React from 'react';
import { useDispatch, useSelector } from 'umi';
import { SettingDrawer, Settings } from '@ant-design/pro-layout';
import { NAMESPACE as settingName } from '@/models/setting';

const SettingLayout: React.FC = () => {
  const defaultSettings = useSelector(
    (state: Settings) => state[settingName],
  );
  const dispatch = useDispatch();

  return (
    <SettingDrawer
    settings={defaultSettings}
    onSettingChange={(newSettings) => {
      dispatch({
        type: `${settingName}/setSetting`,
        payload: newSettings,
      });
    }}
  />
  );
};

export default SettingLayout;
