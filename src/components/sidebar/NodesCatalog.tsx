
import React from 'react';
import SidebarCategory from './SidebarCategory';
import DraggableNode from './DraggableNode';
import { 
  Code, 
  RotateCw, 
  Terminal, 
  Webhook, 
  Database, 
  Save, 
  Mail,
  FileX,
  Layers
} from 'lucide-react';

const NodesCatalog: React.FC = () => {
  return (
    <div className="px-2">
      <SidebarCategory name="Actions Blocks" count={8}>
        <div className="grid grid-cols-2 gap-2">
          <DraggableNode 
            type="process" 
            label="Request" 
            icon={<RotateCw size={18} />} 
          />
          <DraggableNode 
            type="process" 
            label="Event Transform" 
            icon={<Layers size={18} />} 
          />
          <DraggableNode 
            type="process" 
            label="Data Imap" 
            icon={<Database size={18} />}
            className="card-border-blue"
          />
          <DraggableNode 
            type="process" 
            label="Code" 
            icon={<Code size={18} />} 
          />
          <DraggableNode 
            type="process" 
            label="Save to Story" 
            icon={<Save size={18} />} 
          />
          <DraggableNode 
            type="process" 
            label="Trigger" 
            icon={<RotateCw size={18} />}
            isNew={true} 
          />
          <DraggableNode 
            type="process" 
            label="Webhook" 
            icon={<Webhook size={18} />} 
          />
          <DraggableNode 
            type="process" 
            label="Terminal" 
            icon={<Terminal size={18} />} 
          />
        </div>
      </SidebarCategory>

      <SidebarCategory name="Agent" count={3} defaultOpen={false}>
        <div className="grid grid-cols-2 gap-2">
          <DraggableNode 
            type="process" 
            label="Execute Process" 
            icon={<RotateCw size={18} />} 
          />
          <DraggableNode 
            type="process" 
            label="AI Doc Extraction" 
            icon={<FileX size={18} />}
            className="lime-bg" 
          />
          <DraggableNode 
            type="process" 
            label="Update Salesforce" 
            icon={<Database size={18} />} 
          />
        </div>
      </SidebarCategory>

      <SidebarCategory name="Airtable" count={10} defaultOpen={false}>
        <div className="grid grid-cols-2 gap-2">
          <DraggableNode 
            type="process" 
            label="Send Email" 
            icon={<Mail size={18} />}
            className="lime-bg" 
          />
        </div>
      </SidebarCategory>

      <SidebarCategory name="Abusesch" count={4} defaultOpen={false}>
        <div className="grid grid-cols-2 gap-2">
          <DraggableNode 
            type="process" 
            label="Sign Document" 
            icon={<FileX size={18} />} 
          />
        </div>
      </SidebarCategory>
    </div>
  );
};

export default NodesCatalog;
