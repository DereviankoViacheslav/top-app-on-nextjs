import React, { useEffect, useState, KeyboardEvent } from 'react';
import cn from 'classnames';
import { InterfaceRatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: InterfaceRatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const changeDisplay = (cnt: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(cnt);
  };

  const onClick = (cnt: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(cnt);
  };

  const handleSpace = (event: KeyboardEvent<SVGAElement>, cnt: number) => {
    if (event.code != 'Space' || !setRating) {
      return;
    }
    setRating(cnt);
  };

  const constructRating = (cntRating: number) => {
    const updatedArray = ratingArray.map((elem: JSX.Element, idx: number) => {
      return (
        <span
          key={idx}
          className={cn(styles.star, {
            [styles.filled]: idx < cntRating,
            [styles.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(idx + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(idx + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(event: KeyboardEvent<SVGAElement>) =>
              isEditable && handleSpace(event, idx + 1)
            }
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((elem, idx) => (
        <span key={idx}>{elem}</span>
      ))}
    </div>
  );
};
