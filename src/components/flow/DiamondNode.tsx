
// src/components/flow/DiamondNode.tsx
import React from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';
import { DiamondNodeData } from './types';

export function DiamondNode({ data, selected }: NodeProps<{ label: string; subtitle?: string; branchId?: string; }>) {
  return (
    <div className={selected ? 'ring-2 ring-blue-500' : ''}>
      <Handle type="target" position={Position.Top} id="top" />
      <div className="p-4 transform rotate-45 bg-white border border-gray-300 shadow-md min-w-[80px] min-h-[80px]">
        <div className="rotate-[-45deg] text-center">
          <h4 className="font-semibold text-sm">{data?.label || ''}</h4>
          {data?.subtitle && <small className="text-gray-600 text-xs">{data.subtitle}</small>}
          {data?.branchId && <div className="text-xs text-gray-500 mt-1">Branch-{data.branchId}</div>}
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} id="bottom" />
      <Handle type="source" position={Position.Right} id="right" />
      <Handle type="source" position={Position.Left} id="left" />
    </div>
  );
}

export default React.memo(DiamondNode);
