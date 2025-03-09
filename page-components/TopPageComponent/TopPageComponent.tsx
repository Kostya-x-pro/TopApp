import { JSX } from "react";

import { TopPageComponentProps } from "./TopPage.Component.props";
import { HHData, Htag, Tag } from "@/components";

import cn from "classnames";
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from "@/interfaces/page.interface";

export const TopPageComponent = (props: TopPageComponentProps): JSX.Element => {
    const { 
        page,
        products,
        firstCategory, 
    } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">
                    {page.title}
                </Htag>
                {products && <Tag color="grey" size="m">{products.length}</Tag>}
                <span>сортировка</span>
            </div>
            <div>
                {products && products.map(p => (
                    <div key={p._id}>{p.title}</div>
                ))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>
            {firstCategory === TopLevelCategory.Courses && <HHData {...page.hh}/>}
        </div>
    );
};
