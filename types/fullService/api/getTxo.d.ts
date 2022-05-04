import type { StringHex } from '../../types/SpecialStrings.d';
import type { Txo } from '../../types/Txo.d';
declare type GetTxoParams = {
    txoId: StringHex;
};
declare type GetTxoResult = {
    txo: Txo;
};
declare const getTxo: ({ txoId }: GetTxoParams) => Promise<GetTxoResult>;
export default getTxo;
