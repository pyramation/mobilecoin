import type { StringHex, StringB58, StringUInt64 } from '../../types/SpecialStrings.d';
import type { TxProposal } from '../../types/TxProposal';
export declare type BuildTransactionParams = {
    accountId: StringHex;
    fee?: StringUInt64;
    inputTxoIds?: StringHex[];
    maxSpendableValue?: StringUInt64;
    recipientPublicAddress: StringB58;
    tombstoneBlock?: StringUInt64;
    valuePmob: StringUInt64;
};
export declare type BuildTransactionResult = {
    feeConfirmation: bigint;
    totalValueConfirmation: bigint;
    txProposal: TxProposal;
    txProposalReceiverB58Code: StringB58;
};
declare const buildTransaction: ({ accountId, fee, inputTxoIds, maxSpendableValue, recipientPublicAddress, tombstoneBlock, valuePmob, }: BuildTransactionParams) => Promise<BuildTransactionResult>;
export default buildTransaction;
