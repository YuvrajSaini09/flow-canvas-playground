
import {
  Node,
  Edge,
} from '@xyflow/react';

// We'll reference icons by name instead of JSX elements
export const initialNodes: Node[] = [
  {
    id: 'start',
    type: 'start',
    position: { x: 760, y: 75 },
    data: { label: 'Start' },
  },
  {
    id: 'diamond-1',
    type: 'diamond',
    position: { x: 512, y: 105 },
    data: { 
      label: 'Proper Application?',
      subtitle: 'Branch-1' 
    },
  },
  {
    id: 'process-1',
    type: 'process',
    position: { x: 630, y: 90 },
    style: { width: 100 },
    data: {
      label: 'Submit New Project App',
      bgClass: 'blue-bg',
    },
  },
  {
    id: 'process-2',
    type: 'process',
    position: { x: 335, y: 230 },
    data: {
      label: 'Execute Robotic Process',
      iconName: 'RotateCw',
    },
  },
  {
    id: 'process-3',
    type: 'process',
    position: { x: 530, y: 230 },
    data: {
      label: 'Start AI Doc Extraction',
      iconName: 'FileText',
      bgClass: 'lime-bg',
    },
  },
  {
    id: 'process-4',
    type: 'process',
    position: { x: 710, y: 230 },
    data: {
      label: 'Update Salesforce via API',
      iconName: 'Database',
    },
  },
  {
    id: 'diamond-2',
    type: 'diamond',
    position: { x: 335, y: 335 },
    data: { 
      label: 'Update System',
      subtitle: 'Branch-2' 
    },
  },
  {
    id: 'diamond-3',
    type: 'diamond',
    position: { x: 530, y: 380 },
    data: { 
      label: 'AI Success?',
      subtitle: 'Branch-3' 
    },
  },
  {
    id: 'process-5',
    type: 'process',
    position: { x: 285, y: 480 },
    data: {
      label: 'Send Warning Email',
      iconName: 'Mail',
      bgClass: 'lime-bg',
    },
  },
  {
    id: 'process-6',
    type: 'process',
    position: { x: 390, y: 480 },
    data: {
      label: 'Send DocuSign for Signature',
      iconName: 'FileText',
    },
  },
  {
    id: 'end-1',
    type: 'end',
    position: { x: 485, y: 570 },
    data: {},
  },
];

export const initialEdges: Edge[] = [
  { id: 'e1-2', source: 'start', target: 'diamond-1' },
  { id: 'e1-3', source: 'diamond-1', target: 'process-1' },
  { id: 'e2-3', source: 'diamond-1', target: 'process-2' },
  { id: 'e3-4', source: 'process-2', target: 'diamond-2' },
  { id: 'e3-5', source: 'diamond-1', target: 'process-3' },
  { id: 'e3-6', source: 'process-3', target: 'diamond-3' },
  { id: 'e3-7', source: 'diamond-1', target: 'process-4' },
  { id: 'e4-5', source: 'diamond-2', target: 'process-5' },
  { id: 'e4-6', source: 'diamond-2', target: 'process-6' },
  { id: 'e5-6', source: 'process-5', target: 'end-1' },
  { id: 'e6-7', source: 'process-6', target: 'end-1' },
];
