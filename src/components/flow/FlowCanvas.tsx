
import React, { useRef, useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  Panel,
  useReactFlow,
  BackgroundVariant,
  Node,
  NodeTypes
} from '@xyflow/react';
import useStore from '../../store/useStore';
import DiamondNode from './DiamondNode';
import ProcessNode from './ProcessNode';
import StartNode from './StartNode';
import EndNode from './EndNode';
import { v4 as uuidv4 } from 'uuid';
import DetailsPanel from '../panels/DetailsPanel';
import RightToolbar from '../panels/RightToolbar';

import '@xyflow/react/dist/style.css';

// Define custom node types
const nodeTypes: NodeTypes = {
  diamond: DiamondNode,
  process: ProcessNode,
  start: StartNode,
  end: EndNode,
};

const FlowCanvas: React.FC = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const { getViewport } = useReactFlow();
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    addNode,
    selectNode,
    selectedNode,
    showDetailsPanel,
    setShowDetailsPanel,
  } = useStore();

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!reactFlowWrapper.current) return;

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const dataStr = event.dataTransfer.getData('application/reactflow');
      
      if (!dataStr) return;
      
      try {
        const data = JSON.parse(dataStr);
        
        const position = getViewport();
        const x = event.clientX - reactFlowBounds.left - (position?.x || 0);
        const y = event.clientY - reactFlowBounds.top - (position?.y || 0);

        const nodeId = uuidv4();
        let nodeData = {
          id: nodeId,
          type: data.type,
          position: { x, y },
          data: { 
            ...data,
            label: data.label,
            // Convert icon to iconName to match our ProcessNode component
            iconName: data.icon ? data.icon : undefined,
          },
        };

        // Special case for nodes that need unique styling
        if (data.label === "AI Doc Extraction" || data.label === "Send Warning Email") {
          nodeData.data.bgClass = "lime-bg";
        } else if (data.label === "Data Imap") {
          nodeData.data.bgClass = "blue-bg";
        }

        addNode(nodeData as Node);
      } catch (error) {
        console.error('Error parsing dropped data:', error);
      }
    },
    [addNode, getViewport]
  );

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    selectNode(node);
    setShowDetailsPanel(true);
  }, [selectNode, setShowDetailsPanel]);

  const closeDetailsPanel = useCallback(() => {
    setShowDetailsPanel(false);
    selectNode(null);
  }, [setShowDetailsPanel, selectNode]);

  return (
    <div className="w-full h-full relative" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        nodesDraggable
        elementsSelectable
        deleteKeyCode={["Backspace", "Delete"]}
        minZoom={0.2}
        maxZoom={4}
      >
        <Background variant={BackgroundVariant.Dots} gap={15} size={1} />
        <Controls />
        
        <Panel position="top-right" className="flex items-center gap-2">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium flex items-center gap-2">
            Submit New Project App
          </button>
        </Panel>
      </ReactFlow>
      
      <RightToolbar />
      
      {showDetailsPanel && selectedNode && (
        <DetailsPanel onClose={closeDetailsPanel} />
      )}
      
      <div className="code-circuit">
        <svg width="150" height="150" viewBox="0 0 150 150">
          <rect x="0" y="0" width="150" height="150" fill="none" />
          <path d="M10,75 L50,75 L60,50 L90,100 L100,75 L140,75" 
                stroke="#6366f1" strokeWidth="2" fill="none" />
          <path d="M10,50 L30,50 L40,25 L60,75 L80,25 L100,50 L140,50" 
                stroke="#6366f1" strokeWidth="2" fill="none" />
          <path d="M10,100 L40,100 L50,125 L70,75 L90,125 L110,100 L140,100" 
                stroke="#6366f1" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  );
};

export default FlowCanvas;
