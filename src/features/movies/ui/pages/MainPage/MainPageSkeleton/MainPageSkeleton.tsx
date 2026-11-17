import s from "./MainPageSkeleton.module.css";
import {Fragment} from "react";
import {ItemMoviesSkeleton} from "@/features/movies/ui/ItemMovies/ItemMoviesSkeleton/ItemMoviesSkeleton";

export const MainPageSkeleton = () => {
    return (
        <>
            <div className={s.bannerSkeleton}></div>
            <div className={s.wrapperSkeleton}>
                <div className={s.headingSkeleton}>
                    <span className={s.titleSkeleton}></span>
                    <span className={s.buttonSkeleton}></span>
                </div>
                <div className={s.containerSkeleton}>
                    {Array(6).fill(null).map((_, index) => (
                        <Fragment key={index + 1}>
                            <ItemMoviesSkeleton/>
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}