export interface Option {
  text: string;
  value?: string | number;
}

export interface Filter {
  filter: string;
}

export interface UnderTabs {
  tabs: { label: string; slotName: string }[];
  initialTab?: number;
  hideTabs?: boolean;
  activeTab?: number;
}

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
  typeOfPagination?: "both" | "upper" | "lower"
  notFoundMsg: string;
}


export interface ItemSelect {
  text: string;
  value: string | number;
}

export interface DateRangeData {
  value:[string, string];
}

export interface SearcherData {
  value: string;
}

export interface DatePickerData {
  value: string;
}

export interface Filter {
  type: "select" | "date-picker" | "date-range" | "searcher";
  data: ItemSelect[] | DatePickerData | DateRangeData | SearcherData;
  label: string;
  key: string;
}

