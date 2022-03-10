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
import { TurretGyrostabilizationCapability } from "./capabilities/turret/turret-gyrostabilization-capability";
import { CameraAutoFocusOnePushCapability } from "./capabilities/camera/camera-auto-focus-one-push-capability";
import { LazerMeasurementShootCapability } from "./capabilities/lazer-measurement/lazer-measurement-shoot-capability";
import { SettingDoubleValueCapability } from "./settings/setting-double-value-capability";
import { DoubleValueCapability } from "./capabilities/double-value-capability";
import { SwitchValueCapability } from "./capabilities/switch-value-capability";
import { SettingSwitchValueCapability } from "./settings/setting-switch-value-capability";
import { WsValidResponse } from "../api/ws/ws-valid-response";
import { WsErrorResponse } from "../api/ws/ws-error-response";
import { SwitchValueType } from "./capabilities/switch-value-type";
import { WsGetMediaListResponse } from "../api/ws/ws-get-media-list-response";
import { WsCameraScreenshotResponse } from "../api/ws/ws-camera-screeneshot-response";
import { WsCameraStartRecordResponse } from "../api/ws/ws-camera-start-record-response";
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
      case "WsValidResponse":
        let validResponse: WsValidResponse = <WsValidResponse>data;
        return validResponse;
        break;

      case "WsErrorResponse":
        let errorResponse: WsErrorResponse = <WsErrorResponse>data;
        return errorResponse;
        break;

      case "WsGetMediaListResponse":
        let getMediaListResponse: WsGetMediaListResponse = <WsGetMediaListResponse>data;
        return getMediaListResponse;
        break;

      case "WsCameraScreenshotResponse":
        let cameraScreenshotResponse: WsCameraScreenshotResponse = <WsCameraScreenshotResponse>data;
        return cameraScreenshotResponse;
        break;


      case "WsCameraStartRecordResponse":
        let cameraStartRecordResponse: WsCameraStartRecordResponse = <WsCameraStartRecordResponse>data;
        return cameraStartRecordResponse;
        break;

   
        
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
      case CapabilityType.TurretGyrostabilization:
        capability = new TurretGyrostabilizationCapability(settingCapability);
        break;

      case CapabilityType.CameraAutoFocusOnePush:
        capability = new CameraAutoFocusOnePushCapability(settingCapability);
        break;
      case CapabilityType.LazerMeasurementShootCapability:
        capability = new LazerMeasurementShootCapability(settingCapability);
        break;
     
      case CapabilityType.DoubleValue:
        capability = new DoubleValueCapability(<SettingDoubleValueCapability>settingCapability);
        break;
      case CapabilityType.SwitchValue:
        let settingSwitchValueCapability: SettingSwitchValueCapability = <SettingSwitchValueCapability>settingCapability;        
        capability = new SwitchValueCapability(settingSwitchValueCapability);
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
