import { Confirmations } from '../../types/Confirmation';
import type { StringHex } from '../../types/SpecialStrings.d';
declare type GetConfirmationsParams = {
    transactionLogId: StringHex;
};
declare type GetConfirmationsResult = {
    confirmations: Confirmations;
};
declare const getConfirmations: ({ transactionLogId, }: GetConfirmationsParams) => Promise<GetConfirmationsResult>;
export default getConfirmations;
