import { useFetchList } from './hooks/useFetchList';
import Loader from './components/Loader/Loader';
import Cryptos from './components/Cryptos/Cryptos';
import { getCryptos } from './actions/crypto.action';
import { getExchanges } from './actions/exchange.action';
import Exchanges from './components/Exchanges/Exchanges';

function App() {
  return (
    <div className="App">
      <Cryptos />
      <br />
      {/* <Exchanges /> */}
    </div>
  );
}

export default App;
