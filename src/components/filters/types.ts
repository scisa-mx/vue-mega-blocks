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

export interface DateRangeData {
  value:[string, string];
}

export interface DataFilter{
  value: string
}

export interface Searcher {
  label: string;
  identifier: string;
  size?: number;
}

export interface DatePicker {
  label: string;
  modelValue: any;
  identifier: string;
}

export interface DateRange {
  label: string;
  identifier: string;
}

export interface FiltersContainer {
  filters: Filter[] | undefined;
}

export interface DataFilterContainer {
  [key: string]: { value: any; key: string };
}

export interface Filter {
  type: "select" | "date-picker" | "date-range" | "searcher";
  data: ItemSelect[] | DataFilter | DateRangeData;
  label: string;
  key: string;
}

