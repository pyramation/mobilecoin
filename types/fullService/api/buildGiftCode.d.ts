import type { GiftCode } from '../../types/GiftCode.d';
import type { StringHex, StringB58, StringUInt64 } from '../../types/SpecialStrings.d';
import type { TxProposal } from '../../types/TxProposal';
export declare type BuildGiftCodeParams = {
    accountId: StringHex;
    fee?: StringUInt64;
    inputTxoIds?: StringHex[];
    maxSpendableValue?: StringUInt64;
    memo?: string;
    tombstoneBlock?: StringUInt64;
    valuePmob: StringUInt64;
};
export declare type BuildGiftCodeResult = {
    feeConfirmation: bigint;
    giftCode: GiftCode;
    giftCodeB58: StringB58;
    totalValueConfirmation: bigint;
    txProposal: TxProposal;
};
declare const buildGiftCode: ({ accountId, fee, inputTxoIds, maxSpendableValue, tombstoneBlock, valuePmob, }: BuildGiftCodeParams) => Promise<BuildGiftCodeResult>;
export default buildGiftCode;
