export class ConfigurationNode {
  public item: any;
  public childs: ConfigurationNode[];
  public selected: boolean = false;
  constructor(item: any,  childs: ConfigurationNode[]) {
    this.item = item;    
    this.childs = childs;

  }

}
