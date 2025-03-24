import { JSX, useEffect, useState } from "react";
import cn from "classnames";
//@ts-expect-error is necessary
import {motion} from 'framer-motion';
import { useRouter } from "next/router";

import { ButtonIcon } from "@/components";
import { HeaderProps } from "./Header.props";
import { Sidebar } from "../Sidebar/Sidebar";

import Logo from '../logo.svg';
import styles from './Header.module.css';

export const Header = (props: HeaderProps): JSX.Element => {
    const { className, ...otherProps } = props;

    const [isOpend, setIsOpened] = useState<boolean>(false);
    const router = useRouter();
    useEffect(() => {
        setIsOpened(false);
    }, [router]);

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: 0,
			x: '100%',
		}
	};

    return (
        <header 
            className={cn(className, styles.header)}
            {...otherProps}
        >
            <Logo />
            <ButtonIcon 
                appearance="white" 
                icon="MenuIcon" 
                onClick={() => setIsOpened(true)} />
            <motion.div 
                className={styles.mobileMenu}
                variants={variants}
                animate={isOpend ? 'opened' : 'closed'}    
            >
            <Sidebar/>
            <ButtonIcon 
                className={styles.menuClose} 
                appearance="white" 
                icon="CloseIcon"
                onClick={() => setIsOpened(false) }/>
            </motion.div>
        </header>
    );
};