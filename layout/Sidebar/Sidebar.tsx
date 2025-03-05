import { JSX } from "react";

import { SidebarProps } from "./Sidebar.props";

import styles from './Sidebar.module.css';
import cn from "classnames";
import { Menu } from "../Menu/Menu";

export const Sidebar = (props: SidebarProps): JSX.Element => {
    const { ...otherProps } = props;

    return (
        <div {...otherProps}>
            <Menu />
        </div>
    );
};