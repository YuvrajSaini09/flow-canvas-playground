// src/components/flow/EndNode.tsx
import { NodeProps, Handle, Position } from 'reactflow';
import { EndNodeData } from './types';

export function EndNode({ data, selected }: NodeProps<EndNodeData, string>) {
  return (
    <div className={`p-4 rounded-full bg-red-100 ${selected ? 'ring-2 ring-red-500' : ''}`}>
      <Handle type="target" position={Position.Top} id="end" />
      <strong>{data.label}</strong>
    </div>
  );
}
