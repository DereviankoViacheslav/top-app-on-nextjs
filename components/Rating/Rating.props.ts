import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface InterfaceRatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
  // className?: string;
  // children: ReactNode;
}
