import { Material } from "../material";
import { Site } from "../site";
import { CapabilityState } from "../states/capability-state";
import { Unit } from "../unit";
import { CapabilityType } from "./capability-type";


export interface Capability {
  setState(valueState: CapabilityState) : void;
  id: string;
  capabilityType: CapabilityType;
  material: Material | undefined;
  
}

