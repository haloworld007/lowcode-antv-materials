import React, { createElement } from 'react';
import { Line as AntVLine, LineConfig } from '@ant-design/plots';

export interface LineProps {
  data: LineConfig['data'];
}

const Line: React.FC<LineProps> = () => {
  return <AntVLine data={[]} />;
};

Line.displayName = 'Line';
export default Line;
