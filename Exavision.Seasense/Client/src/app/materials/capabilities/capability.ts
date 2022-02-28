import { Material } from "../material";
import { Site } from "../site";
import { Unit } from "../unit";
import { CapabilityType } from "./capability-type";


export interface Capability {
  id: string;
  capabilityType: CapabilityType;
  material: Material | undefined;
  
}

