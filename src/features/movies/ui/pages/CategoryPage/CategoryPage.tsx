import {useGetMoviesByCategoryQuery} from "@/features/movies/api/moviesApi";
import s from './CategoryPage.module.css'
import {useParams} from "react-router";
import type {CategoryType} from "@/features/movies/api/moviesApi.type";
import {CATEGORIES} from "@/common/constants";
import {ButtonNavLink} from "@/common/components/Button/ButtonNavLink/ButtonNavLink";
import {CategoryTitle} from "@/features/movies/ui/CategoryTitle/CategoryTitle";
import {ListMovies} from "@/features/movies/ui/ListMovies/ListMovies";
import {usePageParam} from "@/common/hooks";

export const CategoryPage = () => {
    const {category = 'popular'} = useParams<{ category: CategoryType }>()
    const {currentPage, pageChangeHandler} = usePageParam()

    const {data, error} = useGetMoviesByCategoryQuery({category: category, params: {page: currentPage} })

    return (
        <section>
            <div className={s.containerBtn}>
                {CATEGORIES.map(cat => (
                    <ButtonNavLink key={cat.id} to={`/movies/${cat.id}`} title={cat.label} variant/>
                ))}
            </div>

            {error && <div>Произошла ошибка при загрузке</div>}

            {!error &&  <CategoryTitle category={category}/>}

            <ListMovies
                data={data?.results}
                currentPage={currentPage}
                onChangePage={pageChangeHandler}
                totalPages={data?.total_pages}
            />
        </section>
    );
};