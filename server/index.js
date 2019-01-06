import { topExchanges } from './min-api/exchanges/topExchanges';
import { topListBy24Hours } from './min-api/cryptopcurrencies/topListBy24Hours';
import { cryptoInfoAndExchanges } from './min-api/cryptopcurrencies/cryptoInfoAndExchanges';
import { allWallets } from './min-api/wallets/allWallets';

const registerRoutes = app => {
  app.get('/topListBy24Hours', topListBy24Hours );

  app.get('/topExchanges', topExchanges );

  app.get('/cryptoInfoAndExchanges', cryptoInfoAndExchanges);

  app.get('/allWallets', allWallets);

}

export { registerRoutes };