
import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';

// Define the type for the node data
interface DiamondNodeData {
  label?: string;
  subtitle?: string;
}

// Create a custom props type that accepts our data shape
type DiamondNodeProps = NodeProps<DiamondNodeData>;

const DiamondNode = memo(({ data }: DiamondNodeProps) => {
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
