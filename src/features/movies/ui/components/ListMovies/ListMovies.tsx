import s from "./ListMovies.module.css";
import {ItemMovies} from "@/features/movies/ui/components/ItemMovies/ItemMovies";
import {Pagination} from "@/features/movies/ui/components/Pagination/Pagination";
import type {MovieItem} from "@/features/movies/api/moviesApi.type";

type Props = {
    data?: MovieItem[]
    currentPage: number;
    onChangePage: (page: number) => void;
    totalPages?: number
}

export const ListMovies = ({data = [], currentPage, onChangePage, totalPages = 1}: Props) => {

    return (
        <>
            <div className={s.container}>
                {data.map(item => (
                    <ItemMovies
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        bgUrl={item.poster_path}
                        rating={item.vote_average}
                    />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                setCurrentPage={onChangePage}
                pagesCount={Math.min(totalPages, 500)}
            />

        </>
    );
};
