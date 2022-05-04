import type { NetworkStatus } from '../../types/NetworkStatus.d';
declare type GetNetworkStatusResult = {
    networkStatus: NetworkStatus;
};
declare const getNetworkStatus: () => Promise<GetNetworkStatusResult>;
export default getNetworkStatus;
