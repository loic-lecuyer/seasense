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
import { TurretMoveAbsoluteCapability } from "./capabilities/turret/turret-move-absolute-capability";
import { WsService } from "../services/ws.service";
import { Site } from "./site";
import { WsResponse } from "../api/ws/ws-response";
import { WsGetStateResponse } from "../api/ws/ws-get-state-response";
import { CapabilityState } from "./states/capability-state";
import { UnitState } from "./states/unit-state";
import { MaterialState } from "./states/material-state";
import { TurretAbsolutePositionState } from "./states/turret/turret-absolute-position-state";
import { TurretAbsolutePositionCapability } from "./capabilities/turret/turret-absolute-position-capability";
import { CameraZoomAbsolutePositionCapability } from "./capabilities/camera/camera-zoom-absolute-position-capability";
import { CameraZoomContinuousCapability } from "./capabilities/camera/camera-zoom-continuous-capability";
export class Factory {

  createMessage(data: any): WsResponse {
    let typeName: string = data.$type;
    switch (typeName) {
      case 'WsGetStateResponse':
        let response: WsGetStateResponse = <WsGetStateResponse>data;        
        response.site.capabilities = response.site.capabilities.map((value: CapabilityState) => { return this.mapCapabilityState(value); });
        response.site.units = response.site.units.map((value: UnitState) => { return this.mapUnitState(value); });
        response.site.units.forEach((unitState: UnitState) => {
          unitState.capabilities = unitState.capabilities.map((value: CapabilityState) => { return this.mapCapabilityState(value); });
          unitState.materials = unitState.materials.map((value: MaterialState) => { return this.mapMaterialState(value); });
          unitState.materials.forEach((valueMat: MaterialState) => {
            this.recurseCreateMaterialState(valueMat);
          });
        });
        return response;
      default:
        console.error("No creation implemtation in facotry for type " + typeName);
        throw "No creation implemtation in facotry for type " + typeName;
    }
  }
  mapMaterialState(value: MaterialState): MaterialState {
    return value;
  }
  mapUnitState(value: UnitState): UnitState {
    return value;
  }
  mapCapabilityState(value: CapabilityState): CapabilityState {
    if (value.$type === 'TurretAbsolutePositionState') {
      let state: TurretAbsolutePositionState = <TurretAbsolutePositionState>value;
      return state;
    }
    return value;
  }
  recurseCreateMaterialState(materailState: MaterialState) {
    materailState.materials = materailState.materials.map((childMaterialState: MaterialState) => { return childMaterialState; });
    materailState.capabilities = materailState.capabilities.map((value: CapabilityState) => { return this.mapCapabilityState(value); });
    materailState.materials.forEach((childMaterialState: MaterialState) => { this.recurseCreateMaterialState(childMaterialState); });
  }
  createCapability(settingCapability: SettingCapability): Capability {
    let capability: Capability | null = null;
    switch (settingCapability.capabilityType) {
      case CapabilityType.TurretMoveSpeed:
        capability = new TurretMoveSpeedCapability(settingCapability);
        break;
      case CapabilityType.TurretMoveAbsolute:
        capability = new TurretMoveAbsoluteCapability(settingCapability);
        break;
      case CapabilityType.UnitReboot:
        capability = new UnitRebootCapability(settingCapability);
        break;

      case CapabilityType.TurretAbsolutePosition:
        capability = new TurretAbsolutePositionCapability(settingCapability);
        break;
      case CapabilityType.CameraZoomAbsolutePosition:
        capability = new CameraZoomAbsolutePositionCapability(settingCapability);
        break;
      case CapabilityType.CameraZoomContinuous:
        capability = new CameraZoomContinuousCapability(settingCapability);
        break;
    }
    if (capability == null) {
      console.error('Capability ' + settingCapability.capabilityType + ' not implemented !!!');
      throw 'Capability ' + settingCapability.capabilityType + ' not implemented !!!';

    }
    return capability;
  }

  public createMaterial(settingMaterial: SettingMaterial, site: Site, unit: Unit, wsService: WsService): Material {
    let material: Material | null = null;

    switch (settingMaterial.materialType) {
      case MaterialType.DayCamera:
        material = new DayCamera(settingMaterial, site, unit, wsService, this);
        break;
      case MaterialType.ThermalCamera:
        material = new ThermalCamera(settingMaterial, site, unit, wsService, this);
        break;
      case MaterialType.InertialMeasurement:
        material = new InertialMeasurement(settingMaterial, site, unit, wsService, this);
        break;
      case MaterialType.LazerMeasurement:
        material = new LazerMeasurement(settingMaterial, site, unit, wsService, this);
        break;
      case MaterialType.Unit:
        material = new Unit(settingMaterial, site, wsService,this);
        break;
      case MaterialType.Turret:
        material = new Turret(settingMaterial, site, unit, wsService, this);
        break;
    }

    if (material == null) throw 'Material ' + settingMaterial.materialType + ' not implemented !!!';
    return material;
  }
}
