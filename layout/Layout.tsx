import { JSX, KeyboardEvent, useRef, useState } from "react";

import { LayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { UpBtn } from "@/components";
import cn from "classnames";

import styles from './Layout.module.css';

export const Layout = (props: LayoutProps): JSX.Element => {
    const { children } = props;
    const [isSkipledLinkDispleyed, setIsSkipledLinkDispleyed ] = useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    const skipContentAction = (key: KeyboardEvent): void => {
        if(key.code === 'Space' || key.code === 'Enter') {
            key.preventDefault();
            bodyRef.current?.focus();
        }

        setIsSkipledLinkDispleyed(false);
    };

    return (
        <div className={styles.wrapper}>
            <a 
                tabIndex={1} 
                onKeyDown={skipContentAction}
                onFocus={() => setIsSkipledLinkDispleyed(true)}
                className={cn(styles.skiplin, {
                [styles.displayed]: isSkipledLinkDispleyed
                })}

            >
                Сразу к содержанию
            </a>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.body} ref={bodyRef} tabIndex={0}>
                { children }
            </div>
            <Footer className={styles.footer} />
            <UpBtn />
        </div>
    );
};