
// src/components/flow/StartNode.tsx
import React from 'react';
import { NodeProps, Handle, Position } from '@xyflow/react';
import { StartNodeData } from './types';

export function StartNode({ data, selected }: NodeProps<{ label: string; }>) {
  return (
    <div className={`p-3 rounded-full flex items-center justify-center ${selected ? 'ring-2 ring-blue-500' : 'border-2 border-black'}`}>
      <div className="w-4 h-4 bg-black rounded-full"></div>
      <div className="absolute -top-6 font-semibold text-sm">{data?.label || ''}</div>
      <Handle type="source" position={Position.Bottom} id="start" className="!bg-black w-3 h-3" />
    </div>
  );
}

export default React.memo(StartNode);
