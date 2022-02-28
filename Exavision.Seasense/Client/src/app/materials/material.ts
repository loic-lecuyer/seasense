import { WsService } from "../services/ws.service";
import { Capability } from "./capabilities/capability";
import { MaterialType } from "./material-type";
import { Site } from "./site";
import { Unit } from "./unit";

export interface Material {
  id: string;
  displayName: string;
  materialType: MaterialType;
  materials: Material[];
  capabilities: Capability[];
  wsService: WsService;
  site: Site;
  unit: Unit;
}
