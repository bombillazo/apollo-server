export interface FetcherRequestInit {
  method?: string;
  headers?: Record<string, string>;
  body?: string | Buffer;
}

export interface FetcherResponse {
  ok: boolean;
  status: number;
  statusText: string;
  headers: FetcherHeaders;
  text(): Promise<string>;
  json(): Promise<any>;
}

export interface FetcherHeaders {
  get(name: string): string | null;
}

export type Fetcher = (
  url: string,
  init?: FetcherRequestInit,
) => Promise<FetcherResponse>;
