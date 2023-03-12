import React, { createElement } from 'react';
import { Line as AntVLine, LineConfig } from '@ant-design/plots';

const Line: React.FC<LineConfig> = ({ ...config }) => {
  return <AntVLine {...config} />;
};

export type { LineConfig };

export default Line;
