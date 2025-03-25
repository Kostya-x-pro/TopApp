import { JSX, KeyboardEvent } from "react";

import { SortEnum, SortProps } from "./Sort.props";

import styles from './Sort.module.css';
import cn from "classnames";
import SortIcon from './Sort.svg';

export const Sort = (props: SortProps): JSX.Element => {
    const { 
        sort,
        setSort,
        className,
        ...otherProps 
    } = props;

    const handleKey = (key:KeyboardEvent, term: SortEnum): void => {   
        if(key.code === 'Enter') {
            setSort(term);
        }
    };

    return (
       <div 
            className={cn(styles.sort, className)} 
            {...otherProps}
        >
            <span
                tabIndex={0}
                onKeyDown={(e) => handleKey(e, SortEnum.Rating)}
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort === SortEnum.Rating,
                })}
            >
                <SortIcon className={styles.sortIcon} />
                По рейтингу
            </span>
            <span
                tabIndex={0}
                onKeyDown={(e) => handleKey(e, SortEnum.Price)}
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort === SortEnum.Price,
                })}
            >
                <SortIcon className={styles.sortIcon} />
                По цене
            </span>
       </div>
    );
};