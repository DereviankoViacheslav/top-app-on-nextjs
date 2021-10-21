import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export const enum EnumParagraphSize {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export interface InterfacePtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: EnumParagraphSize;
  className?: string;
  children: ReactNode;
}
