
import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';

const StartNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-sm font-medium mb-2">{data.label}</div>
      <div className="w-5 h-5 bg-black rounded-full"></div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default memo(StartNode);
