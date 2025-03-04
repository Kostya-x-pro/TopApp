import { JSX } from "react";
import { TagProps } from "./Tag.props";

import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = (props: TagProps): JSX.Element => {
    const {
        size = 's', 
        color = 'ghost', 
        href, 
        children,
        className, 
        ...otherProps
    } = props;

    return (
        <div
            className={cn(styles.tag, className, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.m]: size === 'l',
                [styles.ghost]: color === 'ghost',
                [styles.red]: color === 'red',
                [styles.grey]: color === 'grey',
                [styles.green]: color === 'green',
                [styles.primary]: color === 'primary',
                [styles.white]: color === 'white', 
            })}
            {...otherProps}
        >
            { href ? 
                <a href={href}>{children}</a> :
                <>{children}</>
            }
            {children}
        </div>
    );
};