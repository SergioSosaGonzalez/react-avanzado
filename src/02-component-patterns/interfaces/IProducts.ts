import type { JSX, ReactElement } from 'react';

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface ProductContextProps {
  increaseBy: (value: number) => void;
  count: number;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: Props): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
