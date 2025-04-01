import { JSX, useEffect } from "react";
//@ts-expect-error is necessary
import {useAnimation, motion} from 'framer-motion';

import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
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
        <motion.div
             className={styles.upBtn} 
             animate={controls}
             initial={{ opacity: 0 }}
        >
            <ButtonIcon 
                appearance="white" 
                icon="UpBtnIcon" 
                onClick={scrollToTop}
                aria-label="Наверх" 
            />
        </motion.div>
    );
};