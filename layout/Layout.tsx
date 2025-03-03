import { JSX } from "react";

import { LayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";

import styles from './Paragraph.module.css';
import cn from "classnames";

export const Layout = (props: LayoutProps): JSX.Element => {
    const { children } = props;

    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div>
                    { children }
                </div>
            </div>
            <Footer />
        </>
    );
};