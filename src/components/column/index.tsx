import React, { createElement } from 'react';
import { Column as AntVColumn, ColumnConfig } from '@ant-design/plots';

export interface ColumnProps {
  data: ColumnConfig['data'];
}

const Column: React.FC<ColumnProps> = () => {
  return <AntVColumn data={[]} xField={''} yField={''} />;
};

Column.displayName = 'Column';

export default Column;
