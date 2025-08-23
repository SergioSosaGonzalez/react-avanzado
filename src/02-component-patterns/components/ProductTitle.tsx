import { useContext } from 'react';
import { ProductContext } from '../ProductContext';
import styles from '../styles/styles.module.css';
export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);
  const titleToShow = title
    ? title
    : product.title
    ? product.title
    : 'No title';
  return <span className={styles.productDescription}>{titleToShow}</span>;
};
