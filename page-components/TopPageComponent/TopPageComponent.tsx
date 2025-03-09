import { JSX } from "react";

import { TopPageComponentProps } from "./TopPage.Component.props";
import { Advantages, HHData, Htag, Paragraph, Tag } from "@/components";

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
            {firstCategory === TopLevelCategory.Courses && page.hh && <HHData {...page.hh}/>}
            {page.advantages && page.advantages.length > 0 && (
                <>
                    <Htag tag="h2">Преимущества</Htag>
                    <Advantages advantages={page.advantages}/>
                </>
            )}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}} />}
            <Htag tag="h3">Получаемые навыки</Htag>
            {page.tags.map(t => <Tag key={t} color="primary">{t}</Tag>)}
        </div>
    );
};
