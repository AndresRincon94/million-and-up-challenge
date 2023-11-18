import Exchange from './components/Exchanges/Exchanges';
import { getExchanges } from './actions/exchange.action';
import { useFetchList } from './hooks/useFetchList';
import Loader from './components/Loader/Loader';

function App() {
  const { loading, error } = useFetchList('exchanges/', getExchanges);

  return (
    <div className="App">
      {error && <li>Error: {error}</li>}
      {loading && <Loader />}
      <Exchange />
    </div>
  );
}

export default App;
