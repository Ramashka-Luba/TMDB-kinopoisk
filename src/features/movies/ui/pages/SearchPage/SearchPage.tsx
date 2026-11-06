import s from './SearchPage.module.css'
import {useState} from "react";
import {useSearchMoviesQuery} from "@/features/movies/api/moviesApi";
import {CardMovies} from "@/features/movies/ui/CardMovies/CardMovies";
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

            {!searchQuery && <div>Enter a movie title to start searching.</div>}
            {searchQuery && data?.results.length === 0 && <div>No matches found</div>}
            {isFetching && <div>Loading...</div>}

            {searchQuery && !isFetching &&
                <div className={s.container}>
                    {data?.results.map(item => (
                        <CardMovies
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            bgUrl={item.poster_path}
                        />
                    ))}
                </div>
            }

            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={data?.total_pages || 1}/>
        </>
    );
};