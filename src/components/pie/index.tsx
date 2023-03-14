import React, { createElement } from 'react';
import { Pie as AntVPie, PieConfig } from '@ant-design/plots';

export interface PieProps {
  data: PieConfig['data'];
}

const Pie: React.FC<PieProps> = () => {
  return <AntVPie data={[]} angleField={''} colorField={''} />;
};

Pie.displayName = 'Pie';
export default Pie;
