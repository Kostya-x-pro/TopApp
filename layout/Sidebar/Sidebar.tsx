import { JSX } from "react";

import { SidebarProps } from "./Sidebar.props";

import cn from "classnames";
import { Menu } from "../Menu/Menu";
import { Search } from "@/components";
import Logo from '../logo.svg';
import styles from './Sidebar.module.css';

export const Sidebar = (props: SidebarProps): JSX.Element => {
    const { 
        className,  
        ...otherProps
    } = props;

    return (
        <div 
            className={cn(className, styles.sidebar)}
            {...otherProps} 
        >
                <Logo
                    classNames={styles.logo} />
                    <Search/>
                <Menu />
        </div>
    );
};