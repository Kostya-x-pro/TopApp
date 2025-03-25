import { JSX, useState, KeyboardEvent } from "react";

import { SearchProps } from "./Search.props";

import styles from './Search.module.css';
import cn from "classnames";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import GlassIcon from './glass.svg';
import { useRouter } from "next/router";

export const Search = (props: SearchProps): JSX.Element => {
    const { 
        className,
        ...otherProps 
    } = props;

    const [search, setSearch] = useState('');
    const router = useRouter();
    const goToSearch = ():void => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) :void => {
        if (e.key ==="Enter") {
            goToSearch();
        }
    };

    return (
        <form
            role="search"
            className={cn(styles.search, className)}
            {...otherProps}>
                <Input 
                    value={search}
                    className={styles.input}
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Поиск..."/>
                <Button
                    appearance="primary"
                    className={styles.button}
                    onClick={goToSearch}
                    aria-label="Кнопка поиск курса" 
                >
                    <GlassIcon/>
                </Button>
        </form>
    );
};