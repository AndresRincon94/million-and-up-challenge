import { useSelector } from "react-redux";
import { IExchangeStore } from "./IExchange";
import Card from "../Card/Card";
import Grid from "../Grid/Grid";
import { useFetchList } from "../../hooks/useFetchList";
import { getExchanges } from "../../actions/exchange.action";
import Loader from "../Loader/Loader";

function Exchanges() {
  const { loading, error } = useFetchList('exchanges/', getExchanges);
  const { exchanges } = useSelector((state: IExchangeStore) => state.getExchanges);

  if (error) return <span>Error: {error}</span>;

  if (loading) return <Loader />;
  
  return (
    <Grid>
      {exchanges?.map((item) => (
        <Card title={item.name} key={`exchange-card-${item.id}`}/>
      ))}
    </Grid>
  );
}

export default Exchanges;
