
import React from 'react';
import { CornerDownRight, Delete, Copy, Eye, Filter, Pencil, Undo, Redo } from 'lucide-react';
import useStore from '../../store/useStore';

const RightToolbar: React.FC = () => {
  const { setShowDetailsPanel, showDetailsPanel } = useStore();
  
  return (
    <div className="right-sidebar-tools">
      <div className="tool-button">
        <Eye 
          size={20} 
          onClick={() => setShowDetailsPanel(!showDetailsPanel)} 
          className={showDetailsPanel ? 'text-blue-300' : 'text-white'}
        />
      </div>
      <div className="tool-button">
        <Pencil size={20} />
      </div>
      <div className="tool-button">
        <Delete size={20} />
      </div>
      <div className="tool-button">
        <Copy size={20} />
      </div>
      <div className="tool-button">
        <CornerDownRight size={20} />
      </div>
      <div className="tool-button">
        <Filter size={20} />
      </div>
      <div className="tool-button">
        <Undo size={20} />
      </div>
      <div className="tool-button">
        <Redo size={20} />
      </div>
    </div>
  );
};

export default RightToolbar;
