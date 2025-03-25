import { JSX, useContext, KeyboardEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppContext } from "@/context/app.context";
//@ts-expect-error is necessary
import { motion } from 'framer-motion'; 

import { PageItem } from "@/interfaces/menu.interface";
import { FirstLevelMenuItem } from "@/interfaces/menu.interface";

import cn from "classnames";
import styles from './Menu.module.css';

import { firstLevelMenu } from "@/helpers/helpres";

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();

    const variants = {
        visible: {
            marginBottom: 20,  
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: { marginBottom: 0 }
    };

    const variantsChildren = {
        visible: { opacity: 1, height: 31 },
        hidden: { opacity: 0, height: 0 }
    };

    const openSecondLeveKey = (key: KeyboardEvent, secondKategory: string): void => {
        if(key.code === 'Space' || key.code === 'Enter') {
            key.preventDefault();
            openSecondLevel(secondKategory);
        }
    };

    const openSecondLevel = (secondCategory: string):void => {
        if (setMenu) {
            setMenu(menu.map(m => {
                if (m._id.secondCategory === secondCategory) {
                    m.isOpened = !m.isOpened;
                }
                return m;
            }));
        }
    };
    
    const buildFirstLevel = (): JSX.Element => {
        return(
            <>
            {firstLevelMenu.map(m => (
                <div key={m.route}>
                    <Link href={`/${m.route}`}>
                        <div className={cn(styles.firstLevel, {
                            [styles.firstLevelActive]: m.id === firstCategory
                        })}>
                            {m.icon}
                            <span>{m.name}</span>
                        </div>
                    </Link>
                    {m.id === firstCategory && buildSecondLevel(m)}
                </div>
            ))}
            </>
        );
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => {

                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }

                    return (
                        <div key={m._id.secondCategory}>
                            <div 
                                tabIndex={0}
                                className={styles.secondLevel}
                                onKeyDown={(key: KeyboardEvent) => openSecondLeveKey(key, m._id.secondCategory)}
                                onClick={() => openSecondLevel(m._id.secondCategory)}>
                                {m._id.secondCategory}
                            </div>
                            <motion.div 
                                layout
                                variants={variants}
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                                className={cn(styles.secondLevelBlock)}
                                >
                                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string, isOpend: boolean): JSX.Element => {
        return (
            <>
                {pages.map(p => (
                <motion.div
                    variants={variantsChildren}
                    key={p._id}
                >
                    <Link 
                    href={`/${route}/${p.alias}` }
                    tabIndex={isOpend ? 0 : -1}
                    className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
                    })}
                    >
                        {p.category}
                </Link>
                </motion.div>

                ))}
            </>
        );
    };

    return (
        <nav role="navigation" className={styles.menu}>
            {buildFirstLevel()}
        </nav>    
    );
};