// src/components/flow/ProcessNode.tsx
import { NodeProps, Handle, Position } from 'reactflow';
import { ProcessNodeData } from './types';
import { Icon } from 'your-icon-library'; // adjust as needed

export function ProcessNode({ data, selected }: NodeProps<ProcessNodeData, string>) {
  return (
    <div className={`p-4 rounded-lg shadow ${data.bgClass} ${selected ? 'ring-2 ring-blue-500' : ''}`}>
      <Handle type="target" position={Position.Left} id="in" />
      <div className="flex items-center">
        <Icon name={data.iconName} className={`text-${data.color}`} />
        <div className="ml-2">
          <h5>{data.label}</h5>
          <p>{data.subtitle}</p>
        </div>
      </div>
      <Handle type="source" position={Position.Right} id="out" />
    </div>
  );
}
