import type { StringHex } from '../../types/SpecialStrings.d';
import type { Txos } from '../../types/Txo.d';
declare type GetAllTxosByAccountParams = {
    accountId: StringHex;
};
declare type GetAllTxosByAccountResult = Txos;
declare const getAllTxosForAccount: ({ accountId, }: GetAllTxosByAccountParams) => Promise<GetAllTxosByAccountResult>;
export default getAllTxosForAccount;
