import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import type { Props as ProductCardProps } from '../interfaces/IProducts';
import { ProductContext } from '../ProductContext';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { increaseBy, count } = useProduct();
  return (
    <Provider value={{ increaseBy, count, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
