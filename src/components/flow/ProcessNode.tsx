
import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';

const ProcessNode: React.FC<NodeProps> = ({ data }) => {
  const bgClass = data.bgClass || '';
  
  return (
    <div className={`react-flow__node-process ${bgClass}`}>
      <Handle type="target" position={Position.Top} />
      {data.icon && (
        <div className="node-icon" style={{ color: data.color }}>
          {data.icon}
        </div>
      )}
      <div className="node-title">{data.label}</div>
      {data.subtitle && (
        <div className="node-subtitle">{data.subtitle}</div>
      )}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default memo(ProcessNode);
