import { useContext } from 'react';

import ClothesItemForm from './ClothesItemForm';
import classes from './ClothesItem.module.css';
import CartContext from '../../../store/cart-context';

const ClothesItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.clothes}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ClothesItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ClothesItem;
