
import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';
import { DiamondNodeData } from './types';

const DiamondNode = memo(({ data }: NodeProps<{data: DiamondNodeData}>) => {
  return (
    <div className="react-flow__node-diamond">
      <Handle type="target" position={Position.Top} />
      <div className="diamond-content">
        <div>{data?.label || ''}</div>
        {data?.subtitle && <small>{data.subtitle}</small>}
        {data?.branchId && <small className="branch-id">{data.branchId}</small>}
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
});

export default DiamondNode;
