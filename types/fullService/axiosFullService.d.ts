import type { AxiosResponse } from 'axios';
declare type FullServiceResponse = AxiosResponse & {
    data: {
        method: string;
        jsonrpc: string;
        result?: any;
        error?: string;
    };
};
export declare type AxiosFullServiceResponse<T> = {
    result?: T;
    error?: string;
};
export declare const handleResponse: (response: AxiosResponse<FullServiceResponse>) => FullServiceResponse;
export declare const handleError: (error: {
    message?: string;
}) => Promise<never>;
declare const axiosFullService: <T>(baseURL: string, method: string, params?: Record<string, any>) => Promise<AxiosFullServiceResponse<T>>;
export default axiosFullService;
