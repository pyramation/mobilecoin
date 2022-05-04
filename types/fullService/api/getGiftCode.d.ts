import type { GiftCode } from '../../types/GiftCode.d';
import type { StringB58 } from '../../types/SpecialStrings.d';
declare type GetGiftCodeParams = {
    giftCodeB58: StringB58;
};
declare type GetGiftCodeResult = {
    giftCode: GiftCode;
};
declare const getGiftCode: ({ giftCodeB58 }: GetGiftCodeParams) => Promise<GetGiftCodeResult>;
export default getGiftCode;
