import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import type { Product } from '../interfaces/IProducts';
import { ProductContext } from '../ProductContext';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import type { ReactElement, CSSProperties } from 'react';

const { Provider } = ProductContext;
export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ product, children, className, style }: Props) => {
  const { increaseBy, count } = useProduct();
  return (
    <Provider value={{ increaseBy, count, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
