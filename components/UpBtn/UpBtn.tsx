import { JSX, useEffect } from "react";
//@ts-expect-error is necessary
import {useAnimation, motion} from 'framer-motion';
import UpBtnIcon from './UpBtn.svg';
import { useScrollY } from "@/hooks/useScrollY";

import styles from './UpBtn.module.css';

export const UpBtn = (): JSX.Element => {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        controls.start({opacity: y / document.body.scrollHeight});
    }, [y, controls]);

    const scrollToTop = () :void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.button
             className={styles.upBtn} 
             onClick={scrollToTop}
             animate={controls}
             initial={{ opacity: 0 }}
        >
            <UpBtnIcon/>
        </motion.button>
    );
};