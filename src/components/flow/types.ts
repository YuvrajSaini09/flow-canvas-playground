// src/components/flow/types.ts
export interface DiamondNodeData {
  label: string;
  subtitle: string;
}

export interface StartNodeData {
  label: string;
}

export interface ProcessNodeData {
  label: string;
  subtitle: string;
  bgClass: string;
  iconName: string;
  color: string;
}

export interface EndNodeData {
  label: string;
}
