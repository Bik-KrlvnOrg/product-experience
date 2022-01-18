export interface ExceptionPayload {
  status: number;
  timestamp: string;
  path: string;
  error: string | Record<any, any>;
}
