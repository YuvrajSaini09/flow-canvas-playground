
import React from 'react';
import SidebarCategory from './SidebarCategory';
import DraggableNode from './DraggableNode';

const NodesCatalog: React.FC = () => {
  return (
    <div className="px-2">
      <SidebarCategory name="Actions Blocks" count={8}>
        <div className="grid grid-cols-2 gap-2">
          <DraggableNode 
            type="process" 
            label="Request" 
            icon="RotateCw"
          />
          <DraggableNode 
            type="process" 
            label="Event Transform" 
            icon="Layers"
          />
          <DraggableNode 
            type="process" 
            label="Data Imap" 
            icon="Database"
            className="card-border-blue"
          />
          <DraggableNode 
            type="process" 
            label="Code" 
            icon="Code"
          />
          <DraggableNode 
            type="process" 
            label="Save to Story" 
            icon="Save"
          />
          <DraggableNode 
            type="process" 
            label="Trigger" 
            icon="RotateCw"
            isNew={true} 
          />
          <DraggableNode 
            type="process" 
            label="Webhook" 
            icon="Webhook"
          />
          <DraggableNode 
            type="process" 
            label="Terminal" 
            icon="Terminal"
          />
        </div>
      </SidebarCategory>

      <SidebarCategory name="Agent" count={3} defaultOpen={false}>
        <div className="grid grid-cols-2 gap-2">
          <DraggableNode 
            type="process" 
            label="Execute Process" 
            icon="RotateCw"
          />
          <DraggableNode 
            type="process" 
            label="AI Doc Extraction" 
            icon="FileText"
            className="lime-bg" 
          />
          <DraggableNode 
            type="process" 
            label="Update Salesforce" 
            icon="Database"
          />
        </div>
      </SidebarCategory>

      <SidebarCategory name="Airtable" count={10} defaultOpen={false}>
        <div className="grid grid-cols-2 gap-2">
          <DraggableNode 
            type="process" 
            label="Send Email" 
            icon="Mail"
            className="lime-bg" 
          />
        </div>
      </SidebarCategory>

      <SidebarCategory name="Abusesch" count={4} defaultOpen={false}>
        <div className="grid grid-cols-2 gap-2">
          <DraggableNode 
            type="process" 
            label="Sign Document" 
            icon="FileText"
          />
        </div>
      </SidebarCategory>
    </div>
  );
};

export default NodesCatalog;
