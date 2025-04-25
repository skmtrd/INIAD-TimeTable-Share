declare module "react-avatar-editor" {
  import React from "react";

  export interface AvatarEditorProps {
    image: string | File;
    width?: number;
    height?: number;
    border?: number | number[];
    borderRadius?: number;
    color?: number[];
    scale?: number;
    rotate?: number;
    position?: { x: number; y: number };
    style?: React.CSSProperties;
    crossOrigin?: string;
    disableBoundaryChecks?: boolean;
    disableHiDPIScaling?: boolean;
    onLoadFailure?: (error: Error) => void;
    onLoadSuccess?: (image: HTMLImageElement) => void;
    onImageReady?: (image: HTMLImageElement) => void;
    onImageChange?: () => void;
    onMouseUp?: () => void;
    onMouseMove?: () => void;
    onPositionChange?: (position: { x: number; y: number }) => void;
  }

  export default class AvatarEditor extends React.Component<AvatarEditorProps> {
    getImage(): HTMLCanvasElement;
    getImageScaledToCanvas(): HTMLCanvasElement;
  }
}
