import { JSX } from "react";
import { format } from 'date-fns';

import { FooterProps } from "./Footer.props";

import styles from './Footer.module.css';
import cn from "classnames";

export const Footer = (props: FooterProps): JSX.Element => {
    const {className, ...otherProps } = props;
    
    return (
        <footer className={cn(className, styles.footer)} {...otherProps}>
            <a 
                target="_blank"
                className={styles.footer_link}>
                    OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </a>
            <a 
                target="_blank" 
                className={styles.footer_link}>
                    Пользовательское
            </a>
            <a 
                target="_blank" 
                className={styles.footer_link}>
                конфиденциальности
            </a>
        </footer>
    );
};