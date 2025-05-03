
import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';

const EndNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center">
      <Handle type="target" position={Position.Top} />
      <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-gray-400">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default memo(EndNode);
