import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import clothing from '../../assets/clothing.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactClothing</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={clothing} alt='A pictur full of clothes!' />
      </div>
    </Fragment>
  );
};

export default Header;
