import Card from '../UI/Card';
import ClothesItem from './ClothesItem/ClothesItem';
import classes from './AvailableClothes.module.css';

const DUMMY_CLOTHES = [
  {
    id: "c1",
    name: "Shirt",
    description: "Comfortable shirt",
    price: 24.99,
  },
  {
    id: "c2",
    name: "Pants",
    description: "Slim Pants",
    price: 29.99,
  },
  {
    id: "c3",
    name: "Jacket",
    description: "Waterproof Jacket",
    price: 54.99,
  },
  {
    id: "c4",
    name: "Socks (3 Pack)",
    description: "Softy male socks",
    price: 9.99,
  },
];

const AvailableClothes = () => {
  const ClothesList = DUMMY_CLOTHES.map((clothe) => (
    <ClothesItem
      key={clothe.id}
      id={clothe.id}
      name={clothe.name}
      description={clothe.description}
      price={clothe.price}
    />
  ));

  return (
    <section className={classes.Clothes}>
      <Card>
        <ul>{ClothesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableClothes;
