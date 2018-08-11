export class SelectedTabModel {
  constructor(idx: number, tabName: string) {
    this.index =idx;
    this.tabName = tabName;
  }
  index: number;
  tabName: string;
}