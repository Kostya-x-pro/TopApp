import { JSX, useContext, KeyboardEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppContext } from "@/context/app.context";
//@ts-expect-error is necessary
import { motion, useReducedMotion } from 'framer-motion'; 

import { PageItem } from "@/interfaces/menu.interface";
import { FirstLevelMenuItem } from "@/interfaces/menu.interface";

import cn from "classnames";
import styles from './Menu.module.css';

import { firstLevelMenu } from "@/helpers/helpres";

export const Menu = (): JSX.Element => {
    const [announse, setAnnounce] = useState<'closed' | 'opened' | undefined>();
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();
    const shouldReduceMotion = useReducedMotion();

    const variants = {
        visible: {
            marginBottom: 20,  
            transition: shouldReduceMotion ? {} : {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: { marginBottom: 0 }
    };

    const variantsChildren = {
        visible: { opacity: 1, height: 31 },
        hidden: { opacity: shouldReduceMotion ? 1 : 0, height: 0 }
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
                    setAnnounce(m.isOpened ? 'closed' : 'opened');
                    m.isOpened = !m.isOpened;
                }
                return m;
            }));
        }
    };
    
    const buildFirstLevel = (): JSX.Element => {
        return(
            <ul className={styles.firstLevelList}>
            {firstLevelMenu.map(m => (
                // eslint-disable-next-line jsx-a11y/role-supports-aria-props
                <li key={m.route} aria-expanded={m.id === firstCategory}>
                    <Link href={`/${m.route}`}>
                        <div className={cn(styles.firstLevel, {
                            [styles.firstLevelActive]: m.id === firstCategory
                        })}>
                            {m.icon}
                            <span>{m.name}</span>
                        </div>
                    </Link>
                    {m.id === firstCategory && buildSecondLevel(m)}
                </li>
            ))}
            </ul>
        );
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
        return (
            <ul className={styles.secondBlock}>
                {menu.map(m => {

                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }

                    return (
                        <li key={m._id.secondCategory}>
                            <button
                                className={styles.secondLevel}
                                onKeyDown={(key: KeyboardEvent) => openSecondLeveKey(key, m._id.secondCategory)}
                                onClick={() => openSecondLevel(m._id.secondCategory)}
                                aria-expanded={m.isOpened}
                                >
                                {m._id.secondCategory}
                            </button>
                            <motion.ul 
                                layout
                                variants={variants}
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                                className={cn(styles.secondLevelBlock)}
                                >
                                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
                            </motion.ul>
                        </li>
                    );
                })}
            </ul>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string, isOpend: boolean): JSX.Element => {
        return (
            <>
                {pages.map(p => (
                <motion.li
                    variants={variantsChildren}
                    key={p._id}                
                >
                    <Link 
                    href={`/${route}/${p.alias}` }
                    tabIndex={isOpend ? 0 : -1}
                    className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
                    })}
                    aria-current={`/${route}/${p.alias}` === router.asPath ? 'page': false}
                    >
                        {p.category}
                </Link>
                </motion.li>

                ))}
            </>
        );
    };

    return (
        <nav role="navigation" className={styles.menu}>
            {announse && <span className="visualyHidden" role="log">{announse == 'opened' ? 'развернуто' : 'свернуто'}</span>}
            {buildFirstLevel()}
        </nav>    
    );
};