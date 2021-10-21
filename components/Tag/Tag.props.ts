import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export const enum EnumTagSize {
  small = 'small',
  medium = 'medium'
}

export const enum EnumColor {
  ghost = 'ghost',
  red = 'red',
  grey = 'grey',
  green = 'green',
  primary = 'primary'
}

export interface InterfaceTagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: EnumTagSize;
  color?: EnumColor;
  href?: string;
  children: ReactNode;
}
