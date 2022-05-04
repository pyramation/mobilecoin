import type { Accounts } from '../../types/Account.d';
declare type GetAllAccountsResult = Accounts;
declare const getAllAccounts: () => Promise<GetAllAccountsResult>;
export default getAllAccounts;
