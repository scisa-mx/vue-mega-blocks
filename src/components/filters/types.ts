export interface InternalPagination {
  totalPages: number;
  currentPage: number;
}

export interface InternalHeader {
  label: string;
  isSorteable: boolean | undefined | null;
  state: string | null;
  idx: number;
  key: string;
}

export interface Header {
  label: string;
  key: string;
  sorteable?: boolean;
}

export interface LiteTable {
  headers?: Header[];
  items?: Array<any>;
  pagination: InternalPagination;
  filters?: Filter[];
  striped: boolean;
}


export interface ItemSelect {
  text: string;
  value: string | number;
}

export interface DateRange {
  value:[string, string];
}

export interface Searcher {
  value: string;
}

export interface DatePicker {
  value: string;
}

export interface Filter {
  type: "select" | "date-picker" | "date-range" | "searcher";
  data: ItemSelect[] | DatePicker | DateRange | Searcher;
  label: string;
  key: string;
}
