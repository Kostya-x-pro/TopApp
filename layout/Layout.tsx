import { JSX } from "react";

import { LayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { UpBtn } from "@/components";

import styles from './Layout.module.css';

export const Layout = (props: LayoutProps): JSX.Element => {
    const { children } = props;

    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.body}>
                { children }
            </div>
            <Footer className={styles.footer} />
            <UpBtn />
        </div>
    );
};