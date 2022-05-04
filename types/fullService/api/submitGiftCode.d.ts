import type { GiftCode } from '../../types/GiftCode.d';
import type { StringHex, StringB58 } from '../../types/SpecialStrings.d';
import type { TxProposal } from '../../types/TxProposal.d';
export declare type SubmitGiftCodeParams = {
    fromAccountId: StringHex;
    giftCodeB58: StringB58;
    txProposal: TxProposal;
};
export declare type SubmitGiftCodeResult = {
    giftCode: GiftCode;
};
declare const submitGiftCode: ({ fromAccountId, giftCodeB58, txProposal, }: SubmitGiftCodeParams) => Promise<SubmitGiftCodeResult>;
export default submitGiftCode;
