import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import UpBtnIcon from './UpBtn.svg';
import CloseIcon from './close.svg';
import MenuIcon from './menu.svg';

export const ButtonIcons = {
  UpBtnIcon,
  CloseIcon,
  MenuIcon,
};

export type IconName = keyof typeof ButtonIcons;

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: IconName;
  appearance: 'primary' | 'white';
}
