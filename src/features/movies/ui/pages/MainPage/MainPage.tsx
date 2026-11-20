import {Banner} from "@/features/movies/ui/pages/MainPage/Banner/Banner";
import s from './MainPage.module.css'
import {CATEGORIES} from "@/common/constants";
import {CategorySection} from "@/features/movies/ui/pages/MainPage/CategorySection/CategorySection";
import {SearchForm} from "@/features/movies/ui/components/SearchForm/SearchForm";
import {useGetMoviesByCategoryQuery} from "@/features/movies/api/moviesApi";
import {MainPageSkeleton} from "@/features/movies/ui/pages/MainPage/MainPageSkeleton/MainPageSkeleton";

export const MainPage = () => {

    const {isLoading} = useGetMoviesByCategoryQuery({ category: 'popular', params: { page: 1 } });

    if (isLoading) return (
        <MainPageSkeleton/>
    )

    return (
        <>
            <div className={s.wrapper}>
                <Banner/>

                <div className={s.content}>
                    <h2 className={s.contentTitle}>Welcome</h2>
                    <div className={s.contentDesc}>Browse highlighted titles from TMDB</div>

                    <SearchForm/>
                </div>
            </div>

            {CATEGORIES.map(cat => (
                <CategorySection key={cat.id} category={cat}/>
            ))}
        </>
    )
};



