import { JSX, useEffect, useState, KeyboardEvent } from "react";

import { RatingProps } from "./Rating.props";

import styles from './Rating.module.css';
import cn from "classnames";
import StarIcon from './Star.svg';

export const Rating = (props: RatingProps): JSX.Element => {
    const { 
        isEditable = false,
        rating,
        setRating,
        className,
        ...otherProps 
    } = props;

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number): void => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    key={i} 
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => changeRating(i + 1)}
                >
                    <StarIcon 
                    tabIndex={isEditable ? 0 : -1}
                    onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && 
                        keyEnterChangeRating(i + 1, e)}
                />
                </span>
            );
        });

        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number): void => { 
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const changeRating = (i: number): void => { 
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const keyEnterChangeRating = (i: number, e: KeyboardEvent<SVGAElement>): void => { 
        if (e.code !== 'Enter' || !setRating) {
            return;
        }
        setRating(i);
    };

    return (
        <div {...otherProps}>
            {ratingArray.map((r, i) => (
                <span key={i}>
                    {r}
                </span>
            ))}
        </div>
    );
};