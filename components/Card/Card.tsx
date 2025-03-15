import { ForwardedRef, forwardRef, JSX } from "react";

import { CardProps } from "./Card.props";

import styles from './Card.module.css';
import cn from "classnames";

export const Card = forwardRef((props: CardProps, ref:ForwardedRef<HTMLDivElement>): JSX.Element => {
    const { 
        children, 
        color = 'white',
        className,
        ...otherProps 
    } = props;

    return (
        <div 
            className={cn(styles.card, className, {
            [styles.blue]: color === 'blue',
        })}
        ref={ref}
        {...otherProps}
        >
            { children }
        </div>
    );
});