
export interface RevenueRow {
  label: string;
  formula: string | number;
  jan: string | number;
  feb: string | number;
  mar: string | number;
  type: 'percentage' | 'number' | 'currency' | 'header';
  color?: string;
}

export interface RevenueGroup {
  title: string;
  color: string;
  rows: RevenueRow[];
}

export interface ChartDataPoint {
  month: string;
  arr: number;
  growth: number;
}
