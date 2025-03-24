import { JSX } from "react";
//@ts-expect-error is necessary
import {motion} from 'framer-motion';

import { ButtonProps } from './Button.props'; 

import ArrowIcon from './arrow.svg';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = (props: ButtonProps): JSX.Element => {
    const { 
        appearance = 'primary', 
        children, 
        arrow = 'none',
        className, 
        ...otherProps 
    } = props;

    return (
        <motion.button 
            whileHover={{scale: 1.05}}
            className={cn(styles.button, className, {
                [styles.primary] : appearance === 'primary',
                [styles.ghost] : appearance === 'ghost',
        })}
        {...otherProps}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down',
            })}>
                <ArrowIcon width={14} height={14} />
                </span>}
        </motion.button>
    );
};