import s from './SearchPage.module.css'
import {useState} from "react";
import {useSearchMoviesQuery} from "@/features/movies/api/moviesApi";
import {SearchForm} from "@/features/movies/ui/components/SearchForm/SearchForm";
import {ListMovies} from "@/features/movies/ui/components/ListMovies/ListMovies";
import {usePageParam} from "@/common/hooks";

export const SearchPage = () => {
    const {currentPage, searchParams, pageChangeHandler} = usePageParam()
    const [searchQuery, setSearchQuery] = useState(() => searchParams.get('query') || '');

    const {data} = useSearchMoviesQuery({query: searchQuery, page: currentPage}, {skip: !searchQuery})

    return (
        <section>
            <SearchForm setSearchQuery={setSearchQuery}/>

            {!searchQuery && <div className={s.text}>Enter a movie title to start searching.</div>}
            {searchQuery && data?.results.length === 0 && <div className={s.text}>No matches found</div>}

            {searchQuery &&
                <ListMovies
                    data={data?.results}
                    currentPage={currentPage}
                    onChangePage={pageChangeHandler}
                    totalPages={data?.total_pages}
                />
            }
        </section>
    );
};