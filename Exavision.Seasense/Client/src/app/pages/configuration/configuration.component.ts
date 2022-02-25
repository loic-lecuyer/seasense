import { NestedTreeControl } from '@angular/cdk/tree';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { SetSettingResponse } from '../../api/http/set-setting-response';
import { UnitCreateEmptyResponse } from '../../api/http/unit-create-empty-response';
import { SettingCapability } from '../../materials/settings/setting-capability';
import { SettingMaterial } from '../../materials/settings/setting-material';
import { SettingSite } from '../../materials/settings/setting-site';
import { SettingUnit } from '../../materials/settings/setting-unit';
import { Site } from '../../materials/site';
import { UnitType } from '../../models/unit-type';
import { HttpService } from '../../services/http.service';
import { SiteService } from '../../services/site.service';
import { ConfigurationNode } from './configuration-node';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  public site: SettingSite;
  public errorMessage: string | undefined = undefined;
  public unitTypes: UnitType[] = [];
  private rootNode: ConfigurationNode = new ConfigurationNode(null, []);
  treeControl = new NestedTreeControl<ConfigurationNode>(node => node.childs);
  dataSource = new MatTreeNestedDataSource<ConfigurationNode>();
  public selectedNode: ConfigurationNode | undefined = undefined;
  public selectedUnitTypeValue:string | undefined = undefined;

  constructor(private siteService: SiteService, private router: Router, private httpService: HttpService) {
    this.site = <SettingSite>JSON.parse(JSON.stringify(this.siteService.siteSetting));
    this.unitTypes.push({
      displayName: "Seamos",
      value:"SeamosUnit"
    });
    this.createTreeNodes();
  }
  

  onAddUnitButtonClick() {
    if (this.selectedUnitTypeValue != null) {
      this.httpService.createEmptyUnit(this.selectedUnitTypeValue).subscribe({
        next: (response: UnitCreateEmptyResponse) => {
          this.site.units = this.site.units.concat([response.settingUnit]);         
          this.createTreeNodes();
          this.selectedNode = this.rootNode;   
        },
        error: (err: HttpErrorResponse) => {
          this.errorMessage = err.message;
          
        },
      });

    }
  }
  onRemoveSelectedNodeButtonClick() {
    if (this.selectedNode != null) {
      let index: number = this.site.units.indexOf(this.selectedNode.item);
      this.site.units.splice(index, 1);
      this.createTreeNodes();
      this.selectedNode = this.rootNode;   
    }
  }
  findParent(node: ConfigurationNode, searchNode: ConfigurationNode): ConfigurationNode | undefined {
    if (node.childs.indexOf(searchNode) != -1) return node;
    else {
      let result: ConfigurationNode | undefined = undefined;
      node.childs.forEach((child: ConfigurationNode) => {
        let findedParent: ConfigurationNode | undefined = this.findParent(child, searchNode);
        if (findedParent != null) {
          result = findedParent;
        }
      });
      return result;
    }
    
  }

  selectNode(node: ConfigurationNode) {
    this.deselectChild(this.rootNode);
    node.selected = true;
    this.selectedNode = node;

  }
  deselectChild(node: ConfigurationNode) {
    node.selected = false;
    node.childs.forEach((n: ConfigurationNode) => {
      n.selected = false;
      this.deselectChild(n);
    });

  }
  createTreeNodes() {
    let childs: ConfigurationNode[] = [];
    this.site.units.forEach((settingUnit: SettingUnit) => {
      let node: ConfigurationNode = new ConfigurationNode(settingUnit, this.createUnitChild(settingUnit));
      childs.push(node);
    });
    this.site.capabilities.forEach((settingCapability: SettingCapability) => {
      let props = Object.getOwnPropertyNames(settingCapability);
      if (props.length > 5) {
        let node: ConfigurationNode = new ConfigurationNode(settingCapability, []);
        childs.push(node);
      }
      
    });
    this.rootNode = new ConfigurationNode(this.site, childs);
    this.rootNode.selected = true;
    this.dataSource.data = [this.rootNode];
    
  }
  createUnitChild(settingUnit: SettingUnit): ConfigurationNode[] {
    let childs: ConfigurationNode[] = [];
    
    settingUnit.capabilities.forEach((settingCapability: SettingCapability) => {
      let props = Object.getOwnPropertyNames(settingCapability);
      if (props.length > 5) {
        let node: ConfigurationNode = new ConfigurationNode(settingCapability,  []);
        childs.push(node);
      }
    
    });
    
    settingUnit.materials.forEach((settingMaterial: SettingMaterial) => {
      let node: ConfigurationNode = new ConfigurationNode(settingMaterial, this.createMaterialChild(settingMaterial));
      childs.push(node);
    });
    return childs;
  }
  createMaterialChild(settingMaterial: SettingMaterial): ConfigurationNode[] {
    let childs: ConfigurationNode[] = [];
    
    settingMaterial.capabilities.forEach((settingCapability: SettingCapability) => {
      let props = Object.getOwnPropertyNames(settingCapability);
      if (props.length > 5) {
        let node: ConfigurationNode = new ConfigurationNode(settingCapability,  []);
        childs.push(node);
      }
     
    });
    
    settingMaterial.materials.forEach((settingMaterialChild: SettingMaterial) => {
      let node: ConfigurationNode = new ConfigurationNode(settingMaterialChild, this.createMaterialChild(settingMaterialChild));
      childs.push(node);
    });

    return childs;
  }

  hasChild = (_: number, node: ConfigurationNode) => !!node.childs && node.childs.length > 0;
  ngOnInit(): void {

  }
  onCancelButtonClick() {
    this.router.navigate(['/home']);
  }
  onApplyButtonClick() {
    this.httpService.setSetting(this.site).subscribe({
      next: (response: SetSettingResponse) => {
        this.router.navigate(['/home']);
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.message;

      },
    });

  }
}
