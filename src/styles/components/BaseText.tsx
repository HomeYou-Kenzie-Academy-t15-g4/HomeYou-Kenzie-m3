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
      {tag === 'h2' && <h1 className={className}>{children}</h1>}
      {tag === 'h3' && <h1 className={className}>{children}</h1>}
    </>
  );
};

export default BaseText;
