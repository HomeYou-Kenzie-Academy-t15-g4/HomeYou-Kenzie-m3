import { ReactNode } from 'react';

interface IBaseTextProps {
  children: ReactNode;
  tag: 'h1' | 'h2' | 'h3';
  className?: string;
}

const BaseText = ({ children, tag, className }: IBaseTextProps) => {
  return (
    <>
      {tag === 'h1' && <h1 className={className}>{children}</h1>}
      {tag === 'h2' && <h2 className={className}>{children}</h2>}
      {tag === 'h3' && <h3 className={className}>{children}</h3>}
    </>
  );
};

export default BaseText;
