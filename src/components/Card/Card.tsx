import styled from "styled-components"
import cardStyle from "./Card.style";
import ICard from "./ICard";

const CardWrapper = styled.div`${cardStyle.wrapper}`;

function Card({
  title,
}: ICard) {
  return (
    <CardWrapper>
      <span>Name: {title}</span>
    </CardWrapper>
  )
}

export default Card;
