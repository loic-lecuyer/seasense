import { SettingMaterial } from "./settings/setting-material";
import { Material } from "./material";
import { MaterialType } from "./material-type";
import { DayCamera } from "./day-camera";
import { ThermalCamera } from "./thermal-camera";
import { InertialMeasurement } from "./inertial-measurement";
import { LazerMeasurement } from "./lazer-measurement";
import { Unit } from "./unit";
import { Turret } from "./turret";
import { SettingCapability } from "./settings/setting-capability";
import { Capability } from "./capabilities/capability";
import { CapabilityType } from "./capabilities/capability-type";
import { TurretMoveSpeedCapability } from "./capabilities/turret/turret-move-speed-capability";
import { UnitRebootCapability } from "./capabilities/unit/unit-reboot-capability";
export class Factory {
  createCapability(settingCapability: SettingCapability): Capability {
    let capability: Capability | null = null;
    switch (settingCapability.capabilityType) {
      case CapabilityType.TurretMoveSpeed:
        capability = new TurretMoveSpeedCapability(settingCapability);
        break;
      case CapabilityType.UnitReboot:
        capability = new UnitRebootCapability(settingCapability);
        break;
    }
    if (capability == null) throw 'Capability ' + settingCapability.capabilityType + ' not implemented !!!';
    return capability;
  }

  public createMaterial(settingMaterial: SettingMaterial): Material  {
    let material: Material | null = null;

    switch (settingMaterial.materialType) {
      case MaterialType.DayCamera:
        material = new DayCamera(settingMaterial);      
        break;
      case MaterialType.ThermalCamera:
        material = new ThermalCamera(settingMaterial);        
        break;
      case MaterialType.InertialMeasurement:
        material = new InertialMeasurement(settingMaterial);      
        break;
      case MaterialType.LazerMeasurement:
        material = new LazerMeasurement(settingMaterial);       
        break;
      case MaterialType.Unit:
        material = new Unit(settingMaterial);
        break;
      case MaterialType.Turret:
        material = new Turret(settingMaterial);
        break;
    }

    if (material == null) throw 'Material ' + settingMaterial.materialType + ' not implemented !!!';
    return material;
  }
}
