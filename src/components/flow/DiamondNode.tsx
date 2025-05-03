
import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';

// Define the type for the data property specifically
interface DiamondNodeData {
  label?: string;
  subtitle?: string;
}

const DiamondNode = memo(({ data }: NodeProps<DiamondNodeData>) => {
  return (
    <div className="react-flow__node-diamond">
      <Handle type="target" position={Position.Top} />
      <div className="diamond-content">
        <div>{data?.label || ''}</div>
        <small>{data?.subtitle || ''}</small>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
});

export default DiamondNode;
