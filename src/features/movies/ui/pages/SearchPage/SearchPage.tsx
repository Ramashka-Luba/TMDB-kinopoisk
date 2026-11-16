import s from './SearchPage.module.css'
import {useState} from "react";
import {useSearchMoviesQuery} from "@/features/movies/api/moviesApi";
import {ItemMovies} from "@/features/movies/ui/CardMovies/ItemMovies";
import {SearchForm} from "@/features/movies/ui/SearchForm/SearchForm";
import {useSearchParams} from "react-router";
import {Pagination} from "@/features/movies/ui/Pagination/Pagination";

export const SearchPage = () => {
    const [searchParams] = useSearchParams()
    const [searchQuery, setSearchQuery] = useState(() => searchParams.get('query') || '');
    const [currentPage, setCurrentPage] = useState(1);

    const {data, isFetching} = useSearchMoviesQuery(
        {query: searchQuery, page: currentPage},
        {skip: !searchQuery}
    )

    return (
        <>
            <SearchForm setSearchQuery={setSearchQuery}/>

            {!searchQuery && <div className={s.text}>Enter a movie title to start searching.</div>}
            {searchQuery && data?.results.length === 0 && <div className={s.text}>No matches found</div>}
            {isFetching && <div className={s.text}>Loading...</div>}

            {searchQuery && !isFetching &&
                <>
                    <div className={s.container}>
                        {data?.results.map(item => (
                            <ItemMovies
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                bgUrl={item.poster_path}
                            />
                        ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        pagesCount={data?.total_pages || 1}
                    />
                </>
            }
        </>
    );
};