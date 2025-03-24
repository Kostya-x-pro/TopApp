import { JSX, useEffect, useReducer } from "react";

import { TopPageComponentProps } from "./TopPage.Component.props";
import { Advantages, HHData, Htag, Product, Sort, Tag } from "@/components";

import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from "@/interfaces/page.interface";
import { SortEnum } from "@/components/Sort/Sort.props";
import { sortReduser } from "./sort.reducer";

export const TopPageComponent = (props: TopPageComponentProps): JSX.Element => {
    const { 
        page,
        products,
        firstCategory, 
    } = props;

    
    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReduser,{ products, sort: SortEnum.Rating});

    const setSort = (sort: SortEnum): void => {
        dispatchSort({ type: sort });
    };

    useEffect(() => {
        dispatchSort({ type: 'reset', initialState: products});
    }, [products]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag="h1">
                    {page.title}
                </Htag>
                {products && <Tag color="grey" size="m">{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}/>
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p => (<Product layout product={p} key={p._id}/>))}
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
