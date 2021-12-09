/* tslint:disable */
export interface Order {
  ascending?: boolean;
  descending?: boolean;
  direction?: 'ASC' | 'DESC';
  ignoreCase?: boolean;
  nullHandling?: 'NATIVE' | 'NULLS_FIRST' | 'NULLS_LAST';
  property?: string;
}
