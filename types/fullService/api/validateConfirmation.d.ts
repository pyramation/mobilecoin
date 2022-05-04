import type { StringHex } from '../../types/SpecialStrings.d';
declare type ValidateConfirmationParams = {
    accountId: StringHex;
    txoId: StringHex;
    confirmation: StringHex;
};
declare type ValidateConfirmationResult = {
    validated: boolean;
};
declare const validateConfirmation: ({ accountId, confirmation, txoId, }: ValidateConfirmationParams) => Promise<ValidateConfirmationResult>;
export default validateConfirmation;
