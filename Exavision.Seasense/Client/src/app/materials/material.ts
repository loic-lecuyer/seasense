import { Capability } from "./capabilities/capability";
import { MaterialType } from "./material-type";

export interface Material {
  id: string;
  displayName: string;
  materialType: MaterialType;
  materials: Material[];
  capabilities: Capability[];
}
