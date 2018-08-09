export class ListSettings {
    public static DEFAULT(pageSize: number): ListSettings {
      return new ListSettings(0, pageSize, null, null);
    }
  
    constructor(page: number, pageSize: number, search: string, sort: string) {
      this.page = page;
      this.pageSize = pageSize;
      this.search = search;
      this.sort = sort;
    }
    page: number;
    pageSize: number;
    search: string;
    sort: string;
    sortType: 'asc' | 'desc';
  
    setSort(newSort: string): string {
      this.sortType = (this.sortType == 'desc' || newSort != this.sort) ? 'asc' : 'desc';
      this.sort = newSort;
      return this.sort;
    }
  
    get queryString(): string {
      let query = `page=${this.page}&pageSize=${this.pageSize}`;
      if (this.search !== null) {
        query = query + `&search=${this.search}`;
      }
      if (this.sort !== null) {
        query = query + `&orderBy=${this.sort} ${this.sortType}`;
      }
      // if (this.filter !== null) {
      //   query = query + `&filter=${this.filter}`;
      // }
      return query;
    }
  }