export interface ResponseInterface<D = null> {
  data?: D;
  status: number;
  message: string;
}
