import type { AccountSecrets } from '../../types/AccountSecrets.d';
import type { StringHex } from '../../types/SpecialStrings.d';
declare type ExportAccountSecretsParams = {
    accountId: StringHex;
};
declare type ExportAccountSecretsResult = {
    accountSecrets: AccountSecrets;
};
declare const exportAccountSecrets: ({ accountId, }: ExportAccountSecretsParams) => Promise<ExportAccountSecretsResult>;
export default exportAccountSecrets;
