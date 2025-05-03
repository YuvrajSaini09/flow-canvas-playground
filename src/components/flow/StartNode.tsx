
import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';

// Define the type for the node data
interface StartNodeData {
  label?: string;
}

// Create a custom props type that accepts our data shape
type StartNodeProps = NodeProps<StartNodeData>;

const StartNode = memo(({ data }: StartNodeProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-sm font-medium mb-2">{data?.label || ''}</div>
      <div className="w-5 h-5 bg-black rounded-full"></div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
});

export default StartNode;
