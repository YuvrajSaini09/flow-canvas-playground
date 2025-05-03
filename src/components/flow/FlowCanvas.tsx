import React, { useState } from 'react';
import ReactFlow, { Node, Edge, Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

// Import your custom node components
import { DiamondNode } from './DiamondNode';
import { StartNode } from './StartNode';
import { ProcessNode } from './ProcessNode';
import { EndNode } from './EndNode';

// Import your shared data types
import {
  DiamondNodeData,
  StartNodeData,
  ProcessNodeData,
  EndNodeData,
} from './types';

// Define the union type of all possible node data shapes
type FlowNodeData = DiamondNodeData | StartNodeData | ProcessNodeData | EndNodeData;

// Create the initial nodes array with id, position, type, and data
const initialNodes: Node<FlowNodeData, string>[] = [
  {
    id: 'start-1',
    type: 'start',
    position: { x: 0, y: 0 },
    data: { label: 'Begin' },
  },
  {
    id: 'diamond-1',
    type: 'diamond',
    position: { x: 200, y: 0 },
    data: { label: 'Check', subtitle: 'Is it true?' },
  },
  {
    id: 'process-1',
    type: 'process',
    position: { x: 400, y: 0 },
    data: {
      label: 'Do Work',
      subtitle: 'Processing step',
      bgClass: 'bg-green-100',
      iconName: 'cog',
      color: 'green-600',
    },
  },
  {
    id: 'end-1',
    type: 'end',
    position: { x: 600, y: 0 },
    data: { label: 'Finish' },
  },
];

// (Optional) initial edges to connect nodes
const initialEdges: Edge<string>[] = [
  { id: 'e1-2', source: 'start-1', target: 'diamond-1', type: 'smoothstep' },
  { id: 'e2-3', source: 'diamond-1', target: 'process-1', type: 'smoothstep' },
  { id: 'e3-4', source: 'process-1', target: 'end-1', type: 'smoothstep' },
];

export default function FlowCanvas() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={setNodes}
        onEdgesChange={setEdges}
        nodeTypes={{
          start: StartNode,
          diamond: DiamondNode,
          process: ProcessNode,
          end: EndNode,
        }}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
