import { JSX } from "react";

import { ButtonIconProps, ButtonIcons } from './ButtonIcon.props'; 

import styles from './ButtonIcon.module.css';
import cn from 'classnames';

export const ButtonIcon = (props: ButtonIconProps): JSX.Element => {
    const { 
        appearance = 'primary', 
        icon,
        className, 
        ...otherProps 
    } = props;

    const IconComponent = ButtonIcons[icon];

    return (
        <button className={cn(styles.button, className, {
            [styles.primary] : appearance === 'primary',
            [styles.white] : appearance === 'white',
        })}
        {...otherProps}
        >
            <IconComponent/>
        </button>
    );
};