# mobilecoin

```
npm install mobilecoin
```

```js
import { 
    getBalanceForAccount,
    accountInfo
 } from 'mobilecoin';

const accountInfo: GetAccountResult = await getAccount({ accountId });
const balance: GetBalanceResult = await getBalanceForAccount({ accountId });
```