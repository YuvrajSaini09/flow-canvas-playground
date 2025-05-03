// src/components/flow/DiamondNode.tsx
import { NodeProps, Handle, Position } from 'reactflow';
import { DiamondNodeData } from './types';

export function DiamondNode({ data, selected }: NodeProps<DiamondNodeData, string>) {
  return (
    <div className={selected ? 'ring-2 ring-blue-500' : ''}>
      <Handle type="target" position={Position.Top} id="top" />
      <div className="p-4 transform rotate-45 bg-white border shadow">
        <div className="rotate-[-45deg]">
          <h4>{data.label}</h4>
          <small>{data.subtitle}</small>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} id="bottom" />
    </div>
  );
}
