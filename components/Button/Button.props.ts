import { type } from 'os';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export const enum EnumArrow {
  right = 'right',
  down = 'down',
  none = 'none'
}

export const enum EnumAppearance {
  primary = 'primary',
  ghost = 'ghost'
}

export interface InterfaceButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance?: EnumAppearance;
  arrow?: EnumArrow;
  className?: string;
  children: ReactNode;
}
