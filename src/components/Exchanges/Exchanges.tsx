import { useSelector } from "react-redux";
import { IExchangeStore } from "./IExchange";
import Card from "../Card/Card";
import Grid from "../Grid/Grid";

function Exchanges() {
  const { exchanges } = useSelector((state: IExchangeStore) => state.getExchanges);

  return (
    <Grid>
      {exchanges?.map((item, i) => (
        <Card title={item.name}/>
      ))}
    </Grid>
  );
}

export default Exchanges;
