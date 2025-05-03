// src/components/flow/StartNode.tsx
import { NodeProps, Handle, Position } from 'reactflow';
import { StartNodeData } from './types';

export function StartNode({ data, selected }: NodeProps<StartNodeData, string>) {
  return (
    <div className={`p-4 rounded-full border ${selected ? 'border-blue-500' : ''}`}>
      <Handle type="source" position={Position.Bottom} id="start" />
      <strong>{data.label}</strong>
    </div>
  );
}
