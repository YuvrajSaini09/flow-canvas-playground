
// src/components/flow/EndNode.tsx
import React from 'react';
import { NodeProps, Handle, Position } from '@xyflow/react';
import { EndNodeData } from './types';

export function EndNode({ data, selected }: NodeProps<{ label: string; }>) {
  return (
    <div className={`p-3 rounded-full flex items-center justify-center ${selected ? 'ring-2 ring-blue-500' : 'border-2 border-gray-200'}`}>
      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
      <Handle type="target" position={Position.Top} id="end" className="!bg-black w-3 h-3" />
    </div>
  );
}

export default React.memo(EndNode);
