import { Capability } from "./capabilities/capability";

export interface Material {
  id: string;
  displayName: string;
  materials: Material[];
  capabilities: Capability[];
}
