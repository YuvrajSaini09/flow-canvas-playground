
import React, { useState, useCallback, useRef } from 'react';
import ReactFlow, { 
  Node, 
  Edge, 
  Background, 
  Controls, 
  MiniMap, 
  MarkerType,
  Connection,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useToast } from '@/hooks/use-toast';
import { useSidebar } from '@/components/ui/sidebar';

// Import your custom node components
import DiamondNode from './DiamondNode';
import StartNode from './StartNode';
import ProcessNode from './ProcessNode';
import EndNode from './EndNode';
import { Plus, X } from 'lucide-react';
import { NodeResizer } from '@xyflow/react';
import DetailsPanel from '../panels/DetailsPanel';
import RightToolbar from '../panels/RightToolbar';
import useStore from '../../store/useStore';

// Define the custom node types
const nodeTypes = {
  diamond: DiamondNode,
  process: ProcessNode,
  start: StartNode,
  end: EndNode,
};

// Default node definitions for our flow
const initialNodes: Node[] = [
  {
    id: 'start-1',
    type: 'start',
    position: { x: 350, y: 20 },
    data: { label: 'Start' },
  },
  {
    id: 'diamond-1',
    type: 'diamond',
    position: { x: 350, y: 100 },
    data: { label: 'Proper Application?', subtitle: '', branchId: '1' },
  },
  {
    id: 'process-1',
    type: 'process',
    position: { x: 150, y: 200 },
    data: { 
      label: 'Execute Robotic Process', 
      type: 'robotic',
      iconName: 'Triangle',
    },
  },
  {
    id: 'process-2',
    type: 'process',
    position: { x: 530, y: 200 },
    data: { 
      label: 'Start AI Doc Extraction',
      type: 'ai',
      iconName: 'Grid',
      bgClass: 'bg-lime-300',
    },
  },
  {
    id: 'process-3',
    type: 'process',
    position: { x: 710, y: 240 },
    data: { 
      label: 'Update Salesforce via API',
      type: 'api',
      iconName: 'CircleDot',
    },
  },
  {
    id: 'diamond-2',
    type: 'diamond',
    position: { x: 350, y: 300 },
    data: { label: 'Update System', subtitle: '', branchId: '2' },
  },
  {
    id: 'diamond-3',
    type: 'diamond',
    position: { x: 530, y: 370 },
    data: { label: 'AI Success?', subtitle: '', branchId: '3' },
  },
  {
    id: 'process-4',
    type: 'process',
    position: { x: 280, y: 470 },
    data: { 
      label: 'Send Warning Email',
      type: 'email',
      iconName: 'Mail',
      bgClass: 'bg-lime-300',
    },
  },
  {
    id: 'process-5',
    type: 'process',
    position: { x: 380, y: 470 },
    data: { 
      label: 'Send Docusign for Signature',
      type: 'docusign',
      iconName: 'FileSignature',
      bgClass: 'bg-white',
    },
  },
];

// Initial edges to connect nodes
const initialEdges: Edge[] = [
  { 
    id: 'e1-2', 
    source: 'start-1', 
    target: 'diamond-1', 
    animated: true,
    style: { stroke: '#333', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed }, 
  },
  { 
    id: 'e2-3a', 
    source: 'diamond-1', 
    target: 'process-1', 
    sourceHandle: 'left',
    style: { stroke: '#333', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  { 
    id: 'e2-3b', 
    source: 'diamond-1', 
    target: 'process-2', 
    sourceHandle: 'right',
    style: { stroke: '#333', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  { 
    id: 'e3b-3c', 
    source: 'process-2', 
    target: 'process-3', 
    sourceHandle: 'out-right',
    targetHandle: 'in-left',
    style: { stroke: '#333', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  { 
    id: 'e3a-4', 
    source: 'process-1', 
    target: 'diamond-2', 
    sourceHandle: 'out-bottom',
    style: { stroke: '#333', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  { 
    id: 'e3b-5', 
    source: 'process-2', 
    target: 'diamond-3', 
    sourceHandle: 'out-bottom',
    style: { stroke: '#333', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  { 
    id: 'e5-6a', 
    source: 'diamond-3', 
    target: 'process-4', 
    sourceHandle: 'left',
    style: { stroke: '#333', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  { 
    id: 'e5-6b', 
    source: 'diamond-3', 
    target: 'process-5', 
    sourceHandle: 'bottom',
    style: { stroke: '#333', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];

export default function FlowCanvas() {
  const { toast } = useToast();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [showDetailsPanel, setShowDetailsPanel] = useState<boolean>(false);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  // Add connections between nodes
  const onConnect = useCallback(
    (connection: Connection) => {
      // Create edge with animated style
      const newEdge = {
        ...connection,
        animated: true,
        style: { stroke: '#333', strokeWidth: 2 },
        markerEnd: { type: MarkerType.ArrowClosed },
      };
      
      setEdges((eds) => addEdge(newEdge, eds));
      toast({
        title: "Connection created",
        description: `Connected ${connection.source} to ${connection.target}`,
      });
    },
    [setEdges, toast]
  );

  // Handle node selection
  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
    setShowDetailsPanel(true);
  }, []);

  // Handle panel close
  const onPanelClose = useCallback(() => {
    setShowDetailsPanel(false);
  }, []);

  // Handle background click (deselect nodes)
  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
    setShowDetailsPanel(false);
  }, []);

  return (
    <div className="relative w-full h-full bg-gray-50">
      <div ref={reactFlowWrapper} style={{ width: '100%', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-right"
        >
          <Background color="#aaa" gap={16} />
          <Controls />
          <MiniMap
            nodeStrokeColor={(n) => {
              if (n.selected) return '#000';
              return '#fff';
            }}
            nodeColor={(n) => {
              if (n.type === 'diamond') return '#f7b801';
              if (n.type === 'process') return '#00b2ff';
              return '#fff';
            }}
          />
        </ReactFlow>
      </div>

      {/* Right side toolbox */}
      <RightToolbar />
      
      {/* Details Panel */}
      {showDetailsPanel && selectedNode && (
        <DetailsPanel onClose={onPanelClose} />
      )}
    </div>
  );
}
