import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer(props) {
  return (
    <>
      <div>Items - {props.Item}</div>
      <button onClick={props.buyItem}>Buy Item</button>
    </>
  );
}

const mapStateToProps = (state, myProps) => {
  const ItemState = myProps.cake
    ? state.cake.numOfCake
    : state.iceCream.numOfIceCreams;
  return {
    Item: ItemState,
  };
};

const mapDispatchToProps = (dispatch, myProps) => {
  const dispatchFunction = myProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
