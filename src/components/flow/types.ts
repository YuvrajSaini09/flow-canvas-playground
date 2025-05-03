
// src/components/flow/types.ts
import { Node } from '@xyflow/react';

export interface DiamondNodeData {
  label: string;
  subtitle?: string;
  branchId?: string;
}

export interface StartNodeData {
  label: string;
}

export interface ProcessNodeData {
  label: string;
  subtitle?: string;
  bgClass?: string;
  iconName?: string;
  color?: string;
  type?: string;
}

export interface EndNodeData {
  label: string;
}

export interface CustomNodeProps {
  id: string;
  type: string;
  data: any;
  selected: boolean;
}
