import type { GiftCode } from '../../types/GiftCode.d';
import type { StringB58 } from '../../types/SpecialStrings.d';
export declare type RemoveGiftCodeParams = {
    giftCodeB58: StringB58;
};
export declare type RemoveGiftCodeResult = {
    giftCode: GiftCode;
};
declare const removeGiftCode: ({ giftCodeB58, }: RemoveGiftCodeParams) => Promise<RemoveGiftCodeResult>;
export default removeGiftCode;
