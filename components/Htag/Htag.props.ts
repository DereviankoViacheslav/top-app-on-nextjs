import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export const enum EnumTag {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3'
}

export interface InterfaceHtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  tag?: EnumTag;
  className?: string;
  children: ReactNode;
}
