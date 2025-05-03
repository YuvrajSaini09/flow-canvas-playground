
// src/components/flow/ProcessNode.tsx
import React from 'react';
import { NodeProps, Handle, Position } from '@xyflow/react';
import * as LucideIcons from 'lucide-react';
import { ProcessNodeData } from './types';

export function ProcessNode({ data, selected }: NodeProps<{ 
  label: string; 
  subtitle?: string; 
  bgClass?: string; 
  iconName?: string; 
  color?: string;
  type?: string;
}>) {
  // Safely render the icon from lucide-react
  const renderIcon = () => {
    if (!data?.iconName) return null;
    
    let IconComponent;
    
    // Special case mappings for specific nodes
    if (data.label === 'Execute Robotic Process') {
      IconComponent = LucideIcons.Triangle;
    } else if (data.label === 'Start AI Doc Extraction') {
      IconComponent = LucideIcons.Grid;
    } else if (data.label === 'Update Salesforce via API') {
      IconComponent = LucideIcons.CircleDot;
    } else if (data.label === 'Send Warning Email') {
      IconComponent = LucideIcons.Mail;
    } else if (data.label === 'Send Docusign for Signature') {
      IconComponent = LucideIcons.FileSignature;
    } else {
      // @ts-ignore - Dynamic icon lookup
      IconComponent = LucideIcons[data.iconName];
    }
    
    if (!IconComponent) {
      console.warn(`Icon with name ${data.iconName} not found`);
      return null;
    }
    
    return (
      <div className={`mb-2 ${getIconWrapperClass()}`}>
        <IconComponent className={`w-6 h-6 ${getIconClass()}`} />
      </div>
    );
  };

  // Get icon wrapper class based on node type
  const getIconWrapperClass = () => {
    if (data?.label === 'Execute Robotic Process') {
      return 'p-2';
    } else if (data?.label === 'Start AI Doc Extraction') {
      return 'p-2';
    } else if (data?.label === 'Update Salesforce via API') {
      return 'p-2';
    }
    return '';
  };

  // Get icon class based on node type
  const getIconClass = () => {
    if (data?.color) return `text-${data.color}`;
    
    if (data?.label === 'Execute Robotic Process') {
      return 'text-black';
    } else if (data?.label === 'Start AI Doc Extraction') {
      return 'text-black';
    } else if (data?.label === 'Update Salesforce via API') {
      return 'text-black';
    }
    
    return 'text-gray-600';
  };

  // Determine background color based on type or bgClass
  const getBgClass = () => {
    if (data?.bgClass) return data.bgClass;
    
    if (data?.label === 'Execute Robotic Process') {
      return 'bg-white';
    } else if (data?.label === 'Start AI Doc Extraction') {
      return 'bg-lime-300';
    } else if (data?.label === 'Update Salesforce via API') {
      return 'bg-white';
    } else if (data?.label === 'Send Warning Email') {
      return 'bg-lime-300';
    } else if (data?.label === 'Send Docusign for Signature') {
      return 'bg-white';
    }
    
    switch(data?.type) {
      case 'email':
        return 'bg-lime-300';
      case 'ai':
        return 'bg-lime-300';
      case 'docusign':
        return 'bg-white';
      case 'robotic':
        return 'bg-white';
      case 'api':
        return 'bg-white';
      default:
        return 'bg-blue-100';
    }
  };

  return (
    <div 
      className={`
        p-4 rounded-lg shadow-md min-w-[100px] min-h-[80px]
        flex flex-col justify-center items-center text-center
        transition-shadow duration-200
        ${getBgClass()}
        ${selected ? 'ring-2 ring-blue-500' : ''}
      `}
    >
      <Handle type="target" position={Position.Top} id="in-top" className="!bg-black w-3 h-3" />
      <Handle type="target" position={Position.Left} id="in-left" className="!bg-black w-3 h-3" />
      
      {renderIcon()}
      <div className="mt-1">
        <h5 className="font-semibold text-sm">{data?.label || ''}</h5>
        {data?.subtitle && <p className="text-xs text-gray-600">{data.subtitle}</p>}
      </div>
      
      <Handle type="source" position={Position.Bottom} id="out-bottom" className="!bg-black w-3 h-3" />
      <Handle type="source" position={Position.Right} id="out-right" className="!bg-black w-3 h-3" />
    </div>
  );
}

export default React.memo(ProcessNode);
