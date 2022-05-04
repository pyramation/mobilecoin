import type { WalletStatus } from '../../types/WalletStatus.d';
declare type GetWalletStatusResult = {
    walletStatus: WalletStatus;
};
declare const getWalletStatus: () => Promise<GetWalletStatusResult>;
export default getWalletStatus;
