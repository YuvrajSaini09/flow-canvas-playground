
import React from 'react';

interface DraggableNodeProps {
  type: string;
  label: string;
  icon?: React.ReactNode;
  isNew?: boolean;
  className?: string;
}

const DraggableNode: React.FC<DraggableNodeProps> = ({
  type,
  label,
  icon,
  isNew = false,
  className = '',
}) => {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const nodeData = {
      type,
      label,
      icon
    };

    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`dndnode-text relative ${className}`}
      onDragStart={onDragStart}
      draggable
    >
      {isNew && <span className="new-badge">New</span>}
      {icon && <div className="node-icon">{icon}</div>}
      <div className="node-name">{label}</div>
    </div>
  );
};

export default DraggableNode;
