
import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';
import { Database, FileText, RotateCw, Mail } from 'lucide-react';

// Define the type for the data property specifically
interface ProcessNodeData {
  label?: string;
  subtitle?: string;
  bgClass?: string;
  iconName?: string;
  color?: string;
}

const ProcessNode = memo(({ data }: NodeProps<ProcessNodeData>) => {
  const bgClass = data?.bgClass || '';
  
  // Function to render the appropriate icon based on iconName
  const renderIcon = () => {
    if (!data?.iconName) return null;
    
    switch (data.iconName) {
      case 'RotateCw':
        return <RotateCw />;
      case 'FileText':
        return <FileText />;
      case 'Database':
        return <Database />;
      case 'Mail':
        return <Mail />;
      default:
        return null;
    }
  };
  
  return (
    <div className={`react-flow__node-process ${bgClass}`}>
      <Handle type="target" position={Position.Top} />
      {data?.iconName && (
        <div className="node-icon" style={{ color: data?.color || undefined }}>
          {renderIcon()}
        </div>
      )}
      <div className="node-title">{data?.label || ''}</div>
      {data?.subtitle && (
        <div className="node-subtitle">{data.subtitle}</div>
      )}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
});

export default ProcessNode;
