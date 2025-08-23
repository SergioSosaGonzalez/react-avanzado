import React from 'react';

export const useProduct = () => {
  const [count, setCount] = React.useState(0);
  const increaseBy = (value: number) => {
    setCount((prevCount) => Math.max(prevCount + value, 0));
  };
  return { count, increaseBy };
};
