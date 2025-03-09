import { JSX } from "react";

import { priceRU } from "@/helpers/helpres";
import { HHDatarops } from "./HHData.props";
import { Card } from "../Card/Card";
import RateIcon from './rate.svg';

import styles from './HHData.module.css';

export const HHData = (props: HHDatarops): JSX.Element => {
    const {
        count,
        juniorSalary,
        middleSalary,
        seniorSalary
    } = props;
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>Всего вакансии</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>{priceRU(juniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon/>
                        <RateIcon/>
                    </div>
                </div>

                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>{priceRU(middleSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                        <RateIcon/>
                    </div>
                </div>

                <div>
                    <div className={styles.title}>Проффесионал</div>
                    <div className={styles.salaryValue}>{priceRU(seniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                    </div>
                </div>
            </Card>
        </div>
    );
};