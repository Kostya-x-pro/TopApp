import { DetailedHTMLProps, ParamHTMLAttributes } from 'react';

export interface SortProps
  extends DetailedHTMLProps<
    ParamHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
}

export enum SortEnum {
  Rating,
  Price,
}
