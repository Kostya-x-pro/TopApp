import { JSX } from "react";

import { Advantagesprops } from "./Advantages.props";
import CheckIcon from './check.svg';
import styles from './Advantages.module.css';

export const Advantages = (props: Advantagesprops): JSX.Element => {
    const {
        advantages
    } = props;
    return (
        <>
           {advantages.map(a => (
            <div key={a._id} className={styles.advantage}>
                <CheckIcon/>
                <div className={styles.title}>{a.title}</div>
                    <hr className={styles.vline} />
                <div>{a.description}</div>
            </div>
           ))}
        </>
    );
};