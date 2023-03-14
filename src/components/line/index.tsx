import React, { createElement, useEffect, useState } from 'react';
import { Line as AntVLine, LineConfig } from '@ant-design/plots';

export interface LineProps {
  data?: LineConfig['data'];
  dataUrl?: string;
  xField: string;
  yField: string;
}

const Line: React.FC<LineProps> = ({ xField, yField, data: originData = [], dataUrl }) => {
  const [data, setData] = useState(originData);

  useEffect(() => {
    if (dataUrl) {
      // 如果有http接口，则请求写到data
      setData([]);
    }
  }, [dataUrl]);

  return <AntVLine data={data} xField={xField} yField={yField} />;
};

Line.displayName = 'Line';
export default Line;
