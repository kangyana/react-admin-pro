import React from 'react';
import EmptyLayout from './components/EmptyLayout';
import SettingLayout from './components/SettingLayout';
import TabsLayout from './components/TabsLayout';

const BasicLayout: React.FC = ({ children }) => (
  <div>
    {/* 空白 */}
    <EmptyLayout />
    {/* 设置抽屉 */}
    <SettingLayout />
    {/* 选项卡 */}
    <TabsLayout content={children} />
  </div>
);

export default BasicLayout;
