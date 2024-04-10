import ReactDOM from "react-dom";

export enum PortalTarget {
  PORTAL = "portal",
  ROOT = "root",
}

interface PortalProps {
  target: string;
  children: React.ReactNode;
}

const Portal = ({ children, target }: PortalProps) => {
  const domElement = document.getElementById(target);

  return domElement ? ReactDOM.createPortal(children, domElement) : null;
};

export default Portal;
