import { ReactNode } from 'react';

type AdProps = {
  children: ReactNode;
};

export const Ad = (props: AdProps): JSX.Element => {
  const { children } = props;

  return <div>{children}</div>;
};

export default Ad;
