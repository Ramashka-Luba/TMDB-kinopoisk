import s from './Rating.module.css';

type Props = {
    rating: number;
}

const getRatingClass = (rating: number) => {
    if (rating < 5) return s.negative
    if (rating < 7) return s.neutral
    return s.positive
}

export const Rating = ({rating}: Props) => {
    const value = rating.toFixed(1);
    const modifierRating = getRatingClass(rating)

    return (
        <span className={`${s.rating} ${modifierRating}`}>{value}</span>
    );
}