import type { GiftCode } from '../../types/GiftCode.d';
declare type GetAllGiftCodesResult = {
    giftCodes: GiftCode[];
};
declare const getAllGiftCodes: () => Promise<GetAllGiftCodesResult>;
export default getAllGiftCodes;
