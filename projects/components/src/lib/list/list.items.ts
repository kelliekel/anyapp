export class ListItems {
  items: any[];
  total?: number;
  constructor(items: any[], total?: number) {
    this.items = items;
    this.total = total;
  }
}