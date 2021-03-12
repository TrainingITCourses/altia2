export interface Audit {
  loading: boolean;
  error?: {
    status: number;
    message: string;
  };
}
