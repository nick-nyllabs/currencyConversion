# Getting Started

`any-currency` can be required into any node runtime environment:

```
var anyCurrency = require('any-currency');
```

The main `anyCurrency` function is exported, which can be invoked to return a currency conversion.

# Usage

anyCurrency takes the following signiature:

```
anyCurrency(amount<number>, code<string>)
```

Where the following is needed:

+ **amount** - the amount to be converted.
+ **code** - the code representing the country that the amount is in. The following codes are supported:
    + `ca` - Canada
    + `mx` - Mexico
    + `eu` - Europe (Euro)
    + **NOTE:** codes are case sensitive. _Codes are always two letters and lower case_.
