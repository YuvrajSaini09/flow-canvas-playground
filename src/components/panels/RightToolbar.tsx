
import React from 'react';
import { 
  CornerDownRight, Delete, Copy, Eye, Filter, Pencil, Undo, Redo, 
  ArrowLeft, LayoutGrid, Share2, Plus, Download, Users, Settings
} from 'lucide-react';
import useStore from '../../store/useStore';

const RightToolbar: React.FC = () => {
  const { setShowDetailsPanel, showDetailsPanel } = useStore();
  
  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
      <ToolbarButton icon={<Plus size={18} />} bgColor="bg-lime-400" />
      <ToolbarButton icon={<Pencil size={18} />} />
      <ToolbarButton icon={<ArrowLeft size={18} />} />
      <ToolbarButton icon={<LayoutGrid size={18} />} />
      <ToolbarButton icon={<Share2 size={18} />} />
      <ToolbarButton icon={<Delete size={18} />} />
      <ToolbarButton icon={<Download size={18} />} />
      <ToolbarButton icon={<Users size={18} />} />
      <ToolbarButton 
        icon={<Eye size={18} />} 
        isActive={showDetailsPanel}
        onClick={() => setShowDetailsPanel(!showDetailsPanel)} 
      />
      <ToolbarButton icon={<Settings size={18} />} />
    </div>
  );
};

interface ToolbarButtonProps {
  icon: React.ReactNode;
  bgColor?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({ 
  icon, 
  bgColor = "bg-black", 
  isActive = false,
  onClick 
}) => (
  <button 
    onClick={onClick}
    className={`
      w-10 h-10 rounded-full flex items-center justify-center 
      ${bgColor} ${isActive ? 'text-blue-300' : 'text-white'} 
      shadow-md hover:opacity-90 transition-opacity
    `}
  >
    {icon}
  </button>
);

export default RightToolbar;
