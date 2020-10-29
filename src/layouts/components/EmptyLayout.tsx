import React from 'react';
import { useSelector } from 'umi';
import { NAMESPACE, LayoutState } from '@/models/layout';

const EmptyLayout: React.FC = () => {
  const { panes } = useSelector((state: LayoutState) => state[NAMESPACE]);

  const EmptyContent = () => (
    <div style={{ textAlign: 'center', height: '800px' }}>
      <h1 style={{ color: '#888', fontSize: '48px' }}>工作台</h1>
      <p style={{ color: '#888', fontSize: '28px' }}>
        请点击上方菜单栏开启工作页
      </p>
    </div>
  );

  return (panes.length === 0 && <EmptyContent />) || <></>;
};

export default EmptyLayout;
