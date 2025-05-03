
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SidebarCategoryProps {
  name: string;
  count?: number;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const SidebarCategory: React.FC<SidebarCategoryProps> = ({ 
  name, 
  count, 
  children,
  defaultOpen = true 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="sidebar-category">
      <div 
        className="sidebar-category-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sidebar-dot" />
        <span className="sidebar-category-name">{name}</span>
        {count !== undefined && (
          <span className="sidebar-count">({count})</span>
        )}
        <div className="ml-auto">
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default SidebarCategory;
