import s from "./ItemMoviesSkeleton.module.css";


export const ItemMoviesSkeleton = () => {
    return (
        <div className={s.cardSkeleton}>
            <span className={s.pasterSkeleton}></span>
            <span className={s.tileLinkSkeleton}></span>
        </div>
    );
};

