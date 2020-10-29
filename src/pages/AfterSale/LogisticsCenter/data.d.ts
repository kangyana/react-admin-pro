export interface Efficiency {
  import_ship: string;
  import_sign: string;
  ship_collect: string;
  collect_sign: string;
  import_collect: string;
  ship_sign: string;
  import_ship_compare: string;
  import_sign_compare: string;
  ship_collect_compare: string;
  collect_sign_compare: string;
  import_collect_compare: string;
  ship_sign_compare: string;
}

export interface StatisticsParmas {
  is_count?: string;
  type?: string;
  pagesize?: string;
  page?: string;
}

export interface Statistics {
  carton: {
    carton_name: string;
    goods_id: number;
  } | null;
  carton_id: number;
  diff_time: number;
  express: {
    express_id: number;
    express_name: string;
  } | null;
  express_id: number;
  import_time: string;
  ship_code: string;
  ship_id: number;
  ship_number: number;
  status: string;
}

export interface Service {
  collect_sign: string;
  express_name: string;
  ship_sign: string;
  sign_rate: number;
}

export interface Provinces {
  collect_sign: string;
  express_name: string;
  province: string;
}
export interface BtnInfo {
  title: string;
  icon: string;
  styles: string;
  name: string;
  total: number;
  unit: string;
}
