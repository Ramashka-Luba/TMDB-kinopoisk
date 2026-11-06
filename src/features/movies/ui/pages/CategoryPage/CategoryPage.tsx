import {useGetMoviesByCategoryQuery} from "@/features/movies/api/moviesApi";
import {CardMovies} from "@/features/movies/ui/CardMovies/CardMovies";
import s from './CategoryPage.module.css'
import {useParams} from "react-router";
import type {CategoryType} from "@/features/movies/api/moviesApi.type";
import {CATEGORIES} from "@/common/constants";
import {ButtonNavLink} from "@/common/components/Button/ButtonNavLink/ButtonNavLink";
import {CategoryTitle} from "@/features/movies/ui/CategoryTitle/CategoryTitle";
import {Pagination} from "@/features/movies/ui/Pagination/Pagination";
import {useState} from "react";

export const CategoryPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Извлекаем текущую категорию из URL (например: 'popular')
    const {category = 'popular'} = useParams<{ category: CategoryType }>()

    // Передаем категорию напрямую в хук. RTK Query сам перезапустит запрос при смене URL!
    const {data, isLoading, error} = useGetMoviesByCategoryQuery({category: category, params: {page: currentPage} })

    return (
        <section>
            <div className={s.containerBtn}>
                {CATEGORIES.map(cat => (
                    <ButtonNavLink key={cat.id} to={`/movies/${cat.id}`} title={cat.label} variant/>
                ))}
            </div>

            {isLoading && <div>Loading...</div>}
            {error && <div>Произошла ошибка при загрузке</div>}

            {!isLoading && !error &&  <CategoryTitle category={category}/>}

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

            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagesCount={Math.min(data?.total_pages || 1, 500)}
            />
        </section>
    );
};

